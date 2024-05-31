import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";
import DateComponent from "../ui/Date";
import Time from "../ui/Time";
import Status from "./Status";

const Order = ({ data, number, clickHandler }) => {
  const lang = useLocale();
  return (
    <button
      className="flex items-center h-[72px] transition-all hover:bg-[#FCFCFC] px-[16px]"
      onClick={clickHandler}
    >
      <span className="w-[48px] flex  justify-center text-secondary3">
        {number + 1}
      </span>
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
      <span
        className={`px-[16px] w-[130px] text-secondary1 font-[500] ${
          lang == "en" ? "text-left" : "text-right"
        }`}
      >
        #{data.order_number}
      </span>
      <span
        className={`px-[16px] w-[136px] text-secondary1 font-[500] ${
          lang == "en" ? "text-left" : "text-right"
        }`}
      >
        {data.package}
      </span>
      <span
        className={`px-[16px] w-[168px] text-secondary1 font-[500] ${
          lang == "en" ? "text-left" : "text-right"
        }`}
      >
        {data.step}
      </span>
      <span className="px-[16px] w-[160px] text-center">
        <Status status={data.status} />
      </span>

      <span
        className={`px-[16px] w-[184px] text-secondary1 font-[500] ${
          lang == "en" ? "text-left" : "text-right"
        }`}
      >
        <DateComponent date={data.date} /> {","}
        <Time time={data.date} />
      </span>
      <span className="w-[88px] flex  justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M11.9999 17.1012C9.60992 17.1012 7.66992 15.1612 7.66992 12.7712C7.66992 10.3812 9.60992 8.44122 11.9999 8.44122C14.3899 8.44122 16.3299 10.3812 16.3299 12.7712C16.3299 15.1612 14.3899 17.1012 11.9999 17.1012ZM11.9999 9.94122C10.4399 9.94122 9.16992 11.2112 9.16992 12.7712C9.16992 14.3312 10.4399 15.6012 11.9999 15.6012C13.5599 15.6012 14.8299 14.3312 14.8299 12.7712C14.8299 11.2112 13.5599 9.94122 11.9999 9.94122Z"
            fill="#EA9967"
          />
          <path
            d="M12.0001 21.7912C8.24008 21.7912 4.69008 19.5912 2.25008 15.7712C1.19008 14.1212 1.19008 11.4312 2.25008 9.77122C4.70008 5.95122 8.25008 3.75122 12.0001 3.75122C15.7501 3.75122 19.3001 5.95122 21.7401 9.77122C22.8001 11.4212 22.8001 14.1112 21.7401 15.7712C19.3001 19.5912 15.7501 21.7912 12.0001 21.7912ZM12.0001 5.25122C8.77008 5.25122 5.68008 7.19122 3.52008 10.5812C2.77008 11.7512 2.77008 13.7912 3.52008 14.9612C5.68008 18.3512 8.77008 20.2912 12.0001 20.2912C15.2301 20.2912 18.3201 18.3512 20.4801 14.9612C21.2301 13.7912 21.2301 11.7512 20.4801 10.5812C18.3201 7.19122 15.2301 5.25122 12.0001 5.25122Z"
            fill="#EA9967"
          />
        </svg>
      </span>
    </button>
  );
};

export default Order;
