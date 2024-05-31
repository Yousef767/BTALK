import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

const ToPay = ({ data, translate }) => {
  const lang = useLocale();
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "KWD", // Default currency is USD
  }).format(data.price);

  return (
    <div className="p-[16px] pt-[10px] flex flex-col gap-[16px] rounded-[24px] bg-secondary7 ">
      <div className="flex items-center justify-between text-primary1 font-[500] leading-[150%] h-[48px]">
        <p className="text-[19px] ">{translate("number")} </p>
        <p className="text-[24px] ">#{data.number}</p>
      </div>
      <div className="py-[8px] px-[16px] rounded-[24px] border-[1px] border-secondary7 bg-white">
        <div className="flex items-center justify-between h-[44px] border-b-[1px] border-b-secondary7">
          <span className=" text-secondary3 font-[500] leading-[150%]">
            {translate("total")}
          </span>
          <span className="font-[700] text-[19px] text-primary3">
            {formattedAmount}
          </span>
        </div>
        <div className="flex items-center justify-between h-[44px]">
          <span className=" text-secondary3 font-[500] leading-[150%]">
            {translate("status")}
          </span>
          <span className="font-[700] text-[19px]">
            {data.isPaid ? (
              <span className="text-green">{translate("paid")}</span>
            ) : (
              <span className="text-red1">{translate("notPaid")} </span>
            )}
          </span>
        </div>
      </div>
      <Link
        href={`/${lang}/account/bills/${data.id}`}
        className="h-[48px] flex items-center justify-center w-full rounded-[16px] border-[1px] border-primary1 text-primary1 font-[700] leading-[150%]"
      >
        {translate("details")}
      </Link>
    </div>
  );
};

export default ToPay;
