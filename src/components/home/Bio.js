import React from "react";
import BioContent from "./BioContent";
import BioData from "./BioData";

const isaacPowell = {
  role: "",
  selected: "",
  stack: "",
};
const samGoddard = {
  role: "Createtive Developer",
  selected: "Fnatic, Reform, PRB, Fat Free",
  stack: "React, Tailwind, Framer Motion, Vercel, Sanity",
  awards: 32,
};

function Bio() {
  return (
    <>
      <BioData data={samGoddard} />
      <BioContent />
    </>
  );
}

export default Bio;
