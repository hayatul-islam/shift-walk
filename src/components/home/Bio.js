import React, { useState } from "react";
import BioContent from "./BioContent";
import BioData from "./BioData";

const isaacPowell = {
  role: "Art Director + Designer",
  selected: "Paul Smith, Pitch, Jason O'Rear, PRB",
  awards: 16,
};
const samGoddard = {
  role: "Createtive Developer",
  selected: "Fnatic, Reform, PRB, Fat Free",
  stack: "React, Tailwind, Framer Motion, Vercel, Sanity",
  awards: 32,
};

function Bio({ theme }) {
  const [showData, setShowData] = useState("");
  return (
    <>
      <div className="md:block hidden md:h-[280px] w-[80%] xl:w-[60%] ml-auto">
        {showData === "sam" && <BioData theme={theme} data={samGoddard} />}
        {showData === "powell" && <BioData theme={theme} data={isaacPowell} />}
      </div>
      <BioContent theme={theme} setShowData={setShowData} />
    </>
  );
}

export default Bio;
