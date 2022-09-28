import { motion } from "framer-motion";
import React, { useState } from "react";
import { contentVarients } from "../../utils/defaultVarients";
import Work from "./Work";
// fake data
const datas = [
  {
    id: 1,
    client: "Reform",
    overview: "Brand, Art Direction, Interactive Design, Build",
    agency: "",
    role: "Architectural Practice",
    link: "https://www.reform-property.com/",
  },
  {
    id: 2,
    client: "Json O'Rear",
    overview: "Brand, Art Direction, Interactive Design, Build",
    agency: "",
    role: "Photographer",
    link: "https://www.jasonorear.com/",
  },
  {
    id: 3,
    client: "ImReallyATrex",
    overview: "Brand, Art Direction, Interactive Design, Build",
    agency: "CUSP",
    role: "Singer + Producer",
    link: "https://www.imreallyatrex.com/",
  },
  {
    id: 4,
    client: "PRB Architects",
    overview: "Brand, Art Direction, Interactive Design, Build",
    agency: "",
    role: "Architectural Practice",
    link: "https://prb-a.com/",
  },
  {
    id: 5,
    client: "Jess Bright",
    overview: "Brand, Art Direction, Interactive Design, Build",
    agency: "",
    role: "Design Studio",
    link: "https://jessbrightdesign.com/",
  },
  {
    id: 6,
    client: "Fat Free",
    overview: "Art Direction, Interactive Design, Build",
    agency: "",
    role: "Motion Studio",
    link: "https://hellofatfree.com/",
  },
];

function Works({ theme }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="h-[90vh] md:h-[60vh] grid items-end">
        <div>
          <div
            className={`flex justify-between md:grid md:grid-cols-[25%_50%_10%_10%] xl:grid-cols-[30%_45%_15%_10%] border-b border-[#242b2d] py-3 text-[10px] uppercase font-medium text-${
              theme === "light" ? "[#242b2d]" : "[#abaea8]"
            } font-medium cursor-pointer`}
          >
            <motion.p
              initial={contentVarients.initial}
              animate={contentVarients?.animate}
              transition={contentVarients?.transition}
            >
              Client
            </motion.p>
            <motion.p
              initial={contentVarients.initial}
              animate={contentVarients?.animate}
              transition={contentVarients?.transition}
              className="hidden md:block"
            >
              Overview
            </motion.p>
            <motion.p
              initial={contentVarients.initial}
              animate={contentVarients?.animate}
              transition={contentVarients?.transition}
              className="hidden md:block"
            >
              Agency
            </motion.p>
            <motion.p
              initial={contentVarients.initial}
              animate={contentVarients?.animate}
              transition={contentVarients?.transition}
              className="text-end"
            >
              Launch
            </motion.p>
          </div>
          {datas?.map((data) => (
            <Work
              key={data?.id}
              data={data}
              show={show}
              setShow={setShow}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Works;
