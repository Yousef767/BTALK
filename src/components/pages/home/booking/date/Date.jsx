"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useFormatter, useLocale } from "next-intl";
import DateCalculator from "./DateCalculator";
import DateName from "./DateName";
import MonthName from "./MonthName";

const DateComponent = ({ date, setDate }) => {
  const [dates, setDates] = useState([]);
  const [current, setCurrent] = useState(0);
  const lang = useLocale();
  const dateNow = new Date();

  const getTwoDaysOfWeekForYear = (day1, day2) => {
    const twoDaysOfWeek = [];
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentWeek = Math.floor(
      (currentDate - new Date(currentYear, 0, 1)) / (7 * 24 * 60 * 60 * 1000)
    );

    // Iterate over each week of the year starting from the current week
    for (let week = currentWeek; week < currentWeek + 52; week++) {
      const startDate = new Date(currentYear, 0, 1 + week * 7); // Start of the week
      const day1Index = daysOfWeek.indexOf(day1); // Index of day1 in daysOfWeek array
      const day2Index = daysOfWeek.indexOf(day2); // Index of day2 in daysOfWeek array

      const day1Date = new Date(startDate);
      day1Date.setDate(
        startDate.getDate() + ((day1Index - startDate.getDay() + 7) % 7)
      ); // Adjust day1 to correct day in week

      const day2Date = new Date(startDate);
      day2Date.setDate(
        startDate.getDate() + ((day2Index - startDate.getDay() + 7) % 7)
      ); // Adjust day2 to correct day in week

      // add 2 hours to match kuwait time zone
      const modifiedDay1 = new Date(day1Date);
      modifiedDay1.setHours(modifiedDay1.getHours() + 2);
      const modifiedDay2 = new Date(day2Date);
      modifiedDay2.setHours(modifiedDay2.getHours() + 2);

      twoDaysOfWeek.push([
        new Date(modifiedDay1).toISOString(),
        new Date(modifiedDay2).toISOString(),
      ]); // Push the pair of days to the array
    }

    //combine each month days
    const finalResult = [];
    for (let j = 0; j < twoDaysOfWeek.length; j += 2) {
      finalResult.push([...twoDaysOfWeek[j], ...twoDaysOfWeek[j + 1]]);
    }

    return finalResult;

    // return twoDaysOfWeek;
  };

  useEffect(() => {
    const days = getTwoDaysOfWeekForYear("Wednesday", "Friday");
    setDates(days);
  }, []);

  return (
    <div className="p-[24px] rounded-[24px] flex flex-col gap-[28px] bg-primary5">
      <p className="flex items-center justify-between">
        <button
          disabled={current == 0}
          onClick={() => setCurrent((prev) => prev - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={`${lang == "en" && "rotate-180"}`}
          >
            <path
              d="M7.42516 17.225C7.26683 17.225 7.1085 17.1667 6.9835 17.0417C6.74183 16.8 6.74183 16.4 6.9835 16.1583L12.4168 10.725C12.8168 10.325 12.8168 9.67499 12.4168 9.27499L6.9835 3.84165C6.74183 3.59999 6.74183 3.19999 6.9835 2.95832C7.22516 2.71665 7.62516 2.71665 7.86683 2.95832L13.3002 8.39165C13.7252 8.81665 13.9668 9.39165 13.9668 9.99999C13.9668 10.6083 13.7335 11.1833 13.3002 11.6083L7.86683 17.0417C7.74183 17.1583 7.5835 17.225 7.42516 17.225Z"
              fill={`${current == 0 ? "#EAD9C6" : "#585158"}`}
            />
          </svg>
        </button>
        <span>
          {dates[current] && <MonthName dateString={dates[current][0]} />}
        </span>
        <button
          disabled={current == dates.length - 1}
          onClick={() => setCurrent((prev) => prev + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={`${lang == "en" && "rotate-180"}`}
          >
            <path
              d="M12.4999 17.225C12.3416 17.225 12.1832 17.1667 12.0582 17.0417L6.6249 11.6083C5.74157 10.725 5.74157 9.27499 6.6249 8.39165L12.0582 2.95832C12.2999 2.71665 12.6999 2.71665 12.9416 2.95832C13.1832 3.19999 13.1832 3.59999 12.9416 3.84165L7.50824 9.27499C7.10824 9.67499 7.10824 10.325 7.50824 10.725L12.9416 16.1583C13.1832 16.4 13.1832 16.8 12.9416 17.0417C12.8166 17.1583 12.6582 17.225 12.4999 17.225Z"
              fill={`${current == dates.length - 1 ? "#EAD9C6" : "#585158"}`}
            />
          </svg>
        </button>
      </p>
      <div className="w-full flex items-center justify-between">
        {dates[current]?.map((el, i) => (
          <button
            key={i}
            disabled={new Date(el) < dateNow}
            className={`p-[8px] w-[64px] h-[72px] flex flex-col justify-center items-center gap-[12px] rounded-[16px] border-[1px] text-primary1 border-primary3 transition-all ${
              new Date(el) > dateNow
                ? date == el
                  ? "bg-primary3"
                  : ""
                : "bg-secondary7 border-secondary7 text-primary4"
            } `}
            onClick={() => setDate(el)}
          >
            <span className=" text-[14px] font-[500] leading-[100%]">
              <DateName dateString={el} />
            </span>
            <span className="text-[19px] font-[700] leading-[100%]">
              {<DateCalculator date={el} />}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DateComponent;
