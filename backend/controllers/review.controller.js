import mongoose from "mongoose";
import Review from "../models/review.model.js";

export const createReview = async (req, res) => {
  const review = req.body;
  if (
    !review.product_id ||
    !review.product_name ||
    !review.user_email ||
    !review.product_review
  ) {
    return res.status(400).json({
      success: false,
      message: "Please provide the necessary fields.",
    });
  }

  const newReview = new Review(review);
  try {
    await newReview.save();
    res.status(201).json({ success: true, data: newReview });
  } catch (error) {
    console.log("Error in Create Review:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.status(200).json({ success: true, data: reviews });
  } catch (error) {
    console.log(`error in fetching all  reviews:`, error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// export const getReviewsByProductId = async (req, res) => {
//   const { productId } = req.params; // Extract product ID from the request parameters

//   try {
//     // Fetch reviews matching the productId
//     const reviews = await Review.find({ productId });

//     // Check if reviews exist for the given productId
//     if (!reviews.length) {
//       return res.status(404).json({
//         success: false,
//         message: `No reviews found for product ID: ${productId}`,
//       });
//     }

//     res.status(200).json({ success: true, data: reviews });
//   } catch (error) {
//     console.error(
//       `Error fetching reviews for product ID ${productId}:`,
//       error.message
//     );
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };

export const updateReview = async (req, res) => {
  const {  id } = req.params;
  const review = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Id, try again" });
  }
  try {
    const updatedReview = await Review.findByIdAndUpdate(id, review, { new: true });
    res.status(200).json({
      success: true,
      message: "Review updated successfully",
      data: updatedReview,
    });
  } catch (error) {
    console.log("error in updating review:", error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const deleteReview = async (req,res) => {
    const {id} =req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message: 'invalid id'})
    }
    try {
        await Review.findByIdAndDelete(id)
        res.status(200).json({success:true, message:"deleted review successfully"})
    } catch (error) {
        console.log(`error in deleting review:`, error.message)
        res.status(500).json({success:false, message:"server error"})
    }
}
