import React from "react";

// Style
import "./style.css";

const index = () => {
  return (
    <footer className="py-4 mt-[10px] bg-white shadow-[5px_5px_15px_0px_rgba(0,0,0,0.1)] dark:bg-[#32364f]">
      <div className="site-container text-center text-[#929399] dark:text-white">
        <p className="">
          Copyright © 2023 :{" "}
          <a href="www.virtualcard.uz" className="italic hover:underline">
            Virtual Card
          </a>{" "}
          | All rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default index;
