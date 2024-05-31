import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import CalcTime from "./CalcTime";
import NavLink from "@/components/ui/NavLink";

const Notification = ({ data }) => {
  const lang = useLocale();

  return (
    <NavLink
      href={
        data.type == "construction-feedback"
          ? `/account/feedback?package=${data.refId}`
          : data.type == "add-bill"
          ? "/account/bills/add"
          : data.type == "visit-soon"
          ? `/visit/${data.refId}`
          : "#"
      }
      className={"flex gap-[8px] items-start w-[100%] py-[24px]"}
    >
      <div
        className={`rounded-[8px] w-[40px] h-[40px] flex items-center justify-center ${
          data.seen ? "bg-primary4" : "bg-primary3"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19.3399 14.49L18.3399 12.83C18.1299 12.46 17.9399 11.76 17.9399 11.35V8.82C17.9399 6.47 16.5599 4.44 14.5699 3.49C14.0499 2.57 13.0899 2 11.9899 2C10.8999 2 9.91994 2.59 9.39994 3.52C7.44994 4.49 6.09994 6.5 6.09994 8.82V11.35C6.09994 11.76 5.90994 12.46 5.69994 12.82L4.68994 14.49C4.28994 15.16 4.19994 15.9 4.44994 16.58C4.68994 17.25 5.25994 17.77 5.99994 18.02C7.93994 18.68 9.97994 19 12.0199 19C14.0599 19 16.0999 18.68 18.0399 18.03C18.7399 17.8 19.2799 17.27 19.5399 16.58C19.7999 15.89 19.7299 15.13 19.3399 14.49Z"
            fill={`${data.seen ? "#EA9967" : "#fff"}`}
          />
          <path
            d="M14.8302 20.01C14.4102 21.17 13.3002 22 12.0002 22C11.2102 22 10.4302 21.68 9.88018 21.11C9.56018 20.81 9.32018 20.41 9.18018 20C9.31018 20.02 9.44018 20.03 9.58018 20.05C9.81018 20.08 10.0502 20.11 10.2902 20.13C10.8602 20.18 11.4402 20.21 12.0202 20.21C12.5902 20.21 13.1602 20.18 13.7202 20.13C13.9302 20.11 14.1402 20.1 14.3402 20.07C14.5002 20.05 14.6602 20.03 14.8302 20.01Z"
            fill={`${data.seen ? "#EA9967" : "#fff"}`}
          />
        </svg>
      </div>

      <div className="flex-1">
        <h6
          className={`${
            data.seen ? "text-secondary3" : "text-secondary1"
          } text-[19px] font-[500] leading-[150%]`}
        >
          {lang == "en" ? data.title_en : data.title_ar}
        </h6>
        <p
          className={`${
            data.seen ? "text-secondary4" : "text-[#333]"
          } font-[400] leading-[150%]`}
        >
          {lang == "en" ? data.message_en : data.message_ar}
        </p>
        <div className="flex items-center gap-[4px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8.00016 15.1666C4.04683 15.1666 0.833496 11.9533 0.833496 7.99992C0.833496 4.04659 4.04683 0.833252 8.00016 0.833252C11.9535 0.833252 15.1668 4.04659 15.1668 7.99992C15.1668 11.9533 11.9535 15.1666 8.00016 15.1666ZM8.00016 1.83325C4.60016 1.83325 1.8335 4.59992 1.8335 7.99992C1.8335 11.3999 4.60016 14.1666 8.00016 14.1666C11.4002 14.1666 14.1668 11.3999 14.1668 7.99992C14.1668 4.59992 11.4002 1.83325 8.00016 1.83325Z"
              fill="#979797"
            />
            <path
              d="M10.4731 10.6199C10.3864 10.6199 10.2998 10.5999 10.2198 10.5466L8.1531 9.31326C7.63977 9.00659 7.25977 8.33326 7.25977 7.73992V5.00659C7.25977 4.73326 7.48643 4.50659 7.75977 4.50659C8.0331 4.50659 8.25977 4.73326 8.25977 5.00659V7.73992C8.25977 7.97992 8.45977 8.33326 8.66643 8.45326L10.7331 9.68659C10.9731 9.82659 11.0464 10.1333 10.9064 10.3733C10.8064 10.5333 10.6398 10.6199 10.4731 10.6199Z"
              fill="#979797"
            />
          </svg>
          <span className="pt-[4px] text-secondary3 text-[12px] font-[400]">
            {/* {data.time} */}
            <CalcTime time={data.time} />
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default Notification;
