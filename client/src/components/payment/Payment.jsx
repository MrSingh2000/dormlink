import axios from "axios";
import React, { useEffect, useState } from "react";
// import Razorpay from 'razorpay';

function Payment() {
  const [values, setValues] = useState({
    amount: 100,
    orderId: null,
  });

  useEffect(() => {
    const createOrder = async () => {
      await axios({
        url: `${process.env.REACT_APP_HOST}/api/payment/create/orderId`,
        method: "POST",
        data: {
          amount: "100",
        },
      }).then((res) => {
        console.log("created order: ", res);
        setValues((prev) => {
          return {
            ...prev,
            orderId: res.orderId,
          };
        });
      });
    };

    createOrder();
  }, []);

  const handlePay = () => {
    const options = {
      key: process.env.REACT_APP_RZP_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: "100", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Dorm Link", //your business name
      description: "Test Transaction",
      image: "https://drive.google.com/uc?export=view&id=1fPJhU4v4cK1Fdc3_BZx2saIFqMWqkbuf",
      order_id: values.orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    // FIXME: AFTER THIS STEP, SUCCESSFULL PAYEMENT A VERIFICATION IS TO BE DONE AS PER THE RAZORPAY DOCUMENTATION
  };

  return (
    <div className="text-white">
      Payment
      <button id="rzp-button1" onClick={handlePay}>
        Pay
      </button>
    </div>
  );
}

export default Payment;
