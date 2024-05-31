import React from "react";
import Image from "next/image";
import TimeFormat from "../ui/TimeFormat";

const Client2 = ({ data }) => {
  return (
    <div className="w-[100%] flex py-[16px]">
      <span className="w-[48px] flex  justify-center">م</span>
      <span className="px-[16px] w-[228px] flex items-center gap-[8px]">
        <Image
          src={data.image}
          width={40}
          height={40}
          priority
          alt="user"
          className="w-[40px] h-[40px] rounded-[8px] overflow-hidden"
        />{" "}
        <span className="text-secondary2 font-[500]">{data.name}</span>{" "}
      </span>
      <span className="px-[16px] w-[112px]">#{data.client_number} </span>
      <span className="px-[16px] w-[146px]"> {data.mobile}</span>
      <span className="px-[16px] w-[140px]">{data.country}</span>
      <span className="px-[16px] w-[226px] text-center">{data.email}</span>
      <span className="px-[16px] w-[120px]">
        <TimeFormat date={data.last_seen} />{" "}
      </span>
    </div>
  );
};

export default Client2;
