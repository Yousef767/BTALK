"use client";
import React from "react";
import { ThreeDots } from "react-loader-spinner";
const Fetching = () => {
  return (
    <div className="flex items-center justify-center mt-[30vh]">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#EA9967"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Fetching;
