"use client";
import React, { useEffect, useState } from "react";
import Star from "./Star";
import Tostify from "@/components/ui/Tostify";
import { useRouter, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const packages = [
  {
    id: "123",
    title_ar: "عيادة الاسنان",
    title_en: "Dental clinic",
  },
  {
    id: "12365",
    title_ar: "موعد عملية",
    title_en: "Operation visit",
  },
  {
    id: "12344",
    title_ar: "بـــــاقة الاستشـــــارة",
    title_en: "Consultation Package",
  },
];

const Container = () => {
  const [rate, setRate] = useState(0);
  const [message, setMessage] = useState("");
  const [packageData, setPackageData] = useState("");
  const [activeNotify, setActiveNotify] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const packageId = searchParams.get("package");
  const lang = useLocale();
  const t = useTranslations("feedback");

  //fetching package details
  useEffect(() => {
    const data = packages.find((el) => el.id == packageId);
    if (data) {
      setPackageData(data);
    }
  }, []);

  const sendFeedback = () => {
    console.log({ rate: rate, message: message });
    //sending feedback to the database

    setRate(0);
    setMessage("");
    setActiveNotify(true);

    const redirectAfterTime = setTimeout(() => {
      router.push("/");
      return () => clearTimeout(redirectAfterTime);
    }, 3000);
  };
  return (
    <>
      <div className="min-h-[100vh] pt-[108px] flex justify-center items-end">
        <div className="flex flex-col pt-[40px] pb-[16px] px-[24px] items-center justify-between gap-[40px] rounded-[48px_48px_0px_0px] shadow-[0px_-8px_24px_0px_rgba(0, 0, 0, 0.10)] w-full relative bg-white  z-10 gap-[40px] wb-bg min-h-[75vh] pb-[16px] bg_flower behindShape">
          <div className="flex flex-col items-center justify-center gap-[16px]">
            <h4 className="text-primary2 text-[19px] font-[500] leading-[150%]">
              {t("title")}
            </h4>
            <h5 className="text-primary1 text-[28px] font-[400]">
              {lang == "en" ? packageData?.title_en : packageData?.title_ar}
            </h5>
            <div className="flex justify-center items-center gap-[8px] lr">
              {[1, 2, 3, 4, 5].map((el) => (
                <Star
                  key={el}
                  number={el}
                  rate={rate}
                  onClick={() => setRate(el)}
                />
              ))}
            </div>
          </div>
          <div className="w-full">
            <h5 className="text-secondary2 text-[19px] font-[500] leading-[150%] first-letter:capitalize">
              {t("messageLabel")}
            </h5>
            <textarea
              name="feedback"
              className="w-full p-[16px] rounded-[16px] border-[1px] border-secondary5 bg-secondary7 h-[221px] resize-none placeholder:text-secondary3"
              placeholder={t("messagePlaceholder")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            className="h-[56px] w-full flex items-center justify-center rounded-[16px] bg-primary1 font-[700] text-white leading-[150%] disabled:bg-secondary3 "
            onClick={sendFeedback}
            disabled={message.length < 1 || rate == 0}
          >
            {t("sendFeedback")}
          </button>
        </div>
      </div>
      <Tostify
        type={"success"}
        message={t("thanks")}
        active={activeNotify}
        setClose={() => setActiveNotify(false)}
      />
    </>
  );
};

export default Container;
