import React from "react";
import Status from "./Status";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import TimeFormat from "../account/bills/details/TimeFormat";

const Card = ({ data, clickHandler }) => {
  const lang = useLocale();
  const currencyT = useTranslations("currency");
  const buttonsT = useTranslations("buttons");

  return (
    <div className="relative w-[283px] h-[100%] flex flex-col justify-end items-end gap-[-56px] rounded-[48px] shadow-[0px_0px_16px_0px_rgba(0,0,0,.07)] bg-red2 overflow-hidden ">
      <div className="absolute top-0 w-full h-[137px] homeSliderBg">
        <h3 className="text-primary1 text-center text-[28px] font-[400] m-[8px] mt-[26px]">
          {lang == "en" ? data.title_en : data.title_ar}
        </h3>
      </div>
      <div
        className="z-[2] bg-white rounded-[48px] p-[24px] flex flex-col justify-between h-[79%] w-full bg_flower "
        style={{ boxShadow: "none" }}
      >
        {data.type != "construction" ? (
          <>
            {" "}
            <p>{lang == "en" ? data.description_en : data.description_ar}</p>
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-[4px]">
                <span className="text-[28px] font-[700] text-primary1 ">
                  {data.price}
                </span>
                <span className="text-[24px] font-[500] text-primary2">
                  {currencyT("dinar")}
                </span>
              </div>
              <button
                className="w-[112px] h-[56px] py-[8px] px-[16px] flex items-center justify-center rounded-[16px] bg-primary1 font-[700] leading-[150%]   text-white"
                onClick={() => clickHandler(data)}
              >
                {buttonsT("buy")}
              </button>
            </div>
          </>
        ) : (
          <>
            <div>
              <ul>
                {data.steps.map((step, i) => (
                  <li key={i} className="flex gap-[8px] ">
                    <div className="relative">
                      <Status process={step.process} />
                      {i != data.steps.length - 1 && (
                        <span
                          className={`absolute w-[2px] h-[100%] bg-red2 top-0 left-[50%] translate-x-[-50%]  ${
                            step.process == "done"
                              ? "bg-secondary4"
                              : step.process == "active"
                              ? "bg-secondary3"
                              : "transparent"
                          }`}
                        />
                      )}
                    </div>
                    <div className="pb-[12px]">
                      <h4
                        className={`font-[700] leading-[150%] ${
                          step.process == "done"
                            ? "text-secondary4"
                            : step.process == "active"
                            ? "text-primary3"
                            : "text-primary2"
                        }`}
                      >
                        {lang == "en" ? step.title_en : step.title_ar}
                      </h4>
                      {step.doneIn && (
                        <p className="text-[14px] font-[400] text-secondary3">
                          {lang == "en"
                            ? `Done in `
                            : `${
                                step.type == "consultation"
                                  ? "تمت الاستشارة يوم"
                                  : "تمت الزياره يوم"
                              } `}
                          <TimeFormat date={step.doneIn} />
                          {/* {step.status} */}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <p className=" text-primary1 font-[500] leading-[150%]">
                {lang == "en"
                  ? "Please schedule an appointment for your next visit"
                  : "يرجى تحديد موعد للزيارة التالية"}
              </p>
            </div>
            <Link
              href={{
                pathname: `/${lang}/booking`,
                query: { package: data.id },
              }}
              className="w-full h-[56px] py-[8px] px-[16px] flex items-center justify-center rounded-[16px] bg-primary1 font-[700] leading-[150%] text-white"
            >
              {buttonsT("choose-time")}
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
