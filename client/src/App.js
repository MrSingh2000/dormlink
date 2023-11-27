import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import RoomChart from "./components/hostel/RoomChart";

function App() {
  return;
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hostel/roomchart" element={<RoomChart />} />
      </Routes>
    </Router>
  </>;
}

export default App;
