import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    product_id: { type: String, required: true },
    product_name: { type: String, required: true },
    user_email: { type: String, required: true },
    product_review: { type: String, required: true },
    product_rating:{type:String,}
  },
  { collection: "reviews-collection", timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;
