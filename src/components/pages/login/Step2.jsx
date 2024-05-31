"use client";
import React, { useState, useEffect } from "react";
import OTPInput from "./OTPInput";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const Step2 = ({ mobileNumber, goBack, t }) => {
  // const [isCorrect, setIsCorrect] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [time, setTime] = useState(120);
  const router = useRouter();
  const lang = useLocale();

  const changeOtpHandler = (e) => {
    setOtp(e);
    // setIsCorrect(false);
  };

  // Function to start the countdown
  const startTimer = () => {
    const timerInterval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1; // Decrease time by 1 second if time is greater than 0
        } else {
          clearInterval(timerInterval); // Clear interval if time reaches 0
          return prevTime;
        }
      });
    }, 1000);

    // Clean up function to clear interval when component unmounts
    return () => clearInterval(timerInterval);
  };

  // Effect to start the timer when the component mounts
  useEffect(() => {
    startTimer();
  }, []);

  // Format the time into minutes and seconds
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const otpChekHandler = () => {
    //cheking the otp here
    //if otp wrong funcionality

    //if otp corrent
    //create here new user then redirct to profile
    router.push(`/${lang}/login/welcome_back/profile`);
  };

  return (
    <div className="flex flex-col pt-[40px] px-[24px] items-center gap-[40px] rounded-[48px_48px_0px_0px] shadow-[0px_-8px_24px_0px_rgba(0, 0, 0, 0.10)] w-full relative bg-white  z-10 gap-[40px] wb-bg min-h-[61vh] pb-[16px] bg_flower">
      <div className="text-center flex flex-col gap-[10px]">
        <h5 className="h5 text-primary2">{t("welcome")} لمياء الأنبعي</h5>
        <p className="font-[400] leading-[150%] text-secondary4 text-center">
          {t("otp-message")}
        </p>
        <div className="flex items-center justify-center gap-[8px]">
          <span
            className="text-secondary1 font-[700] leading-[150%] tracking-[.25px]"
            style={{ direction: "ltr" }}
          >
            {mobileNumber}
          </span>
          <button
            className="text-[14px] font-[400] text-primary3"
            onClick={goBack}
          >
            {t("change-number")}
          </button>
        </div>
      </div>
      <div className="lr">
        <OTPInput length={4} changeOtpHandler={changeOtpHandler} />
      </div>
      <Button
        link={false}
        text={t("check-otp")}
        disable={
          otp[0].length < 1 ||
          otp[1].length < 1 ||
          otp[2].length < 1 ||
          otp[3].length < 1
        }
        clickHandler={otpChekHandler}
        className="disabled:bg-secondary6 disabled:text-secondary4"
      />
      <div className="flex justify-center items-center gap-[16px]">
        {time > 0 && (
          <p className="text-secondary3 font-[400]">
            {t("resend-title")}{" "}
            <span className="font-[500] text-primary3">
              {minutes < 10 ? "0" : ""}
              {minutes}:{seconds < 10 ? "0" : ""}
              {seconds}
            </span>
          </p>
        )}

        <button
          className={`font-[500] capitalize transition ${
            time > 0 ? "text-secondary5" : ""
          }`}
          onClick={() => {
            console.log("resend");

            setTime(120);
            startTimer();
          }}
          disabled={time > 0}
        >
          {t("resend-btn")}
        </button>
      </div>
    </div>
  );
};

export default Step2;
