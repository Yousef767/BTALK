"use client";
import React, { useState } from "react";
import Packages from "./Packages";
import Extra from "./Extra";

const PackagesContainer = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="mt-[24px]  flex flex-col flex-1">
      <ul className="flex mx-[24px]">
        <li
          onClick={() => setActive(1)}
          className={` py-[10px] px-[16px] bg-white rounded-[20px_20px_0px_0px] cursor-pointer  ${
            active === 1
              ? "text-primary3 font-[700]"
              : "text-secondary3 font-[500]"
          }`}
        >
          الباقات
        </li>
        <li
          onClick={() => setActive(2)}
          className={` py-[10px] px-[16px] bg-white rounded-[20px_20px_0px_0px] cursor-pointer  ${
            active === 2
              ? "text-primary3 font-[700]"
              : "text-secondary3 font-[500]"
          }`}
        >
          الخدمات الاضافية
        </li>
      </ul>
      <div className="bg-white rounded-[24px_24px_0px_0px] flex-1 p-[24px]">
        {active === 1 ? <Packages /> : <Extra />}
      </div>
    </div>
  );
};

export default PackagesContainer;
