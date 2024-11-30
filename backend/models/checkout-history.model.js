import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  item_id: { type: String, required: true },
  item_name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  image:{type:String, required:true}
});

const checkoutSchema = new mongoose.Schema(
  {
    user_email: { type: String, required: true },
    // order_id: { type: String, required: true },
    items: { type: [orderItemSchema], required: true }, // Array of order items
  },
  {
    collection: "checkout-history",
    timestamps: true,
  }
);

const Checkout = mongoose.model("Checkout", checkoutSchema);

export default Checkout;
