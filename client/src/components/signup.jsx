// SignupForm.js
import React from 'react';
import signupImage from '../images/logo.png'; // Import your signup image

const SignupForm = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen bg-[#b3dee584] ">
        <div className="flex flex-col md:flex-row justify-center items-center h-1/2 shadow-md bg-[#fae6b1] rounded px-8 pt-6 pb-8 mb-4">
      <div className="w-1/3 md:w-1/2">
        <img src={signupImage} alt="Signup" className="w-full" />
      </div>
      <div className="w-full md:w-1/2">
        <form className=" ">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div> 
        <div className="flex items-center justify-center">
          <button
            className="bg-[#31525bc1] hover:bg-[#31525b] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign Up
          </button>
        </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignupForm;
