"use client";
import React from "react";
import Image from "next/image";
import CardNumberInput from "./inputs/CardNumberInput";
import Date from "./inputs/Date";
import CVV from "./inputs/CVV";
import CardName from "./inputs/CardName";

const PayWay = ({
  payWay,
  setPayWay,
  cardData,
  changeCardNumberHandler,
  handleDateChange,
  handleCvvChange,
  changeCardNameHandler,
  translate,
}) => {
  return (
    <div>
      <h4 className="text-primary1 text-[19px] font-[500] leading-[150%]">
        {translate("pay-way")}
      </h4>
      {/* choose the way to pay  */}
      <div className="grid grid-cols-2 gap-[24px] w-full mt-[8px] mb-[16px]">
        <button
          className={`flex flex-col items-center justify-center gap-[16px]  rounded-[24px]  border-[2px] transition-all duration-300 h-[112px]  ${
            payWay == "key"
              ? "bg-[#FDF7F1] border-primary3 "
              : "bg-[#fff] border-secondary7 "
          } `}
          onClick={() => setPayWay("key")}
        >
          <Image
            src={
              "https://res.cloudinary.com/freelancer3223/image/upload/v1712223923/thebtalk_images/KNETLogo_1_k93xrq.svg"
            }
            width={40}
            height={30}
            priority
            alt="flag"
          />
          <span
            className={`text-[16px] font-[500] leading-[0%] transition-all duration-300 ${
              payWay == "key" ? "text-primary3" : "text-primary1"
            }`}
          >
            {translate("cash")}
          </span>
        </button>
        <button
          className={`flex flex-col items-center justify-center gap-[16px]  rounded-[24px] border-[2px]  transition-all duration-300 h-[112px]  ${
            payWay != "key"
              ? "bg-[#FDF7F1] border-primary3 "
              : "bg-[#fff] border-secondary7 "
          } `}
          onClick={() => setPayWay("bank")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
          >
            <path
              d="M37.1668 15.4167H3.8335C3.15016 15.4167 2.5835 14.85 2.5835 14.1667C2.5835 13.4833 3.15016 12.9167 3.8335 12.9167H37.1668C37.8502 12.9167 38.4168 13.4833 38.4168 14.1667C38.4168 14.85 37.8502 15.4167 37.1668 15.4167Z"
              fill={`${payWay != "key" ? "#EA9967" : "#222325"}`}
            />
            <path
              d="M13.8333 28.75H10.5C9.81667 28.75 9.25 28.1833 9.25 27.5C9.25 26.8167 9.81667 26.25 10.5 26.25H13.8333C14.5167 26.25 15.0833 26.8167 15.0833 27.5C15.0833 28.1833 14.5167 28.75 13.8333 28.75Z"
              fill={`${payWay != "key" ? "#EA9967" : "#222325"}`}
            />
            <path
              d="M24.6667 28.75H18C17.3167 28.75 16.75 28.1833 16.75 27.5C16.75 26.8167 17.3167 26.25 18 26.25H24.6667C25.35 26.25 25.9167 26.8167 25.9167 27.5C25.9167 28.1833 25.35 28.75 24.6667 28.75Z"
              fill={`${payWay != "key" ? "#EA9967" : "#222325"}`}
            />
            <path
              d="M29.7668 35.4167H11.2335C4.60016 35.4167 2.5835 33.4167 2.5835 26.85V13.15C2.5835 6.58334 4.60016 4.58334 11.2335 4.58334H29.7502C36.3835 4.58334 38.4002 6.58334 38.4002 13.15V26.8333C38.4168 33.4167 36.4002 35.4167 29.7668 35.4167ZM11.2335 7.08334C6.00016 7.08334 5.0835 7.98334 5.0835 13.15V26.8333C5.0835 32 6.00016 32.9 11.2335 32.9H29.7502C34.9835 32.9 35.9002 32 35.9002 26.8333V13.15C35.9002 7.98334 34.9835 7.08334 29.7502 7.08334H11.2335Z"
              fill={`${payWay != "key" ? "#EA9967" : "#222325"}`}
            />
          </svg>
          <span
            className={`text-[16px] font-[500] leading-[0%] transition-all duration-300 ${
              payWay != "key" ? "text-primary3" : "text-primary1"
            }`}
          >
            {translate("visa")}
          </span>
        </button>
      </div>

      {/* card info  */}
      <div className="flex flex-col gap-[20px] p-[16px] rounded-[24px] border-[1px] border-secondary7">
        <CardNumberInput
          placeholder={translate("card-num")}
          value={cardData.cardNumber}
          valid={cardData.cardNumber?.length > 0}
          onChange={changeCardNumberHandler}
          error={""}
        />
        <div className="grid grid-cols-2 gap-[24px]">
          <Date
            valid={cardData.cardDate?.length > 0}
            value={cardData.cardDate}
            handleDateChange={handleDateChange}
            placeholder={translate("card-expiry")}
          />
          <CVV
            valid={cardData.cvv?.length > 0}
            value={cardData.cvv}
            handleCvvChange={handleCvvChange}
            placeholder={"cvv"}
          />
        </div>

        <CardName
          placeholder={translate("card-name")}
          value={cardData.name}
          valid={cardData.name?.length > 0}
          onChange={changeCardNameHandler}
        />
      </div>
    </div>
  );
};

export default PayWay;
