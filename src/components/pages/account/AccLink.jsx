import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AccLink = ({ href, img, title, withArrow, imgStyle, invite, t }) => {
  const lang = useLocale();

  return (
    <Link href={href} className="flex items-center justify-between">
      <span className="flex items-center gap-[6px]">
        <span
          className={`w-[40px] h-[40px] flex items-center justify-center rounded-[8px]  ${
            imgStyle ? imgStyle : "bg-primary5"
          }`}
        >
          <Image src={img} width={24} height={24} priority alt="linkimage" />
        </span>
        <span className="font-[500] leading-[150%] text-secondary2">
          {title}
        </span>
      </span>
      {withArrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`${lang == "en" && "rotate-180"}`}
        >
          <path
            d="M14.9998 20.67C14.8098 20.67 14.6198 20.6 14.4698 20.45L7.94979 13.93C6.88979 12.87 6.88979 11.13 7.94979 10.07L14.4698 3.55002C14.7598 3.26002 15.2398 3.26002 15.5298 3.55002C15.8198 3.84002 15.8198 4.32002 15.5298 4.61002L9.00979 11.13C8.52979 11.61 8.52979 12.39 9.00979 12.87L15.5298 19.39C15.8198 19.68 15.8198 20.16 15.5298 20.45C15.3798 20.59 15.1898 20.67 14.9998 20.67Z"
            fill="#EA9967"
          />
        </svg>
      )}
      {invite && (
        <span className="text-[#20bf55] text-[14px] font-[400] pb-[4px] pt-[8px] px-[16px] bg-secondary7 rounded-[8px]">
          5 {t("points")}
        </span>
      )}
    </Link>
  );
};

export default AccLink;
