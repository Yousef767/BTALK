import React from "react";
import Image from "next/image";
import TimeFormat from "../ui/TimeFormat";

const Client = ({ data }) => {
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
      <span className="px-[16px] w-[136px] lr"> {data.mobile}</span>
      <span className="px-[16px] w-[168px]">{data.country}</span>
      <span className="px-[16px] w-[226px] text-center">{data.email}</span>
      <span className="px-[16px] w-[120px]">
        <TimeFormat date={data.last_seen} />{" "}
      </span>
      <a href={"/ar/dashboard/clients/" + data.client_number} className="w-[88px] flex  justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11.9999 16.3299C9.60992 16.3299 7.66992 14.3899 7.66992 11.9999C7.66992 9.60992 9.60992 7.66992 11.9999 7.66992C14.3899 7.66992 16.3299 9.60992 16.3299 11.9999C16.3299 14.3899 14.3899 16.3299 11.9999 16.3299ZM11.9999 9.16992C10.4399 9.16992 9.16992 10.4399 9.16992 11.9999C9.16992 13.5599 10.4399 14.8299 11.9999 14.8299C13.5599 14.8299 14.8299 13.5599 14.8299 11.9999C14.8299 10.4399 13.5599 9.16992 11.9999 9.16992Z"
            fill="#EA9967"
          />
          <path
            d="M12.0001 21.02C8.24008 21.02 4.69008 18.82 2.25008 15C1.19008 13.35 1.19008 10.66 2.25008 8.99998C4.70008 5.17998 8.25008 2.97998 12.0001 2.97998C15.7501 2.97998 19.3001 5.17998 21.7401 8.99998C22.8001 10.65 22.8001 13.34 21.7401 15C19.3001 18.82 15.7501 21.02 12.0001 21.02ZM12.0001 4.47998C8.77008 4.47998 5.68008 6.41998 3.52008 9.80998C2.77008 10.98 2.77008 13.02 3.52008 14.19C5.68008 17.58 8.77008 19.52 12.0001 19.52C15.2301 19.52 18.3201 17.58 20.4801 14.19C21.2301 13.02 21.2301 10.98 20.4801 9.80998C18.3201 6.41998 15.2301 4.47998 12.0001 4.47998Z"
            fill="#EA9967"
          />
        </svg>
      </a>
    </div>
  );
};

export default Client;
