"use client";
import BottomActionsContaienr from "@/components/ui/BottomActionsContaienr";
import Fetching from "@/components/ui/Fetching";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ChooseTime from "./ChooseTime";
import ExtraServices from "./extraservices/ExtraServices";
import { AnimatePresence } from "framer-motion";
import BookingDone from "./BookingDone";
import Error from "@/components/ui/Error";

const initPackages = [
  {
    id: "12344",
    type: "construction",
    title_ar: "بـــــاقة الاستشـــــارة",
    title_en: "Consultation Package",
    steps: [
      {
        type: "consultation",
        title_ar: "استشارة بالمكتب",
        title_en: "In-office consultation",
        doneIn: "2020-11-20T10:36:01.516Z",
        process: "done",
      },
      {
        type: "visit",
        title_ar: "زيارة لتنفيذ المخطط",
        title_en: "Visit to implement the plan",
        doneIn: "",
        process: "active",
      },
      {
        type: "visit",
        title_ar: "زيارة مراجعة",
        title_en: "Review visit",
        doneIn: "",
        process: "later",
      },
    ],
  },
];
const initBooking = {
  package: "",
  step: {},
  date: "",
};
const BookingContainer = () => {
  const [data, setData] = useState(false);
  const [bookingData, setBookingData] = useState(initBooking);
  const router = useRouter();
  const params = useSearchParams();
  const packId = params.get("package");
  const lang = useLocale();
  const t = useTranslations("booking");

  //chosen data
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [extra, setExtra] = useState([]);
  const [sending, setSending] = useState(false);
  const [posted, setPosted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (packId) {
      //send request to fetch user package data
      const res = initPackages.find((el) => el.id == packId);
      if (res) {
        setData(res);
        const step = res.steps.find((el) => el.process == "active");
        setBookingData({ package: res.id, step, date: "" });
      } else {
        router.push("/");
      }
    } else {
      router.push("/");
    }
  }, []);

  const bookingHandler = () => {
    //sending request to databse with that data
    console.log({ date, time, extra });

    //after response
    setSending(true);
    const res = true;
    if (res) {
      setPosted(true);
    } else {
      setError(true);
    }

    setSending(false);
  };

  return (
    <>
      {data ? (
        <section className="p-[24px] flex flex-col gap-[24px]">
          <h1 className="text-primary1 text-[24px] font-[500]">
            {t("title")}{" "}
            {lang == "en"
              ? bookingData.step.title_en
              : bookingData.step.title_ar}
          </h1>
          <ChooseTime
            t={t}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
          />
          <ExtraServices t={t} extra={extra} setExtra={setExtra} />
          <BottomActionsContaienr>
            <button
              onClick={bookingHandler}
              className="h-[56px] w-full py-[8px] px-[16px] flex items-center justify-center rounded-[16px] bg-primary1 text-white font-[700] leading-[150%] disabled:bg-secondary4"
              disabled={!date || !time || sending}
            >
              {t("post-time")}
            </button>
          </BottomActionsContaienr>
        </section>
      ) : (
        <Fetching />
      )}

      <AnimatePresence mode="wait">
        {posted && <BookingDone router={router} t={t} />}
        {error && <Error clickHandler={() => setError(false)} />}
      </AnimatePresence>
    </>
  );
};

export default BookingContainer;
