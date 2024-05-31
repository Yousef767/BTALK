import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useTranslations } from "next-intl";
const Error = ({ clickHandler }) => {
  const t = useTranslations("home");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed z-[10000] bottom-0 left-0 bg-[rgba(0,0,0,.7)] w-full h-[100vh] flex justify-center  items-end"
    >
      <div className="flex flex-col gap-[16px] text-center bg-white w-full p-[24px] pt-[48px] rounded-[40px_40px_0px_0px] ">
        <h5 className="h5 text-[#F46C6C]"> {t("faild-title")}</h5>
        <p className="text-secondary3 font-[500] leading-[150%]">
          {t("faild-description")}
        </p>
        <Button link={false} text={t("okay")} clickHandler={clickHandler} />
      </div>
    </motion.div>
  );
};

export default Error;
