import React from "react";
import Image from "next/image";

const Item = ({ image, number, title }) => {
  return (
    <div className="p-[16px] flex flex-col gap-[16px] bg-white rounded-[16px] border-[1px] border-secondary6">
      <p className=" text-secondary3 text-[19px] font-[500] leading-[150%]">
        {" "}
        {title}
      </p>
      <div className="flex justify-between items-end">
        <p className="text-primary3 text-[40px] font-[400] translate-y-[14px] ">
          {number}
        </p>
        <Image src={image} width={57} height={57} priority alt="coupon image" />
      </div>
    </div>
  );
};

export default Item;
