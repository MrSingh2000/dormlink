import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import LoginForm from "./components/auth/Login";
import SignupForm from "./components/auth/Signup";
import Error from "./components/error/ErrorEle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import Footer from "./components/Footer";
import About from "./components/About";
import HostelRegistrationForm from "./components/hostel/Registrationform";

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
        path: "/admin",
        element: <AdminDashboard/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/register",
        element: <HostelRegistrationForm/>
      }
    ]
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SignupForm />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
