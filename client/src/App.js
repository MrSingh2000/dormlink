import "./App.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";

const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "*", Component: Root },
]);

function App() {
  return;
  <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
