import React, { useState } from "react";
import logo from "../images/hostel.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken } from "../redux/slices/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const [openham, setOpenham] = useState(false);
  const authProperty = useSelector((store) => store.authToken);

  return (
    <>
      <div>
        <nav className="bg-[#ffa101] border-gray-200 dark:bg-gray-900 p-2">
          <div className="max-w-screen-xl flex items-center justify-between mx-auto ">
            <div className="flex gap-2 flex-col md:flex-row items-center">
              <img src={logo} className="w-[4rem] mr-3" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#31525b]">
                Dorm-Link
              </span>
            </div>

            {authProperty.token ? (
              <div className="flex md:order-2 md:bg-[#fae6b157] md:p-5 p-2 w-full md:w-fit justify-end rounded-md">
                <button
                  type="button"
                  className="text-white bg-[#31525b] hover:bg-[#458c97] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#31525b] dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                >
                  {authProperty.type === "user" ? (
                    <Link to={"/register"}>Register</Link>
                  ) : (
                    <Link to={"/admindashboard"}>Dashboard</Link>
                  )}
                </button>
                <button
                  type="button"
                  className="text-white ml-3 bg-[#31525b] hover:bg-[#458c97] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#31525b] dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                  onClick={() => {
                    localStorage.clear();
                    dispatch(setAuthToken({ token: "", type: "" }));
                  }}
                >
                  LogOut
                </button>
              </div>
            ) : (
              <div className="flex md:order-2 md:bg-[#fae6b157] md:p-5 p-2 w-full md:w-fit justify-end">
                <button
                  type="button"
                  className="text-white bg-[#31525b] hover:bg-[#458c97] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#31525b] dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                >
                  <Link to={"/login"}>Sign in</Link>
                </button>
                <button
                  type="button"
                  className="ml-2 text-white bg-[#31525b] hover:bg-[#458c97] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#31525b] dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                >
                  <Link to={"/signup"}>Sign up</Link>
                </button>

                <button
                  onClick={() => setOpenham((prev) => !prev)}
                  type="button"
                  className="ml-2 inline-flex items-center p-2 w-10 h-10 justify-center text-md text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>
            )}

            {/* for laptop screens */}
            <div className="hidden lg:block">
              <div
                className={`items-center justify-between w-full lg:flex md:w-auto md:order-1`}
                id="navbar-cta"
              >
                <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#fae6b157]  md:p-6  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <Link
                      to="/"
                      className="block py-2 pl-3 pr-4 lg:text-white rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#b3dee5] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="block py-2 pl-3 pr-4 lg:text-white rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#b3dee5] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="block py-2 pl-3 pr-4 lg:text-white rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#b3dee5] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* for mobile and tabs */}
          <div
            className={`opacity-0 scale-95 lg:hidden absolute z-10 w-11/12 transform transition-all ease-in-out duration-400 ${
              openham ? "opacity-100" : "scale-100"
            } `}
          >
            <div
              className={`items-center justify-between ${
                openham ? "block" : "hidden"
              } w-full lg:flex md:w-auto md:order-1 mt-1`}
              id="navbar-cta"
            >
              <ul className="justify-center flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:p-6  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pl-3 pr-4 lg:text-white rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#b3dee5] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block py-2 pl-3 pr-4 lg:text-white rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#b3dee5] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block py-2 pl-3 pr-4 lg:text-white rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#b3dee5] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Outlet />
      <Footer />
    </>
  );
}
