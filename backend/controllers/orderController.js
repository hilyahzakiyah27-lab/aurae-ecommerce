import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import snap from "../config/midtrans.js";

// Placing orders using COD Method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    const newOrder = new orderModel(orderData);
    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Placing orders using Midtrans
const placeOrderMidtrans = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    // Buat order terlebih dahulu
    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "Bank Transfer",
      payment: false,
      date: Date.now(),
    };
    const newOrder = new orderModel(orderData);
    await newOrder.save();

    // Buat transaksi Midtrans
    const parameter = {
      transaction_details: {
        order_id: newOrder._id.toString(),
        gross_amount: amount,
      },
    };

    const transaction = await snap.createTransaction(parameter);

    // Kirim snap Token ke frontend

    res.json({
      success: true,
      token: transaction.token,
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Notifikasi Midtrans
const midtransNotification = async (req, res) => {
  try {
    const notification = await snap.transaction.notification(req.body);

    const orderId = notification.order_id;
    const transactionStatus = notification.transaction_status;
    const fraudStatus = notification.fraud_status;

    console.log("MIDTRANS NOTIFICATION:", notification);

    if (
      transactionStatus === "settlement" ||
      (transactionStatus === "capture" && fraudStatus === "accept")
    ) {
      await orderModel.findByIdAndUpdate(orderId, {
        payment: true,
      });

      console.log("PAYMENT SUCCESS:", orderId);
    } else if (transactionStatus === "pending") {
      console.log("PAYMENT PENDING:", orderId);
    } else if (
      transactionStatus === "deny" ||
      transactionStatus === "cancel" ||
      transactionStatus === "expire"
    ) {
      console.log("PAYMENT FAILED:", orderId);
    }

    res.json({ success: true });
  } catch (error) {
    console.log("MIDTRANS NOTIFICATION ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// All Orders data for Admin Panel
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// User order data for frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Update order status from Admin panel
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  placeOrder,
  midtransNotification,
  placeOrderMidtrans,
  allOrders,
  userOrders,
  updateStatus,
};
