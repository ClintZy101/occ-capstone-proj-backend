
import Checkout from "../models/checkout-history.model.js";

export const createCheckout = async (req, res) => {
    const checkout = req.body;
    if (
      !checkout.user_email||
      !checkout.items
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide the necessary fields.",
      });
    }
  
    const newCheckout = new Checkout(checkout);
    try {
      await newCheckout.save();
      res.status(201).json({ success: true, data: newCheckout });
    } catch (error) {
      console.log("Error in Create Review:", error.message);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  };

//   export const getAllCheckoutHistory = async (req, res) => {
//     try {
//       const checkout = await Checkout.find({});
//       res.status(200).json({ success: true, data: checkout });
//     } catch (error) {
//       console.log(`error in fetching all  checkout:`, error.message);
//       res.status(500).json({ success: false, message: "Server Error" });
//     }
//   };

  export const getUserCheckoutHistory = async (req, res) => {
    const userEmail = req.user.email; // Extracted from token after auth middleware
    try {
      const checkout = await Checkout.find({ user_email: userEmail });
      res.status(200).json({ success: true, data: checkout });
    } catch (error) {
      console.error("Error in getUserCheckoutHistory:", error.message);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  };
  