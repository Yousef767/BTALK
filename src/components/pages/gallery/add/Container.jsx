"use client";
import BottomActionsContaienr from "@/components/ui/BottomActionsContaienr";
import React, { useState } from "react";
import AddButton from "../../account/bills/add/AddButton";
import { AnimatePresence } from "framer-motion";
import Items from "./Items";
import Tostify from "@/components/ui/Tostify";
import { useLocale, useTranslations } from "next-intl";

const Container = () => {
  const [address, setAddress] = useState("");
  const [data, setData] = useState([]);
  const [activeNotify, setActiveNotify] = useState(false);
  const t = useTranslations("gallery");
  const lang = useLocale();

  const handleFileChange = (event) => {
    const files = event.target.files;
    setData([...data, ...files]);
  };
  const deleteHandler = (el) => {
    const newData = data.filter((element) => element != el);
    setData(newData);
  };

  const addGalleryHandler = () => {
    let images = [];
    let videos = [];

    for (let i = 0; i < data.length; i++) {
      const file = data[i];
      if (file.type.startsWith("image/")) {
        images.push(file);
      } else if (file.type.startsWith("video/")) {
        videos.push(file);
      } else {
        console.log("Unsupported file type:", file);
        // Handle unsupported file type
      }
    }

    console.log({ title: address, images, videos });
    setData([]);
    setAddress("");
    setActiveNotify(true);
  };
  return (
    <>
      <div className="mx-[24px] mt-[16px]">
        <AddButton
          onChange={handleFileChange}
          accept={"image/*,video/*"}
          multiple={true}
          title={t("add-image")}
        />
        <div
          className={`form-input ${address.length > 0 && "valid"} mt-[16px]`}
        >
          <div className={`relative mb-[16px]`}>
            <input
              name={"name"}
              id={"addredd"}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type={"text"}
              className={`p-[16px] h-[56px]  text-primary1  rounded-[16px] bg-secondary7 outline-none border-[2px] border-secondary7 border-solid w-full font-[500]  flex items-center text-[16px]  focus:border-primary3   focus:bg-white transition-all duration-300 font-poppins ${
                address.length > 0 && "bg-white"
              } ${lang == "en" ? "pr-[48px]" : "pl-[48px]"} `}
              // style={{
              //   paddingLeft: className && className + "px",
              // }}
            />
            <label
              className={`text-secondary5 absolute  top-[50%] translate-y-[-50%] px-[8px] pointer-events-none  transition-all duration-500 ${
                lang == "en" ? "left-[16px]" : "right-[16px]"
              }`}
              htmlFor={"doctor_name"}
            >
              {t("input-title")}
            </label>
          </div>

          <AnimatePresence mode="wait">
            <Items data={data} deleteHandler={deleteHandler} />
          </AnimatePresence>
        </div>
        <BottomActionsContaienr className={{ padding: "16px" }}>
          <button
            onClick={addGalleryHandler}
            className="h-[56px] w-full py-[8px] px-[16px] flex items-center justify-center rounded-[16px] bg-primary1 text-white font-[700] leading-[150%] disabled:bg-secondary4"
            disabled={data.length < 1 || address.length < 1}
          >
            {t("add")}
          </button>
        </BottomActionsContaienr>
      </div>
      <Tostify
        type={"success"}
        message={t("uploaded")}
        active={activeNotify}
        setClose={() => setActiveNotify(false)}
      />
    </>
  );
};

export default Container;
