import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

const Awardspopup = ({ closeHandler, awards, t }) => {
  const lang = useLocale();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed z-10 top-0 left-0 bg-[rgba(0,0,0,.7)] w-full h-[100vh] flex justify-center items-center"
    >
      <div className="w-[90%] mx-auto p-[16px] pt-[32px] bg-white rounded-[24px] flex flex-col gap-[32px] ">
        <h4 className="text-primary1 text-center text-[28px] font-[700]">
          {t("awards")}
        </h4>
        <ul className="flex flex-col gap-[16px] max-h-[300px] overflow-auto">
          {awards.map((el, i) => (
            <li
              key={i}
              className="p-[16px] flex justify-between items-center gap-[8px] rounded-[10px] border-[1px] border-secondary7 w-full"
            >
              {" "}
              <span className="text-secondary4 text-[19px] font-[400] tracking-[.38px]">
                {lang == "en" ? el.title_en : el.title_ar}
              </span>{" "}
              <span className="text-green font-[700] leading-[150%]">
                {el.points} {t("point")}
              </span>
            </li>
          ))}
        </ul>
        <button
          className="w-full h-[56px] flex justify-center items-center rounded-[16px] bg-primary1 text-white "
          onClick={closeHandler}
        >
          {t("okay")}
        </button>
      </div>
    </motion.div>
  );
};

export default Awardspopup;
