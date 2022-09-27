import React from "react";

function BioContent({ setShowData }) {
  return (
    <>
      <div className="grid items-end h-[70vh] md:h-full">
        <div className="flex justify-between text-[18px] md:text-[20px] xl:text-[24px] font-medium text-[#242b2d]">
          <div>
            <p className="max-w-[500px] xl:max-w-[740px]  leading-7 gapeworms">
              &nbsp;&nbsp;&nbsp;&nbsp;The mini-studio of{" "}
              <a
                href="https://www.ijpowell.co.uk/"
                target="_blank"
                onMouseEnter={() => setShowData("powell")}
                onMouseLeave={() => setShowData("")}
                className="underline cursor-pointer"
                rel="noreferrer"
              >
                Isaac Powell
              </a>{" "}
              +{" "}
              <a
                href="https://astonishing-frangipane-c4c218.netlify.app/"
                target="_blank"
                onMouseEnter={() => setShowData("sam")}
                onMouseLeave={() => setShowData("")}
                className="underline cursor-pointer"
                rel="noreferrer"
              >
                Sam Goddard
              </a>
              , designing and building highly-crafted brands and websites for
              partners around the world. We have a particular focus on the
              sustainability, architectural, and creative arts sectors, but we
              always like to keep an open mind.
            </p>
          </div>
          <div className="hidden md:flex items-end ">
            <div className="group cursor-pointer">
              <h3 className="group-hover:block hidden">
                Based in Nottingham, UK
              </h3>
              <h3 className="group-hover:hidden">WorldWide</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BioContent;
