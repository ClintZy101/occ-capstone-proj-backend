import {
  getUserCheckoutHistory,
  createCheckout,
} from "../controllers/checkout-history.controller.js";
import authenticateUser from "../middleware/authMiddleware.js";
import { Router } from "express";

const router = Router();

router.get("/", authenticateUser, getUserCheckoutHistory);
router.post("/", authenticateUser, createCheckout);

export default router;
