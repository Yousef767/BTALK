import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

const ChartItem = ({ data }) => {
  const lang = useLocale();
  return (
    <div className="pt-[24px] pr-[24px] flex flex-col gap-[8px] bg-white w-[271px] rounded-[16px] my-[24px]">
      <h3 className="text-secondary3 text-[19px] font-[500] leading-[40%]">
        {lang == "en" ? data.title_en : data.title_ar}
      </h3>
      <div className="flex items-center gap-[8px]">
        <span className="text-primary3 text-[40px] font-[400] px-[2px]">
          {data.number}
        </span>
        <div
          className={`flex items-center  font-[400] leading-[150%] ${
            data.last_number > data.number ? "text-primary3" : "text-[#20BF55]"
          }`}
        >
          <span>%</span>
          <span className="">
            {(
              (Math.abs(data.number - data.last_number) / data.last_number) *
              100
            ).toFixed(2)}
          </span>
          <span className="">{data.last_number > data.number ? "-" : "+"}</span>
        </div>
      </div>
      <div className="w-full h-[88px] text-left lr">
        <Image
          src={
            "https://res.cloudinary.com/freelancer3223/image/upload/v1713184673/thebtalk_images/Component_2_h5b72p.png"
          }
          alt="chart"
          width={200}
          height={88}
          priority
        />
      </div>
    </div>
  );
};

export default ChartItem;
