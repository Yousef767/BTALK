import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

const Card = ({ data }) => {
  const lang = useLocale();
  return (
    <div className="p-[16px] rounded-[16px] border-[1px] border-secondary6 bg-white w-[212px] h-[117px] flex flex-col justify-between">
      <p className="text-secondary3 text-[19px] font-[500]">
        {lang == "en" ? data.title_en : data.title_ar}
      </p>
      <div className="flex justify-between items-center ">
        <div className="text-primary3 text-[40px] font-[400] flex items-end justify-end leading-[0]">
          <span className="pt-[40px]">{data.number}</span>
        </div>
        <Image
          src={data.image}
          width={57}
          height={57}
          alt="order-details"
          priority
          className=""
        />
      </div>
    </div>
  );
};

export default Card;
