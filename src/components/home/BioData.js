import React from "react";

function BioData({ data, theme }) {
  const { role, selected, stack, awards } = data || {};
  return (
    <>
      <div
        className={`text-[20px] xl:text-[24px] font-medium pt-2  z-50 text-${
          theme === "light" ? "[#242b2d]" : "[#abaea8]"
        }`}
      >
        <div>
          <div
            className={`flex justify-between border-b border-t  py-1 border-${
              theme === "light" ? "[#242b2d]" : "[#abaea8]"
            }`}
          >
            <h4>Role</h4>
            <h4>{role}</h4>
          </div>
          <div
            className={`flex justify-between border-b border-t  py-1 border-${
              theme === "light" ? "[#242b2d]" : "[#abaea8]"
            }`}
          >
            <h4>Selected Clients</h4>
            <h4>{selected}</h4>
          </div>
          {stack && (
            <div
              className={`flex justify-between border-b border-t  py-1 border-${
                theme === "light" ? "[#242b2d]" : "[#abaea8]"
              }`}
            >
              <h4>Stack</h4>
              <h4>{stack}</h4>
            </div>
          )}

          <div
            className={`flex justify-between border-b border-t  py-1 border-${
              theme === "light" ? "[#242b2d]" : "[#abaea8]"
            }`}
          >
            <h4>Awards</h4>
            <h4>{awards}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default BioData;
