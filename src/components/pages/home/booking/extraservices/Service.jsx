import React from "react";
import Image from "next/image";
import { useLocale } from "next-intl";

const Service = ({ data, clickHandler, included }) => {
  const lang = useLocale();
  return (
    <button
      onClick={() => clickHandler(data)}
      className={`py-[12px] px-[16px] flex gap-[4px] items-center justify-between self-stretch rounded-[16px] transition-all w-full border-[2px] ${
        included
          ? "bg-[#FDF7F1]  border-primary3 "
          : "bg-secondary7  border-secondary7 "
      } `}
    >
      <div className="flex items-start gap-[6px]">
        <span
          className={`min-w-[20px]  h-[20px] flex items-center border-[1px] rounded-[6px] border-solid pointer-events-none transition-all duration-300 ${
            included
              ? "border-primary3 bg-primary3"
              : "border-secondary5 bg-white "
          }`}
        >
          <Image
            src={
              "https://res.cloudinary.com/freelancer3223/image/upload/v1710778074/thebtalk_images/Vector_5_twyzdk.svg"
            }
            width={18}
            height={18}
            alt="checking stay logged"
            priority
            className="w-[85%] mx-auto"
          />
        </span>

        <p
          className={` font-[500] leading-[150%] ${
            lang == "en" ? "text-left" : "text-right"
          } ${included ? "text-primary3" : "text-primary2"}`}
        >
          {lang == "en" ? data.title_en : data.title_ar}
        </p>
      </div>
      <div className="flex flex-col lr">
        <span
          className={` text-[19px] font-[500] leading-[100%] ${
            included ? "text-primary3" : "text-primary1"
          }`}
        >
          +{data.price}
        </span>
        <span
          className={` text-[14px] font-[400] ${
            included ? "text-primary3" : "text-secondary4"
          }`}
        >
          {lang == "en" ? "Dinar" : "دينار"}
        </span>
      </div>
    </button>
  );
};

export default Service;
