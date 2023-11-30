import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import LoginForm from "./components/auth/Login";
import SignupForm from "./components/auth/Signup";
import Error from "./components/error/ErrorEle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";

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
    ],
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
