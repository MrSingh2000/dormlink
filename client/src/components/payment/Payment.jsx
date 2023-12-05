import axios from "axios";
import React, { useEffect, useState } from "react";
import bg from '../../images/money.png';
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
    <div style={{backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundAttachment:"fixed", backgroundPosition:"center"}} className='bg-white p-4 '>
    <div className="max-w-md md:max-w-4xl mx-auto   p-6  text-white shadow-md rounded-xl bg-[#31525ba7] h-[75%] flex justify-center">
      <div className="w-1/2 h-2/3 flex flex-col ">
    <h1 className="text-lg md:text-4xl p-5 text-center">FEE PAYMENT</h1>
    <div className="flex flex-row justify-around">
    <div className="w-1/2">
    <div><p className="text-sm md:text-md ">YOUR FEE TO BE PAID IS</p></div>
    <div><p className="text-3xl md:text-7xl p-5 font-bold" >6000</p></div>
      </div>
      {/* <div className="justify-end md:visible">
        <img alt="counter" src={counter}  className="content-end"/>
    </div> */}
    </div>
    <div className="flex flex-row justify-center">
    <label className="p-5 text-center justify-center flex flex-row fs-5"><div className="pr-2"><input type="checkbox" className="pl-2"/></div>I agree to all term and Conditions</label>
    </div>
    <div className="flex justify-center">
    <div class="md:w-2/3 flex justify-center bg-[#ffa101] rounded-3xl text-center p-2">
    <button id="rzp-button1" onClick={handlePay} >
        Proceed to Pay
      </button>
      </div>
      </div>
      </div>
    </div>
    </div>
    
  );
}

export default Payment;
