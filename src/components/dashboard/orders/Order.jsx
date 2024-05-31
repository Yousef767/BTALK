import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";
import DateComponent from "../ui/Date";
import Time from "../ui/Time";
import PayStatus from "./PayStatus";

const Order = ({ data, number }) => {
  const lang = useLocale();
  return (
    <button
      className="flex items-center h-[72px] transition-all hover:bg-[#FCFCFC] px-[16px]"
    >
      <span className="w-[48px] flex  justify-center text-secondary3">
        {number + 1}
      </span>
      <span className="px-[16px] w-[207px] flex items-center gap-[8px]">
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
        className={`px-[16px] w-[112px] text-secondary1 font-[500] ${
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
        className={`px-[16px] w-[80px] text-secondary1 font-[500] ${
          lang == "en" ? "text-left" : "text-right"
        }`}
      >
        {data.price}$
      </span>
      <span
        className={`px-[16px] w-[80px] text-secondary1 font-[500] redColor ${
          lang == "en" ? "text-left" : "text-right"
        }`}
      >
        {data.discount}$-
      </span>
      <span className="px-[16px] w-[160px] text-center">
        <PayStatus status={data.status} />
      </span>
      <span
        className={`px-[16px] w-[80px] text-secondary1 font-[500] ${
          lang == "en" ? "text-left" : "text-right"
        }`}
      >
        {data.price - data.discount}$
      </span>
      <span
        className={`px-[16px] w-[132px] text-secondary1 font-[500] ${
          lang == "en" ? "text-left" : "text-right"
        }`}
      >
        <DateComponent date={data.date} />
      </span>
      <span className="w-[88px] flex  justify-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.88 14.9901C11.69 14.9901 11.5 14.9201 11.35 14.7701L8.79001 12.2101C8.50001 11.9201 8.50001 11.4401 8.79001 11.1501C9.08001 10.8601 9.56001 10.8601 9.85001 11.1501L11.88 13.1801L13.91 11.1501C14.2 10.8601 14.68 10.8601 14.97 11.1501C15.26 11.4401 15.26 11.9201 14.97 12.2101L12.41 14.7701C12.26 14.9201 12.07 14.9901 11.88 14.9901Z"
            fill="#EA9967"
          />
          <path
            d="M11.8799 14.92C11.4699 14.92 11.1299 14.58 11.1299 14.17V4C11.1299 3.59 11.4699 3.25 11.8799 3.25C12.2899 3.25 12.6299 3.59 12.6299 4V14.17C12.6299 14.58 12.2899 14.92 11.8799 14.92Z"
            fill="#EA9967"
          />
          <path
            d="M12 20.9297C6.85 20.9297 3.25 17.3297 3.25 12.1797C3.25 11.7697 3.59 11.4297 4 11.4297C4.41 11.4297 4.75 11.7697 4.75 12.1797C4.75 16.4497 7.73 19.4297 12 19.4297C16.27 19.4297 19.25 16.4497 19.25 12.1797C19.25 11.7697 19.59 11.4297 20 11.4297C20.41 11.4297 20.75 11.7697 20.75 12.1797C20.75 17.3297 17.15 20.9297 12 20.9297Z"
            fill="#EA9967"
          />
        </svg>
      </span>
    </button>
  );
};

export default Order;
