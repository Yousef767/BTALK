import Image from "next/image";
import Link from "next/link";
import React from "react";

const PackageItem = ({ data }) => {
  return (
    <Link
      href={`packages/add?id=${data.id}`}
      className="p-[16px] flex justify-between gap-[16px] rounded-[24px] bg-secondary7 "
    >
      <Image
        src={data.bgImage}
        width={120}
        height={120}
        priority
        alt="package-image"
        className=" rounded-[24px]"
      />
      <div className="flex-1 flex flex-col gap-[4px]">
        <p>
          <span className="text-primary3 text-[24px] font-[500]">
            {data.title_ar}
          </span>{" "}
          <span>( {data.steps.length} خطوات )</span>
        </p>
        <p className="text-secondary2 text-[19px] font-[500]">
          {data.price} دينار
        </p>
        <p className="text-secondary3 font-[400] leading-[150%]">
          {data.descriptions_ar[0].length > 70
            ? data.descriptions_ar[0].slice(0, 70) + " .........."
            : data.descriptions_ar[0]}
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          d="M5 15.73C3.48 15.73 2.25 14.5 2.25 12.98C2.25 11.46 3.48 10.23 5 10.23C6.52 10.23 7.75 11.46 7.75 12.98C7.75 14.5 6.52 15.73 5 15.73ZM5 11.73C4.31 11.73 3.75 12.29 3.75 12.98C3.75 13.67 4.31 14.23 5 14.23C5.69 14.23 6.25 13.67 6.25 12.98C6.25 12.29 5.69 11.73 5 11.73Z"
          fill="#585158"
        />
        <path
          d="M19 15.73C17.48 15.73 16.25 14.5 16.25 12.98C16.25 11.46 17.48 10.23 19 10.23C20.52 10.23 21.75 11.46 21.75 12.98C21.75 14.5 20.52 15.73 19 15.73ZM19 11.73C18.31 11.73 17.75 12.29 17.75 12.98C17.75 13.67 18.31 14.23 19 14.23C19.69 14.23 20.25 13.67 20.25 12.98C20.25 12.29 19.69 11.73 19 11.73Z"
          fill="#585158"
        />
        <path
          d="M12 15.73C10.48 15.73 9.25 14.5 9.25 12.98C9.25 11.46 10.48 10.23 12 10.23C13.52 10.23 14.75 11.46 14.75 12.98C14.75 14.5 13.52 15.73 12 15.73ZM12 11.73C11.31 11.73 10.75 12.29 10.75 12.98C10.75 13.67 11.31 14.23 12 14.23C12.69 14.23 13.25 13.67 13.25 12.98C13.25 12.29 12.69 11.73 12 11.73Z"
          fill="#585158"
        />
      </svg>
    </Link>
  );
};

export default PackageItem;
