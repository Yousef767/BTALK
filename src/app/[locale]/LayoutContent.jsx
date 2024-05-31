"use client";
import { usePathname } from "next/navigation";
import React from "react";

const LayoutContent = ({ children }) => {
  const pathname = usePathname();

  return (
    <div
      className={` w-[100%] mx-auto shadow ${
        pathname.includes("dashboard") ? "max-w-[1440px]" : "max-w-[450px]"
      }`}
    >
      {children}
    </div>
  );
};

export default LayoutContent;
