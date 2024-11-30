import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  product_id: { type: String, required: true },
  product_name: { type: String, required: true },
  email: { type: String, required: true },
  review: { type: String, required: true },
}, { collection: 'reviews-collection' }, {timestamps: true});

const Review = mongoose.model('Review', reviewSchema)

export default Review