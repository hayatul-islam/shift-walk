import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Works from "./components/works/Works";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (isDark) {
      window.localStorage.setItem("theme", "dark");
    } else {
      window.localStorage.setItem("theme", "light");
    }
    const currTheme = window.localStorage.getItem("theme");
    setTheme(currTheme);
  }, [isDark]);

  return (
    <>
      <div
        className={`bg-${
          theme === "light" ? "[#abaea8]" : "[#242b2d]"
        } min-h-screen relative py-4 px-2 lg:px-6 `}
      >
        <BrowserRouter>
          <Header theme={theme} />
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />{" "}
            <Route path="/works" element={<Works theme={theme} />} />{" "}
          </Routes>
        </BrowserRouter>
        <div className="absolute translate-x-[50%] translate-y-[-50%] opacity-80 top-[50%] right-[50%] ">
          <h4
            onClick={() => setIsDark(!isDark)}
            className={`text-[42px] text-${
              theme === "light" ? "[#9ea09c]" : "[#abaea8]"
            } font-medium cursor-pointer`}
          >
            _ShiftWalk<sup>TM</sup>
          </h4>
        </div>
      </div>
    </>
  );
}

export default App;
