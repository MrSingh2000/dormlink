import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import LoginForm from "./components/Login";
import SignupForm from "./components/SignUp";
import Error from "./components/error/ErrorEle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <Error />,
    children: [{
      path: "/",
      element: <Home/>,},
      {
      path:"/admin",
      element: <LoginForm/>,

    }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
