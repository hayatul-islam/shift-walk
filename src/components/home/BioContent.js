import React from "react";

function BioContent({ setShowData }) {
  return (
    <>
      <div className="flex justify-between text-[24px] font-medium text-[#242b2d]">
        <div>
          <p className="max-w-[740px]  leading-7 gapeworms">
            &nbsp;&nbsp;&nbsp;&nbsp;The mini-studio of{" "}
            <span
              onMouseEnter={() => setShowData("powell")}
              onMouseLeave={() => setShowData("")}
              className="underline cursor-pointer"
            >
              Isaac Powell
            </span>{" "}
            +{" "}
            <span
              onMouseEnter={() => setShowData("sam")}
              onMouseLeave={() => setShowData("")}
              className="underline cursor-pointer"
            >
              Sam Goddard
            </span>
            , designing and building highly-crafted brands and websites for
            partners around the world. We have a particular focus on the
            sustainability, architectural, and creative arts sectors, but we
            always like to keep an open mind.
          </p>
        </div>
        <div className="flex items-end">
          <h3>Based in Nottingham, UK</h3>
        </div>
      </div>
    </>
  );
}

export default BioContent;
