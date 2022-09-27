import { motion } from "framer-motion";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header({ theme }) {
  const { pathname } = useLocation();
  const handleEmail = () => {
    window.open("mailto:hello@gmail.com?subject=&body=");
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 ">
        <div className="text-[65px] md:text-[90px] xl:text-[120px] font-medium">
          <NavLink
            className={({ isActive }) =>
              isActive && pathname === "/"
                ? `block leading-none text-${
                    theme === "light" ? "[#242b2d]" : "[#abaea8]"
                  }`
                : `block text-[#313939] leading-none hover:text-${
                    theme === "light" ? "[#242b2d]" : "[#abaea8]"
                  }`
            }
            to="/"
          >
            Bio
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `block leading-none text-${
                    theme === "light" ? "[#242b2d]" : "[#abaea8]"
                  }`
                : `block text-[#313939] leading-none hover:text-${
                    theme === "light" ? "[#242b2d]" : "[#abaea8]"
                  }`
            }
            to="/works"
          >
            Works
          </NavLink>
        </div>
        <div className="hidden md:block text-center">
          <h2
            className={`text-[24px] text-${
              theme === "light" ? "[#242b2d]" : "[#abaea8]"
            } font-medium`}
          >
            {pathname === "/works" ? "Selected Works" : "Design + Build Studio"}
          </h2>
        </div>
        <div
          className={`text-end text-${
            theme === "light" ? "[#242b2d]" : "[#abaea8]"
          }`}
        >
          <div className="space-x-4 text-[18px] sm:text-[20px] lg:text-[24px]">
            <motion.a
              className="underline font-medium"
              href="https://www.instagram.com/_shiftwalk.studio/"
              target="_blank"
            >
              <span className="hidden md:inline-block underline">
                Instagram
              </span>
              <span className="md:hidden">Insta</span>
            </motion.a>
            <motion.button
              onClick={handleEmail}
              className={`underline font-medium `}
            >
              Email
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
