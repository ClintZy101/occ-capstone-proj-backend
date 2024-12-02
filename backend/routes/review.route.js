import { Router } from "express";
import {
  createReview,
  getAllReviews,
  deleteReview,
  updateReview,
} from "../controllers/review.controller.js";
import authenticateUser from "../middleware/authMiddleware.js";

const router = Router();

router.post('/',authenticateUser, createReview);
router.put('/:id',authenticateUser, updateReview);
router.delete('/',authenticateUser, deleteReview);
router.get('/',getAllReviews);

export default router
