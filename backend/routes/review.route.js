import { Router } from "express";
import {
  createReview,
  deleteReview,
  updateReview,
  getUserReviews,
  getAllReviews,
} from "../controllers/review.controller.js";
import authenticateUser from "../middleware/authMiddleware.js";

const router = Router();

router.post('/',authenticateUser, createReview);
router.put('/:id',authenticateUser, updateReview);
router.delete('/:id',authenticateUser, deleteReview);
router.get('/',authenticateUser, getUserReviews);
// router.get('/',getAllReviews);

export default router
