import React from "react";
import about from '../images/concept.png'
import { Link } from "react-router-dom";
function About() {
  return (
    <div style={{backgroundImage: `url(${about})`, backgroundRepeat: "no-repeat", backgroundAttachment:"fixed", backgroundPosition:"center"}} >
    <div  className="flex justify-center bg-[#405c658c] text-white" >
    <div   className=" flex flex-col justify-center md:text-center w-4/5 ">
      <div  className="  bg-[#31525b6c] flex flex-col justify-center rounded-full p-3">
      <p className="md:text-2xl text-lg">
        Welcome to Dorm-link, your go-to destination for seamless hostel
        registration powered by cutting-edge technology. Our platform, developed
        using the MERN (MongoDB, Express.js, React, Node.js) stack, ensures a
        robust and user-friendly experience for both hostel administrators and
        prospective residents.
      </p>
      </div>
      <div  className=" flex flex-col justify-center">
      <h1  className="  font-extrabold p-4 text-2xl md:text-4xl">Our Story</h1>
      <p className="md:text-2xl text-lg rounded-full bg-[#31525b6c] p-3">
        We set out on a mission to simplify the hostel registration process,
        making it efficient, secure, and enjoyable for everyone involved. With a
        passion for innovation, we've incorporated advanced technologies to
        enhance the overall experience.
      </p>
      </div>
      <div className=" flex flex-col justify-around">
      <h1  className=" md:text-4xl font-extrabold flex justify-center p-4" >Key Features</h1>
      <div className="bg-[#5379836c] flex flex-row justify-center rounded-full p-3 m-2">
      <div className="bg-[#31525bcf] md:text-2xl text-lg font-bold flex-none w-1/3 items-center flex justify-center rounded-full ">MERN Stack Development</div>
      <p className="md:text-lg text-s">
        Our platform leverages the power of MongoDB for flexible and scalable
        data storage, Express.js for a robust backend, React for a dynamic and
        responsive user interface, and Node.js for efficient server-side
        operations. This ensures a seamless, modern, and highly functional user
        experience.
      </p>
      </div>
      <div className="bg-[#5379836c] flex flex-row justify-center rounded-full p-3 m-2"> 
      <div className="bg-[#31525bcf] md:text-2xl text-lg font-bold flex-none w-1/3 items-center flex justify-center rounded-full">AI-Powered Chatbot Integration</div>
      <p className="md:text-lg text-s">
        We understand that communication is key, and that's why we've integrated
        a state-of-the-art AI-powered chatbot. Using machine learning
        algorithms, our chatbot is capable of understanding and responding to
        user queries, providing instant assistance throughout the registration
        process. Whether you have questions about available rooms, facilities,
        or the registration procedure, our chatbot is here to help 24/7.
      </p>
      </div>
      <div className="bg-[#5379836c] flex flex-row justify-center rounded-full p-3 m-2">
      <div className="bg-[#31525bcf] md:text-2xl text-lg font-bold flex-none  items-center  w-1/3 flex justify-center rounded-full">Secure Payment Gateway</div>
      <p className="md:text-lg text-s">
        To streamline the payment process, we've integrated a secure payment
        gateway. Your financial transactions are safeguarded with encryption and
        follow industry standards for security. Choose from a variety of payment
        methods to complete your registration hassle-free.
      </p>
      </div>
      <div className="bg-[#5379836c] flex flex-row justify-center rounded-full p-3 m-2">
      <div className="bg-[#31525bcf] md:text-2xl text-lg font-bold flex-none items-center  w-1/3 flex justify-center rounded-full" >Blockchain Integration </div>
      <p className="md:text-lg text-s">
        For those who prioritize an extra layer of security and transparency, we
        offer blockchain integration for payment processing. Blockchain
        technology ensures tamper-proof transactions, providing an added level
        of trust and reliability.
      </p>
      </div>
      </div>
      <div className="flex flex-col justify-center ">
      <h1  className="font-extrabold p-4 text-2xl md:text-4xl ">Our Commitment</h1>
      <p className="text-lg md:text-2xl rounded-full p-3 bg-[#31525b6c]">
        At Dorm-Link, we are committed to delivering a
        registration experience that exceeds your expectations. We continuously
        strive to enhance our services, incorporating the latest technologies to
        stay ahead of the curve. Join us on this exciting journey towards a
        seamless hostel registration process. Whether you're a student looking
        for accommodation or a hostel administrator seeking an efficient
        management solution, we've got you covered. Thank you for choosing
        Dorm-Link. Cheers to a year of innovation and
        countless successful registrations!
        <br/> <Link to={"/contactus"} className="text-[#ffa101] underline">Contact Us</Link>- Have questions or
        suggestions? We'd love to hear from you.
      </p>
      </div>
    </div>
    </div>
    </div>
  );
}

export default About;
