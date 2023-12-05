import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import LoginForm from "./components/auth/Login";
import SignupForm from "./components/auth/Signup";
import Error from "./components/error/ErrorEle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/auth/admin/Login";
import RoomChart from "./components/hostel/RoomChart";
import Payment from "./components/payment/Payment";
import HostelRegistrationForm from "./components/hostel/Registrationform";
import About from "./components/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/roomchart",
        element: <RoomChart />
      },
      {
        path: "/payment",
        element: <Payment />
      },
      {
        path: "/register",
        element: <HostelRegistrationForm/>
      },
      {
        path: "/admindashboard",
        element: <AdminDashboard/>
      }
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SignupForm />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
