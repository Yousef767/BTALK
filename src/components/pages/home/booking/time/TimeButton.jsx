import React from "react";

const TimeButton = ({ data, clickHandler, current }) => {
  return (
    <button
      className={`lr py-[8px] px-[12px] h-[40px] flex items-center justify-center gap-[6px] rounded-[16px] border-[1px] border-primary3 transition-all text-primary1 ${
        current.time == data.time && current.dayTime == data.dayTime
          ? "bg-primary3"
          : ""
      } `}
      onClick={() => clickHandler(data)}
    >
      <span className=" font-[700] leading-[150%] ">{data.time}</span>{" "}
      <span className="font-[500] leading-[150%]">{data.dayTime}</span>
    </button>
  );
};

export default TimeButton;
