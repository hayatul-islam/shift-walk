import { motion } from "framer-motion";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  return (
    <>
      <div className="grid grid-cols-3 ">
        <div className="text-[120px] font-medium">
          <NavLink
            className={({ isActive }) =>
              isActive && pathname === "/"
                ? "block leading-none text-[#242b2d]"
                : "block text-[#9ea09c] leading-none hover:text-[#242b2d]"
            }
            to="/"
          >
            Bio
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "block leading-none text-[#242b2d]"
                : "block text-[#9ea09c] leading-none hover:text-[#242b2d]"
            }
            to="/works"
          >
            Works
          </NavLink>
        </div>
        <div className="text-center">
          <h2 className="text-[24px] text-[#242b2d] font-medium">
            Selected Works
          </h2>
        </div>
        <div className="text-end">
          <div className="space-x-4 ">
            <motion.a
              className="underline text-[24px] font-medium"
              href="/"
              target="_blank"
            >
              Instagram
            </motion.a>
            <motion.button className={`underline text-[24px] font-medium `}>
              Email
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
