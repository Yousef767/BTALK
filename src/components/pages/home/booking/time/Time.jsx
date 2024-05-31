"use client";
import React, { useState } from "react";
import TimeButton from "./TimeButton";

const eveningTimes = [
  { time: "06:00", available: true, dayTime: "pm" },
  { time: "06:30", available: true, dayTime: "pm" },
  { time: "07:00", available: true, dayTime: "pm" },
  { time: "07:30", available: true, dayTime: "pm" },
  { time: "08:00", available: true, dayTime: "pm" },
  { time: "08:30", available: true, dayTime: "pm" },
];
const afternoonTimes = [
  { time: "12:00", available: true, dayTime: "pm" },
  { time: "12:30", available: true, dayTime: "pm" },
  { time: "01:00", available: true, dayTime: "pm" },
  { time: "01:30", available: true, dayTime: "pm" },
  { time: "02:00", available: true, dayTime: "pm" },
  { time: "02:30", available: true, dayTime: "pm" },
];
const morningTimes = [
  { time: "09:00", available: true, dayTime: "am" },
  { time: "09:30", available: true, dayTime: "am" },
  { time: "10:00", available: true, dayTime: "am" },
  { time: "10:30", available: true, dayTime: "am" },
  { time: "11:00", available: true, dayTime: "am" },
  { time: "11:30", available: true, dayTime: "am" },
];
const Time = ({ time, setTime, t }) => {
  const [active, setActive] = useState("evening");

  return (
    <div>
      <ul className="grid grid-cols-3">
        <li
          className={`p-[8px] h-[40px] flex items-center justify-center rounded-[16px_24px_0px_0px] transition-all ${
            active == "morning" ? "bg-primary5" : "bg-secondary7"
          }`}
          onClick={() => setActive("morning")}
        >
          {t("morning")}
        </li>
        <li
          className={`p-[8px] h-[40px] flex items-center justify-center  rounded-[16px_16px_0px_0px] transition-all ${
            active == "afternoon" ? "bg-primary5" : "bg-secondary7"
          }`}
          onClick={() => setActive("afternoon")}
        >
          {t("afternoon")}
        </li>
        <li
          className={`p-[8px] h-[40px] flex items-center justify-center  rounded-[24px_16px_0px_0px] transition-all ${
            active == "evening" ? "bg-primary5" : "bg-secondary7"
          }`}
          onClick={() => setActive("evening")}
        >
          {t("evening")}
        </li>
      </ul>
      <div className="p-[24px] pt-[16px] bg-primary5 rounded-[0px_0px_24px_24px]">
        {active == "evening" && (
          <div className="grid grid-cols-3 gap-x-[8px] gap-y-[16px] lr">
            {eveningTimes.map((el, i) => (
              <TimeButton
                key={i}
                data={el}
                clickHandler={(e) => setTime(e)}
                current={time}
              />
            ))}
          </div>
        )}
        {active == "afternoon" && (
          <div className="grid grid-cols-3 gap-x-[8px] gap-y-[16px] lr ">
            {afternoonTimes.map((el, i) => (
              <TimeButton
                key={i}
                data={el}
                clickHandler={(e) => setTime(e)}
                current={time}
              />
            ))}
          </div>
        )}
        {active == "morning" && (
          <div className="grid grid-cols-3 gap-x-[8px] gap-y-[16px] lr">
            {morningTimes.map((el, i) => (
              <TimeButton
                key={i}
                data={el}
                clickHandler={(e) => setTime(e)}
                current={time}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Time;
