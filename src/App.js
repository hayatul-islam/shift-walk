import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Works from "./components/works/Works";

function App() {
  const currTheme = window.localStorage?.getItem("theme");
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState(currTheme);
  console.log(theme);
  const handlerMode = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
    } else {
      window.localStorage.setItem("theme", "light");
    }
    setIsDark(!isDark);
  };
  useEffect(() => {
    const currTheme = window.localStorage.getItem("theme");
    const theme = currTheme !== null ? currTheme : "light";
    setTheme(theme);
  }, [isDark]);

  return (
    <>
      <div
        className={`bg-${
          theme === "light" ? "[#abaea8]" : "[#242b2d]"
        } min-h-screen relative py-3 px-2 lg:px-4 `}
      >
        <BrowserRouter>
          <Header theme={theme} />
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />{" "}
            <Route path="/works" element={<Works theme={theme} />} />{" "}
          </Routes>
        </BrowserRouter>
        <div className="absolute translate-x-[50%] translate-y-[-50%] opacity-80 top-[50%] right-[50%] ">
          <motion.h4
            onClick={handlerMode}
            className={`text-[42px] text-${
              theme === "light" ? "[#9ea09c]" : "[#313939]"
            } font-medium cursor-pointer`}
          >
            _ShiftWalk<sup>TM</sup>
          </motion.h4>
        </div>
      </div>
    </>
  );
}

export default App;
