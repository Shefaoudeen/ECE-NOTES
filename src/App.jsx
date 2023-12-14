import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Screens/Home";
import { Routes, Route, BrowserRouter, NavLink, Link } from "react-router-dom";
import Notes from "./Screens/Notes";
import Cat from "./Screens/Cat";
import Pyq from "./Screens/Pyq";

export default function App() {
  return (
    <div className="relative">
      <BrowserRouter>
        <div className="absolute w-full bg-slate-300 py-2">
          <Link to="/">
            <div className="ml-5">
              <button className="border px-2 py-1 font-bold text-white bg-slate-400 rounded-lg">
                ECE-Notes
              </button>
            </div>
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/previous" element={<Pyq />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
