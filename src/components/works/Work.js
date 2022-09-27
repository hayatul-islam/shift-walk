import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

function Work({ data }) {
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
        className="grid grid-cols-[30%_45%_15%_10%] border-b  border-[#242b2d] py-1 text-[24px] font-medium text-[#242b2d] cursor-pointer items-center"
      >
        <motion.div>
          <h4>{show ? "Launch Project" : client}</h4>
        </motion.div>
        <div>
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
        <div>
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
