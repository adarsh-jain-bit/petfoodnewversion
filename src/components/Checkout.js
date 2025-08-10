"use client";

export default function Checkout() {
  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    }); 
  };

  const handlePayment = async () => {
    const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // Create order on backend
    const orderData = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/payment/order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 500 }) // INR 500
    }).then(res => res.json());

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
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
    <div>
      <h2>Razorpay Payment</h2>
      <button onClick={handlePayment}>Pay ₹500</button>
    </div>
  );
}
