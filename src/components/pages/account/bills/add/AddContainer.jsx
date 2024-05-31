"use client";
import React, { useState } from "react";
import Image from "next/image";

import BottomActionsContaienr from "@/components/ui/BottomActionsContaienr";
import AddButton from "./AddButton";
import Tostify from "@/components/ui/Tostify";

import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

const AddContainer = () => {
  const [value, setValue] = useState("");
  const [image, setImage] = useState(false);
  const [activeNotify, setActiveNotify] = useState(false);
  const lang = useLocale();
  const t = useTranslations("bills");

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      setImage(imageFile);
    }
  };

  const addBillHandler = () => {
    if (value.length > 0 && image) {
      //send request here to add this bill
      setValue("");
      setImage(false);
      setActiveNotify(true);
    }
  };
  return (
    <>
      <div className="mx-[24px] py-[16px] flex flex-col gap-[16px]">
        <AddButton onChange={handleImageChange} />
        <div className={`form-input ${value.length > 0 && "valid"}`}>
          <div className={`relative mb-[16px]`}>
            <input
              name={"name"}
              id={"doctor_name"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type={"text"}
              className={`p-[16px] h-[56px] ${
                lang == "en" ? "pr-[48px]" : "pl-[48px]"
              }  text-primary1  rounded-[16px] bg-secondary7 outline-none border-[2px] border-secondary7 border-solid w-full font-[500]  flex items-center text-[16px]  focus:border-primary3   focus:bg-white transition-all duration-300 font-poppins ${
                value.length > 0 && "bg-white"
              } `}
              // style={{
              //   paddingLeft: className && className + "px",
              // }}
            />
            <label
              className={`text-secondary5 absolute ${
                lang == "en" ? "left-[16px]" : "right-[16px]"
              }  top-[50%] translate-y-[-50%] px-[8px] pointer-events-none  transition-all duration-500`}
              htmlFor={"doctor_name"}
            >
              {t("doc-name")}
            </label>
          </div>
          <AnimatePresence mode="wait">
            {image && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative rounded-[16px] overflow-hidden"
              >
                <Image
                  src={URL.createObjectURL(image)}
                  width={450}
                  height={1000}
                  priority
                  alt="bill-image"
                  className="max-w-[100%] "
                />
                <button
                  className="w-[32px] h-[32px] flex items-center justify-center rounded-[8px] bg-red2 absolute top-[16px] left-[16px]"
                  onClick={() => setImage(false)}
                >
                  <Image
                    src={
                      "https://res.cloudinary.com/freelancer3223/image/upload/v1711330982/thebtalk_images/trash_gebg7b.svg"
                    }
                    width={24}
                    height={24}
                    priority
                    alt="delete-image"
                  />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <BottomActionsContaienr className={{ padding: "16px" }}>
          <button
            onClick={addBillHandler}
            className="h-[56px] w-full py-[8px] px-[16px] flex items-center justify-center rounded-[16px] bg-primary1 text-white font-[700] leading-[150%] disabled:bg-secondary4"
            disabled={value.length < 1 || !image}
          >
            {t("add")}
          </button>
        </BottomActionsContaienr>
      </div>{" "}
      <Tostify
        type={"success"}
        message={t("paid-done")}
        active={activeNotify}
        setClose={() => setActiveNotify(false)}
      />
    </>
  );
};

export default AddContainer;
