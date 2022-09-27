import React from "react";
import Bio from "./Bio";

function Home({ theme }) {
  return (
    <>
      <div className="px-6">
        <Bio theme={theme} />
      </div>
    </>
  );
}

export default Home;
