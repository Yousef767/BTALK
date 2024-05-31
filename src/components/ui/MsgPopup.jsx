import React from "react";
import Button from "./Button";
import { useLocale } from "next-intl";

const MsgPopup = ({ title, message, className, closePopup }) => {
  const lang = useLocale();
  return (
    <div className="fixed z-[10000] top-0 left-0 bg-[rgba(0,0,0,.7)] w-full h-full flex justify-center items-center">
      <div className="w-[90%] mx-auto p-[16px] pt-[48px] flex flex-col justify-center items-center gap-[16px] rounded-[24px] bg-white">
        <h5
          className={`h5 text-center ${
            className ? className : "text-primary1 "
          }`}
        >
          {title}
        </h5>
        <p className="text-[19px] font-[500] leading-[150%] text-primary2 text-center">
          {message}
        </p>
        <Button
          link={false}
          text={lang == "en" ? "Okay" : "حسنا"}
          clickHandler={closePopup}
        />
      </div>
    </div>
  );
};

export default MsgPopup;
