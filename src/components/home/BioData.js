import React from "react";

function BioData({ data }) {
  const { role, selected, stack, awards } = data || {};
  return (
    <>
      <div className=" text-[24px] font-medium text-[#242b2d] pt-2  z-50">
        <div>
          <div className="flex justify-between border-b border-t border-[#242b2d] py-1">
            <h4>Role</h4>
            <h4>{role}</h4>
          </div>
          <div className="flex justify-between border-b  border-[#242b2d] py-1">
            <h4>Selected Clients</h4>
            <h4>{selected}</h4>
          </div>
          {stack && (
            <div className="flex justify-between border-b  border-[#242b2d] py-1">
              <h4>Stack</h4>
              <h4>{stack}</h4>
            </div>
          )}

          <div className="flex justify-between border-b  border-[#242b2d] py-1">
            <h4>Awards</h4>
            <h4>{awards}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default BioData;
