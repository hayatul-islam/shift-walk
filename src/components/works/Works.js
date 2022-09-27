import React, { useState } from "react";
import Work from "./Work";
// fake data
const datas = [
  {
    id: 1,
    client: "Reform",
    overview: "Brand, Art Direction, Interactive Design, Build",
    agency: "",
    role: "",
    link: "",
  },
  {
    id: 2,
    client: "Json O'Rear",
    overview: "Brand, Art Direction, Interactive Design, Build",
    agency: "",
    role: "",
    link: "",
  },
  {
    id: 3,
    client: "ImReallyATrex",
    overview: "Brand, Art Direction, Interactive Design, Build",
    agency: "CUSP",
    role: "",
    link: "",
  },
  {
    id: 4,
    client: "PRB Architects",
    overview: "Brand, Art Direction, Interactive Design, Build",
    agency: "",
    role: "",
    link: "",
  },
  {
    id: 5,
    client: "Jess Bright",
    overview: "Brand, Art Direction, Interactive Design, Build",
    agency: "",
    role: "",
    link: "",
  },
  {
    id: 6,
    client: "Fat Free",
    overview: "Art Direction, Interactive Design, Build",
    agency: "",
    role: "",
    link: "",
  },
];

function Works() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="h-[60vh] grid items-end">
        <div>
          <div className="grid grid-cols-[30%_45%_15%_10%] border-b border-[#242b2d] py-3 text-[10px] text-[#242b2d] uppercase font-medium">
            <p>Client</p>
            <p>Overview</p>
            <p>Agency</p>
            <p className="text-end">Launch</p>
          </div>
          {datas?.map((data) => (
            <Work key={data?.id} data={data} show={show} setShow={setShow} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Works;