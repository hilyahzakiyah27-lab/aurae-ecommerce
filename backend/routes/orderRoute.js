import express from "express";
import {
  placeOrder,
  allOrders,
  userOrders,
  updateStatus,
  midtransNotification,
  placeOrderMidtrans,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

// Admin Features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);
orderRouter.post("/midtrans-notification", midtransNotification);

// Payment Features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/midtrans", authUser, placeOrderMidtrans);

// User Feature
orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;
