import React, { useState } from "react";
import DateComponent from "./date/Date";
import Time from "./time/Time";

const ChooseTime = ({ t, date, setDate, time, setTime }) => {
  return (
    <div className="flex flex-col gap-[16px]">
      <p className="text-primary1 font-[500] leading-[150%]">
        {t("time-title")}
      </p>
      <DateComponent setDate={setDate} date={date} />
      <Time setTime={setTime} time={time} t={t} />
    </div>
  );
};

export default ChooseTime;
