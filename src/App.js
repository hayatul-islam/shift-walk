import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Works from "./components/works/Works";

function App() {
  return (
    <>
      <div className="bg-[#abaea8] min-h-screen relative py-4 px-6 ">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/works" element={<Works />} />{" "}
          </Routes>
        </BrowserRouter>
        <div className="absolute translate-x-[50%] translate-y-[-50%] opacity-80 top-[50%] right-[50%] ">
          <h4 className="text-[42px] text-[#9ea09c] font-medium">
            _ShiftWalk<sup>TM</sup>
          </h4>
        </div>
      </div>
    </>
  );
}

export default App;
