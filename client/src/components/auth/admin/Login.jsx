// LoginForm.js
import React, { useState } from "react";
import loginImage from "../../../images/logo.png"; // Import your login image
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { updateLoading } from "../../../redux/slices/loaderSlice";
import { setAuthToken } from "../../../redux/slices/authSlice";
import Loader from "../../common/Loader";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.loading.value);
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const validateData = () => {
    if (!data.email || !data.password) return false;
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
    if (!validateData()) return;

    dispatch(updateLoading());
    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_HOST}/api/auth/admin/login`,
      data,
    })
      .then((res) => {
        localStorage.setItem('authToken', res.data.authToken);
        localStorage.setItem('type', "admin");
        dispatch(setAuthToken({ token: res.data.authToken, type: "admin" }));
        // showToast("Registeration Successfull!");
        dispatch(updateLoading());
        // TODO: add toastify here
        navigate("/");
      })
      .catch((error) => {
        // TODO: add toastify here
        // showToast("error", error.response.data);
        console.log("error: ", error.response.data);
        dispatch(updateLoading());
      });
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen bg-[#b3dee584] ">
      <div className="flex flex-col md:flex-row justify-center items-center md:h-3/2 shadow-md bg-[#fae6b1] rounded px-12 pt-6 pb-8 mb-4 ">
        <div className="w-1/3 md:w-1/2">
          <img src={loginImage} alt="Login" className=" visible" />
        </div>
        <div className="w-full md:w-1/2">
          <form className=" rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                onChange={(e) => handleChange(e)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="email"
                name="email"
                placeholder="demo@gmail.com"
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
                name="password"
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={(e) => handleSubmit(e)}
                className="bg-[#31525bc1] hover:bg-[#31525b] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
