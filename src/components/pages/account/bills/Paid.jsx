import Image from "next/image";
import React from "react";

const Paid = ({ data, onDelete }) => {
  return (
    <div className=" p-[8px] pt-[12px] rounded-[24px] bg-primary5">
      <div className="flex items-center justify-between gap-[8px] mb-[4px] p-[8px] pt-[0px]">
        <p className="text-primary1 font-[500] leading-[150%] ">{data.title}</p>
        <div className="flex items-center justify-center gap-[8px]">
          <a href={data.image} download="true">
            <Image
              src={
                "https://res.cloudinary.com/freelancer3223/image/upload/v1711538788/thebtalk_images/import_as0tfl.svg"
              }
              width={20}
              height={20}
              priority
              alt="download"
            />
          </a>
          <button onClick={onDelete}>
            <Image
              src={
                "https://res.cloudinary.com/freelancer3223/image/upload/v1711330982/thebtalk_images/trash_gebg7b.svg"
              }
              width={20}
              height={20}
              priority
              alt="delete"
            />
          </button>
        </div>
      </div>
      <div
        className={`w-full h-[197px] bg-center bg-no-repeat rounded-[16px]`}
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      ></div>
    </div>
  );
};

export default Paid;
