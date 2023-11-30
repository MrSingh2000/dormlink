import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import LoginForm from "./components/login";
import SignupForm from "./components/signup";
import Error from "./components/error/ErrorEle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <Error />,
    children: [{
      path: "/",
      element: <Home/>,
    }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
