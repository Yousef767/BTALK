import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

const Language = ({ lang, onClick, onSave, close, disabled }) => {
  const language = useLocale();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed z-50  top-0 left-0 bg-[rgba(0,0,0,.7)] w-full h-full flex items-end"
    >
      <div className="p-[24px] flex flex-col items-center gap-[32px] rounded-[40px_40px_0px_0px] bg-white w-full">
        <h6 className="text-primary1 text-[28px] font-[400]">
          {" "}
          {language == "en" ? "Language" : "اختر اللغة"}
        </h6>
        <div className="grid grid-cols-2 gap-[16px] w-full">
          <button
            className={`flex flex-col items-center justify-center gap-[16px] p-[24px] rounded-[16px] border-[2px] transition-all duration-300  ${
              lang == "ar"
                ? "bg-[#FDF7F1] border-primary3"
                : "bg-[#fff] border-secondary7"
            } `}
            onClick={() => onClick("ar")}
            disabled={disabled}
          >
            <Image
              src={
                "https://res.cloudinary.com/freelancer3223/image/upload/v1711579951/thebtalk_images/twemoji_flag-kuwait_ve6tmj.svg"
              }
              width={32}
              height={32}
              priority
              alt="flag"
            />
            <span
              className={`text-[19px] font-[500] leading-[150%] transition-all duration-300 ${
                lang == "ar" ? "text-primary3" : "text-secondary1"
              }`}
            >
              {language == "en" ? "Arabic" : "العربية"}
            </span>
          </button>
          <button
            className={`flex flex-col items-center justify-center gap-[16px] p-[24px] rounded-[16px] border-[2px] transition-all duration-300 ${
              lang != "ar"
                ? "bg-[#FDF7F1] border-primary3"
                : "bg-[#fff] border-secondary7"
            } `}
            onClick={() => onClick("en")}
            disabled={disabled}
          >
            {" "}
            <Image
              src={
                "https://res.cloudinary.com/freelancer3223/image/upload/v1711579951/thebtalk_images/twemoji_flag-us-outlying-islands_s1y3h6.svg"
              }
              width={32}
              height={32}
              priority
              alt="flag"
            />
            <span
              className={`text-[19px] font-[500] leading-[150%] transition-all duration-300 ${
                lang != "ar" ? "text-primary3" : "text-secondary1"
              }`}
            >
              {language == "en" ? "English" : "الانجليزية"}
            </span>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-[16px] w-full">
          <button
            className="rounded-[16px] bg-primary1 text-white font-[700] leading-[150%]h-[56px]"
            onClick={onSave}
          >
            {language == "en" ? "Save" : "حفظ"}
          </button>
          <button
            className="rounded-[16px] bg-secondary6 text-secondary1 font-[700] leading-[150%] h-[56px]"
            onClick={close}
          >
            {language == "en" ? "Cancel" : "الغاء"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Language;
