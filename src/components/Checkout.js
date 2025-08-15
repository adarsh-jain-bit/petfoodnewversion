"use client";

import { Button } from "@mui/material";
import { COLORS } from "../lib/constants/colors";

export default function Checkout({amount}) {
  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    }); 
  };
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URLL;
console.log("back",backendUrl)
  const handlePayment = async () => {
    const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // Create order on backend
    const orderData = await fetch(`${backendUrl}/api/payment/order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount }) // INR 500
    }).then(res => res.json());

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Test Payment",
      description: "Test Transaction",
      order_id: orderData.id,
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      theme: { color: "#3399cc" }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
         <Button
                  variant="contained"
                onClick={handlePayment}
                  sx={{
                    bgcolor: COLORS.PRIMARY.main,
                    mt: 1,
                    py: 1.5,
                    mb: 1,
                    "&:hover": { bgcolor: COLORS.PRIMARY.main }
                  }}
                >
                  CheckOut Now - {amount}
                </Button>
</>
  );
}
