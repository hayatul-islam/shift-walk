import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

function Work({ data, theme }) {
  const [show, setShow] = useState(false);
  console.log(show);
  const { client, agency, overview, role, link } = data || {};
  const handleLink = () => {
    window.open(link, "_blank");
  };
  return (
    <>
      <motion.div
        onClick={handleLink}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className={`flex justify-between md:grid md:grid-cols-[25%_50%_10%_10%] xl:grid-cols-[30%_45%_15%_10%] border-b py-1 text-[28px] md:text-[16px] lg:text-[24px] font-medium cursor-pointer items-center text-${
          theme === "light" ? "[#242b2d]" : "[#abaea8]"
        } border-${theme === "light" ? "[#242b2d]" : "[#abaea8]"} `}
      >
        <motion.div>
          <h4>{show ? "Launch Project" : client}</h4>
        </motion.div>
        <div className="hidden md:block">
          {show ? (
            <div className="w-[500px]">
              <marquee>
                <ul className="flex space-x-8 list-disc list-outside">
                  {[1, 2, 3, 4, 5, 6].map((li) => (
                    <li>{role}</li>
                  ))}
                </ul>
              </marquee>
            </div>
          ) : (
            <h4>{overview}</h4>
          )}
        </div>
        <div className="hidden md:block">
          <h4>{agency !== "" ? agency : "-"}</h4>
        </div>
        <div className="flex justify-end">
          <motion.div
            animate={{ rotate: show ? -40 : 0 }}
            transition={{ type: "spring" }}
          >
            <BsArrowRight />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Work;
