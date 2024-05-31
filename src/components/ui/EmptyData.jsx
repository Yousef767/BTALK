import Image from "next/image";
import React from "react";

const EmptyData = ({ message, className }) => {
  return (
    <div className={`px-[24px] pt-[8.5vh] ${className}`}>
      <div className="flex flex-col gap-[16px] items-center justify-center">
        <Image
          src={
            "https://res.cloudinary.com/freelancer3223/image/upload/v1711213330/thebtalk_images/5d965df4a652b0aad5a68de069b63c01_vxzumz.gif"
          }
          width={250}
          height={250}
          priority
          alt="empty"
          className=""
        />
        <p className="text-secondary4 text-center text-[19px] font-[500] leading-[150%]">
          {message}
        </p>
      </div>
    </div>
  );
};

export default EmptyData;
