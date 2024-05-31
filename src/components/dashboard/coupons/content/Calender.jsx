"use client";
import { useLocale } from "next-intl";
import React, { useState } from "react";

const Calender = ({ value, setValue }) => {
  const [current, setCurrent] = useState(0);
  const lang = useLocale();

  const calcDays = (isoString) => {
    const date = new Date(isoString);
    const options = { weekday: "long" };
    return date.toLocaleDateString("en-US", options);
  };

  const generateDays = (specialDays) => {
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + 2);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const monthDaysArray = [];

    for (let month = currentMonth; month < currentMonth + 12; month++) {
      const daysInMonth = new Date(currentYear, month + 1, 0).getDate();
      const monthName = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
      }).format(new Date(currentYear, month, 1));

      const monthObject = {
        month: monthName,
        days: [],
      };

      for (let day = 1; day <= daysInMonth; day++) {
        //modified date to match kuwait time zone (add 2 hours manually)
        const modifiedDate = new Date(currentYear, month, day);
        modifiedDate.setHours(modifiedDate.getHours() + 4);
        const isoDate = new Date(modifiedDate).toISOString();

        monthObject.days.push({ day: isoDate, active: false });
      }
      if (specialDays.length > 0) {
        const newDays = monthObject.days.map((el) => {
          if (specialDays.includes(calcDays(el.day))) {
            return { ...el, active: true };
          } else {
            return el;
          }
        });

        monthDaysArray.push({ ...monthObject, days: newDays });
      } else {
        monthDaysArray.push(monthObject);
      }
    }

    return monthDaysArray;
  };
  const days = generateDays([]);

  return (
    <div className="p-[16px] text-center lr bg-white">
      <p className="flex items-center justify-between mb-[16px]">
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
            className={`${lang == "ar" && "rotate-180"}`}
          >
            <path
              d="M7.42516 17.225C7.26683 17.225 7.1085 17.1667 6.9835 17.0417C6.74183 16.8 6.74183 16.4 6.9835 16.1583L12.4168 10.725C12.8168 10.325 12.8168 9.67499 12.4168 9.27499L6.9835 3.84165C6.74183 3.59999 6.74183 3.19999 6.9835 2.95832C7.22516 2.71665 7.62516 2.71665 7.86683 2.95832L13.3002 8.39165C13.7252 8.81665 13.9668 9.39165 13.9668 9.99999C13.9668 10.6083 13.7335 11.1833 13.3002 11.6083L7.86683 17.0417C7.74183 17.1583 7.5835 17.225 7.42516 17.225Z"
              fill={`${current == 0 ? "#EAD9C6" : "#585158"}`}
            />
          </svg>
        </button>
        <span>{days[current].month}</span>
        <button
          disabled={current == days.length - 1}
          onClick={() => setCurrent((prev) => prev + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={`${lang == "ar" && "rotate-180"}`}
          >
            <path
              d="M12.4999 17.225C12.3416 17.225 12.1832 17.1667 12.0582 17.0417L6.6249 11.6083C5.74157 10.725 5.74157 9.27499 6.6249 8.39165L12.0582 2.95832C12.2999 2.71665 12.6999 2.71665 12.9416 2.95832C13.1832 3.19999 13.1832 3.59999 12.9416 3.84165L7.50824 9.27499C7.10824 9.67499 7.10824 10.325 7.50824 10.725L12.9416 16.1583C13.1832 16.4 13.1832 16.8 12.9416 17.0417C12.8166 17.1583 12.6582 17.225 12.4999 17.225Z"
              fill={`${current == days.length - 1 ? "#EAD9C6" : "#585158"}`}
            />
          </svg>
        </button>
      </p>
      <div className="grid grid-cols-7 mb-[8px]">
        {days[current].days.slice(0, 7).map((el, i) => (
          <span key={i} className="text-secondary4 font-[400]">
            {calcDays(el.day).slice(0, 2)}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-[4px] items-center ">
        {days[current].days.map((day) => (
          <button
            key={day.day}
            disabled={new Date() > new Date(day.day)}
            className={`disabled:text-secondary4 text-secondary1 transition-all w-[28px] h-[28px] pt-[4px] ${
              day.day.substring(0, 10) == value.substring(0, 10)
                ? "bg-primary3 text-white rounded-full "
                : ""
            }  `}
            onClick={() => setValue(day.day)}
          >
            {new Date(day.day).getDate()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calender;
