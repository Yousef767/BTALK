"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Confirm = ({ title, accept, isDelete, reject, btnsStyle, deleteT }) => {
  const t = useTranslations("account");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed z-[123456] top-0 left-0 bg-[rgba(0,0,0,.7)] w-full h-full flex justify-center items-center"
    >
      <div className="w-[90%] mx-auto p-[16px] pt-[48px] bg-white rounded-[24px] flex flex-col gap-[32px] ">
        <h4 className="text-primary1 text-center text-[28px] font-[700]">
          {title}
        </h4>
        <div className={`grid justify-center gap-[16px]  ${btnsStyle}`}>
          <button
            type="button"
            onClick={reject}
            className="py-[8px] px-[16px] bg-primary1 font-[700] leading-[150%] text-white rounded-[16px] h-[56px]"
          >
            {isDelete ? (
              <span> {deleteT("not-delete")}</span>
            ) : (
              <span>{t("stay")}</span>
            )}
          </button>
          <button
            type="button"
            onClick={accept}
            className={`py-[8px] px-[16px]  text-secondary1 font-[700] leading-[150%] rounded-[16px] h-[56px] ${
              isDelete ? "bg-red2" : "bg-secondary6"
            }`}
          >
            {isDelete ? (
              <span className="flex items-center justify-center gap-[8px]">
                <Image
                  src={
                    "https://res.cloudinary.com/freelancer3223/image/upload/v1711330982/thebtalk_images/trash_gebg7b.svg"
                  }
                  width={24}
                  height={24}
                  priority
                  alt="delete"
                />
                <span className="pt-[4px] text-[#f46c6c] font-[700] leading-[150%]">
                  {deleteT("delete")}
                </span>
              </span>
            ) : (
              <span>{t("exit")}</span>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Confirm;
