// SignupForm.js
import React, { useState } from "react";
import signupImage from "../../images/logo.png"; // Import your signup image
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken } from "../../redux/slices/authSlice";
import { showToast } from "../../helper";
import Loader from "../common/Loader";
import { updateLoading } from "../../redux/slices/loaderSlice";
import { redirect, useNavigate } from "react-router-dom";

const SignupForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.loading.value);
  const navigate = useNavigate();

  const [data, setData] = useState({
    fullName: "",
    rollNum: null,
    password: "",
    email: "",
  });

  const validateData = () => {
    if (!data.fullName || !data.rollNum || !data.password || !data.email)
      return false;

    if (data.rollNum.toString().length !== 11) return false;

    return true;
  };

  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: add toastify here
    if (!validateData()) {
      alert("invalid data");
      return;
    }

    dispatch(updateLoading());
    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_HOST}/api/auth/register`,
      data,
    })
      .then((res) => {
        dispatch(setAuthToken({ token: res.data.authToken, type: "user" }));
        // showToast("Registeration Successfull!");
        dispatch(updateLoading());
        // TODO: add toastify here
        navigate("/");
      })
      .catch((error) => {
        // TODO: add toastify here
        // showToast("error", error.response.data);
        dispatch(updateLoading());
      });
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen bg-[#b3dee584] ">
      <div className="flex flex-col md:flex-row justify-center items-center md:h-3/4 shadow-md bg-[#fae6b1] rounded px-8 pt-6 pb-8 ">
        <div className="w-1/3 md:w-1/2">
          <img src={signupImage} alt="Signup" className="w-full" />
        </div>
        <div className="w-full md:w-1/2">
          <form className=" ">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Full Name
              </label>
              <input
                onChange={(e) => handleChange(e)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="fullName"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Roll Number
              </label>
              <input
                onChange={(e) => handleChange(e)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="rollNum"
                type="number"
                placeholder="2000xxxxx10"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={(e) => handleChange(e)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={(e) => handleChange(e)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={(e) => handleSubmit(e)}
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
