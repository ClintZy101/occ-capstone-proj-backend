import { Router } from "express";
import {
  createReview,
  getAllReviews,
  getReviewsByProductId,
  deleteReview,
  updateReview,
} from "../controllers/review.controller.js";
import authenticateUser from "../middleware/authMiddleware.js";

const router = Router();

router.post('/',authenticateUser, createReview);
router.get('/',getAllReviews);

export default router
