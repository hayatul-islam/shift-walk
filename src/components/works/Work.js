import React from "react";

function Work({ data }) {
  const { client, agency, overview } = data || {};
  return (
    <>
      <div className="grid grid-cols-[30%_45%_15%_10%] border-b  border-[#242b2d] py-1 text-[24px] font-medium text-[#242b2d]">
        <div>
          <h4>{client}</h4>
        </div>
        <div>
          <h4>{overview}</h4>
        </div>
        <div>
          <h4>{agency !== "" ? agency : "-"}</h4>
        </div>
        <div className="text-end"></div>
      </div>
    </>
  );
}

export default Work;
