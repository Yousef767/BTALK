"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import TimeFormat from "./TimeFormat";

const DetailsContainer = ({ billData }) => {
  const [data, setData] = useState(billData);
  const [coup, setCoup] = useState("");
  const [coupid, setCoupid] = useState("");
  const lang = useLocale();
  const t = useTranslations("bills");

  console.log(data);
  if (data == undefined)
    return <p className="text-center mt-4 text-red-400">{t("not-found")}</p>;

  const moneyFormat = (value) => {
    const formattedAmount = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "KWD", // Default currency is USD
    }).format(value);
    return formattedAmount;
  };

  const coupHandler = () => {
    //sending request to check the copoun
    const coupIsValid = true;
    if (coup == "ali50") {
      setData({ ...data, discount: 50, coup });
      setCoupid("ali50");
    }
    if (coup == "ali20") {
      setData({ ...data, discount: 20, coup });
      setCoupid("ali20");
    }
  };
  return (
    <div className="mx-[24px] my-[16px] p-[16px] pt-[10px] flex flex-col gap-[16px] rounded-[24px] bg-secondary7">
      <div className="text-primary1 text-[19px] font-[500] leading-[150%] h-[48px] flex items-center justify-between">
        <span>{t("number")} </span>
        <span>#{data.number}</span>
      </div>

      {/* copoun  */}
      {!data.isPaid && (
        <div className="flex items-center justify-between gap-[8px] ">
          <div className="relative flex-1 ">
            <input
              type="text"
              placeholder={t("coup")}
              className="p-[16px] pr-[48px] rounded-[16px] border-[1px] border-secondary5 bg-white outline-none focus:border-primary3 transition-all duration-300 placeholder:text-secondary4 placeholder:font-[500] placeholder:leading-[150%] w-full"
              value={coup}
              onChange={(e) => setCoup(e.target.value)}
            />
            <Image
              src={
                "https://res.cloudinary.com/freelancer3223/image/upload/v1711549889/thebtalk_images/discount-shape_zcxz0a.svg"
              }
              width={24}
              height={24}
              priority
              alt="percentage"
              className=" pointer-events-none absolute top-[47%] translate-y-[-50%] right-[16px]"
            />
          </div>
          <button
            className="bg-primary1 rounded-[16px] h-[56px] min-w-[77px] text-white font-[700] leading-[150%]"
            onClick={coupHandler}
          >
            {t("apply-coup")}
          </button>
        </div>
      )}

      <div className="py-[8px] px-[16px] rounded-[24px] border-[1px] border-secondary7 bg-white ">
        <div className="flex items-center justify-between h-[44px] border-b-[1px] border-b-secondary7 gap-[8px]">
          <span className=" text-secondary3 font-[500] leading-[150%]">
            {t("date")}
          </span>
          <span className="font-[400] text-[19px] tracking-[.38px] text-primary2 ">
            {/* {data.date} */}
            <TimeFormat date={data.date} />
          </span>
        </div>
        <div className="flex items-center justify-between h-[44px] gap-[8px]">
          <span className=" text-secondary3 font-[500] leading-[150%]">
            {t("status")}
          </span>
          <span className="font-[700] text-[19px]">
            {data.isPaid ? (
              <span className="text-green">{t("paid")}</span>
            ) : (
              <span className="text-red1">{t("notPaid")} </span>
            )}
          </span>
        </div>
      </div>

      <div className="py-[8px] px-[16px] rounded-[24px] border-[1px] border-secondary7 bg-white">
        <div className="flex items-center justify-between h-[44px] gap-[8px] ">
          <span className=" text-secondary3 font-[500] leading-[150%]">
            {data.billType}
          </span>
          <span className="font-[400] text-[19px] tracking-[.38px] text-primary2 ">
            {moneyFormat(data.price)}
          </span>
        </div>
      </div>

      <div className="py-[8px] px-[16px] rounded-[24px] border-[1px] border-secondary7 bg-white">
        <div className="flex items-center justify-between h-[44px] gap-[8px] ">
          <span className=" text-secondary3 font-[500] leading-[150%]">
            {t("total")}
          </span>
          <span className="font-[400] text-[19px] tracking-[.38px] text-primary2 ">
            {moneyFormat(data.price)}
          </span>
        </div>
        <div className="flex items-center justify-between h-[44px] gap-[8px] ">
          <span className=" text-secondary3 font-[500] leading-[150%]">
            {t("discount")}
          </span>
          <span className="font-[400] text-[19px] tracking-[.38px] text-primary2 ">
            {moneyFormat((data.price / 100) * data.discount)}
          </span>
        </div>
        <div className="flex items-center justify-between h-[44px] gap-[8px] ">
          <span className=" text-secondary3 font-[500] leading-[150%]">
            {t("total-after-discount")}
          </span>
          <span className="font-[500] text-[24px]  text-primary3 ">
            {moneyFormat(data.price - (data.price / 100) * data.discount)}
          </span>
        </div>
      </div>
      {!data.isPaid && (
        <Link
          href={`${
            coupid
              ? `/${lang}/payment?package=${data.id}&coup=${coupid}`
              : `/${lang}/payment?package=${data.id}`
          }`}
          className="w-full h-[48px] flex justify-center items-center gap-[8px] rounded-[16px] bg-primary1"
        >
          <Image
            src={
              "https://res.cloudinary.com/freelancer3223/image/upload/v1711553381/thebtalk_images/card_jrnkh1.svg"
            }
            width={24}
            height={24}
            priority
            alt="pay"
          />
          <span className="text-white font-[700] leading-[150%] pt-[3px]">
            {lang == "en" ? "Pay" : "الدفع"}
          </span>
        </Link>
      )}
    </div>
  );
};

export default DetailsContainer;
