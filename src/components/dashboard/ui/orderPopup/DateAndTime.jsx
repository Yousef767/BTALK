"use client";
import React, { useState } from "react";
import DateComponent from "../Date";
import { AnimatePresence, motion } from "framer-motion";

import Calender from "./Calender";

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

const DateAndTime = ({
  date,
  time,
  onChangeDate,
  onChangeTime,
  edit,
  setEdit,
}) => {
  const [editDate, setEditDate] = useState(false);
  const [editTime, setEditTime] = useState(false);
  return (
    <div className="flex gap-[16px] items-end relative">
      <div className="flex flex-col gap-[8px] flex-1">
        <p className="text-secondary3 font-[500] leading-[150%]">التاريخ</p>
        <button
          className="p-[16px] flex items-center justify-between bg-secondary7 rounded-[16px]"
          disabled={!edit}
          onClick={() => {
            setEditTime(false);
            setEditDate(true);
          }}
        >
          <span className="text-secondary1 font-[500] pt-[3px]">
            <DateComponent date={date} />
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z"
              fill="#D3D3D9"
            />
            <path
              d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z"
              fill="#979797"
            />
            <path
              d="M8.5 14.5C8.37 14.5 8.24 14.47 8.12 14.42C7.99 14.37 7.89 14.3 7.79 14.21C7.61 14.02 7.5 13.77 7.5 13.5C7.5 13.37 7.53 13.24 7.58 13.12C7.63 13 7.7 12.89 7.79 12.79C7.89 12.7 7.99 12.63 8.12 12.58C8.48 12.43 8.93 12.51 9.21 12.79C9.39 12.98 9.5 13.24 9.5 13.5C9.5 13.56 9.49 13.63 9.48 13.7C9.47 13.76 9.45 13.82 9.42 13.88C9.4 13.94 9.37 14 9.33 14.06C9.3 14.11 9.25 14.16 9.21 14.21C9.02 14.39 8.76 14.5 8.5 14.5Z"
              fill="#979797"
            />
            <path
              d="M12 14.5C11.87 14.5 11.74 14.47 11.62 14.42C11.49 14.37 11.39 14.3 11.29 14.21C11.11 14.02 11 13.77 11 13.5C11 13.37 11.03 13.24 11.08 13.12C11.13 13 11.2 12.89 11.29 12.79C11.39 12.7 11.49 12.63 11.62 12.58C11.98 12.42 12.43 12.51 12.71 12.79C12.89 12.98 13 13.24 13 13.5C13 13.56 12.99 13.63 12.98 13.7C12.97 13.76 12.95 13.82 12.92 13.88C12.9 13.94 12.87 14 12.83 14.06C12.8 14.11 12.75 14.16 12.71 14.21C12.52 14.39 12.26 14.5 12 14.5Z"
              fill="#979797"
            />
            <path
              d="M15.5 14.5C15.37 14.5 15.24 14.47 15.12 14.42C14.99 14.37 14.89 14.3 14.79 14.21C14.75 14.16 14.71 14.11 14.67 14.06C14.63 14 14.6 13.94 14.58 13.88C14.55 13.82 14.53 13.76 14.52 13.7C14.51 13.63 14.5 13.56 14.5 13.5C14.5 13.24 14.61 12.98 14.79 12.79C14.89 12.7 14.99 12.63 15.12 12.58C15.49 12.42 15.93 12.51 16.21 12.79C16.39 12.98 16.5 13.24 16.5 13.5C16.5 13.56 16.49 13.63 16.48 13.7C16.47 13.76 16.45 13.82 16.42 13.88C16.4 13.94 16.37 14 16.33 14.06C16.3 14.11 16.25 14.16 16.21 14.21C16.02 14.39 15.76 14.5 15.5 14.5Z"
              fill="#979797"
            />
            <path
              d="M8.5 18C8.37 18 8.24 17.97 8.12 17.92C8 17.87 7.89 17.8 7.79 17.71C7.61 17.52 7.5 17.26 7.5 17C7.5 16.87 7.53 16.74 7.58 16.62C7.63 16.49 7.7 16.38 7.79 16.29C8.16 15.92 8.84 15.92 9.21 16.29C9.39 16.48 9.5 16.74 9.5 17C9.5 17.26 9.39 17.52 9.21 17.71C9.02 17.89 8.76 18 8.5 18Z"
              fill="#979797"
            />
            <path
              d="M12 18C11.74 18 11.48 17.89 11.29 17.71C11.11 17.52 11 17.26 11 17C11 16.87 11.03 16.74 11.08 16.62C11.13 16.49 11.2 16.38 11.29 16.29C11.66 15.92 12.34 15.92 12.71 16.29C12.8 16.38 12.87 16.49 12.92 16.62C12.97 16.74 13 16.87 13 17C13 17.26 12.89 17.52 12.71 17.71C12.52 17.89 12.26 18 12 18Z"
              fill="#979797"
            />
            <path
              d="M15.5 18C15.24 18 14.98 17.89 14.79 17.71C14.7 17.62 14.63 17.51 14.58 17.38C14.53 17.26 14.5 17.13 14.5 17C14.5 16.87 14.53 16.74 14.58 16.62C14.63 16.49 14.7 16.38 14.79 16.29C15.02 16.06 15.37 15.95 15.69 16.02C15.76 16.03 15.82 16.05 15.88 16.08C15.94 16.1 16 16.13 16.06 16.17C16.11 16.2 16.16 16.25 16.21 16.29C16.39 16.48 16.5 16.74 16.5 17C16.5 17.26 16.39 17.52 16.21 17.71C16.02 17.89 15.76 18 15.5 18Z"
              fill="#979797"
            />
            <path
              d="M20.5 9.83997H3.5C3.09 9.83997 2.75 9.49997 2.75 9.08997C2.75 8.67997 3.09 8.33997 3.5 8.33997H20.5C20.91 8.33997 21.25 8.67997 21.25 9.08997C21.25 9.49997 20.91 9.83997 20.5 9.83997Z"
              fill="#979797"
            />
            <path
              d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V17C21.75 20.65 19.65 22.75 16 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z"
              fill="#979797"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-[8px] flex-1">
        <p className="text-secondary3 font-[500] leading-[150%]">الوقت</p>
        <button
          className="p-[16px] flex items-center justify-between bg-secondary7 rounded-[16px]"
          disabled={!edit}
          onClick={() => {
            setEditDate(false);
            setEditTime(true);
          }}
        >
          <span className="text-secondary1 font-[500] pt-[3px]">
            {time.time}
            {time.dayTime}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11.9995 16.8C11.2995 16.8 10.5995 16.53 10.0695 16L3.54953 9.48001C3.25953 9.19001 3.25953 8.71001 3.54953 8.42001C3.83953 8.13001 4.31953 8.13001 4.60953 8.42001L11.1295 14.94C11.6095 15.42 12.3895 15.42 12.8695 14.94L19.3895 8.42001C19.6795 8.13001 20.1595 8.13001 20.4495 8.42001C20.7395 8.71001 20.7395 9.19001 20.4495 9.48001L13.9295 16C13.3995 16.53 12.6995 16.8 11.9995 16.8Z"
              fill="#D3D3D9"
            />
          </svg>
        </button>
      </div>
      <button
        className={`py-[8px] px-[16px] min-w-[110px] h-[56px] flex items-center justify-center gap-[8px] rounded-[16px] transition-all text-white font-[700] leading-[150%] ${
          edit ? "bg-primary3" : "bg-primary1"
        }`}
        onClick={() => setEdit(!edit)}
      >
        {!edit && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H11C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 12.59 21.59 12.25 22 12.25C22.41 12.25 22.75 12.59 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75Z"
              fill="white"
            />
            <path
              d="M8.50032 17.69C7.89032 17.69 7.33032 17.47 6.92032 17.07C6.43032 16.58 6.22032 15.87 6.33032 15.12L6.76032 12.11C6.84032 11.53 7.22032 10.78 7.63032 10.37L15.5103 2.49C17.5003 0.499998 19.5203 0.499998 21.5103 2.49C22.6003 3.58 23.0903 4.69 22.9903 5.8C22.9003 6.7 22.4203 7.58 21.5103 8.48L13.6303 16.36C13.2203 16.77 12.4703 17.15 11.8903 17.23L8.88032 17.66C8.75032 17.69 8.62032 17.69 8.50032 17.69ZM16.5703 3.55L8.69032 11.43C8.50032 11.62 8.28032 12.06 8.24032 12.32L7.81032 15.33C7.77032 15.62 7.83032 15.86 7.98032 16.01C8.13032 16.16 8.37032 16.22 8.66032 16.18L11.6703 15.75C11.9303 15.71 12.3803 15.49 12.5603 15.3L20.4403 7.42C21.0903 6.77 21.4303 6.19 21.4803 5.65C21.5403 5 21.2003 4.31 20.4403 3.54C18.8403 1.94 17.7403 2.39 16.5703 3.55Z"
              fill="white"
            />
            <path
              d="M19.8496 9.83003C19.7796 9.83003 19.7096 9.82003 19.6496 9.80003C17.0196 9.06003 14.9296 6.97003 14.1896 4.34003C14.0796 3.94003 14.3096 3.53003 14.7096 3.41003C15.1096 3.30003 15.5196 3.53003 15.6296 3.93003C16.2296 6.06003 17.9196 7.75003 20.0496 8.35003C20.4496 8.46003 20.6796 8.88003 20.5696 9.28003C20.4796 9.62003 20.1796 9.83003 19.8496 9.83003Z"
              fill="white"
            />
          </svg>
        )}

        <span className="pt-[4px]"> {edit ? "حفظ" : "تعديل "}</span>
      </button>
      <AnimatePresence mode="wait">
        {edit && editDate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-[-150px] left-0 bg-[rgba(0,0,0,0)] w-full h-[500px]"
          >
            <span
              className="inline-block w-full h-full "
              onClick={() => {
                setEditDate(false);
              }}
            ></span>
            <div className="absolute bg-white w-[264px] h-[281px] rounded-[13px] shadow-2xl top-[15%] right-[16px]">
              <Calender
                value={date}
                setValue={(e) => {
                  onChangeDate(e);
                  setEditDate(false);
                }}
              />
            </div>
          </motion.div>
        )}
        {edit && editTime && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-[-150px] left-0 bg-[rgba(0,0,0,0)] w-full  h-[500px]"
          >
            <span
              className=" inline-block w-full h-full "
              onClick={() => {
                setEditTime(false);
              }}
            ></span>
            <div className="absolute bg-white w-[264px] h-[289px] p-[24px] rounded-[24px] shadow-2xl top-[13%] left-[20%] flex flex-col  gap-[12px] overflow-auto hideScroll">
              {" "}
              {morningTimes.map((el) => (
                <button
                  key={el.time}
                  className="flex justify-between items-center py-[8px] px-[16px] transition-all hover:bg-secondary7"
                  onClick={() => {
                    onChangeTime(el);
                    setEditTime(false);
                  }}
                >
                  <span className="text-secondary1 font-[500]">{el.time}</span>
                  <span className="text-secondary3 font-[400]">صباحا</span>
                </button>
              ))}
              {afternoonTimes.map((el) => (
                <button
                  key={el.time}
                  className="flex justify-between items-center py-[8px] px-[16px] transition-all hover:bg-secondary7"
                  onClick={() => {
                    onChangeTime(el);
                    setEditTime(false);
                  }}
                >
                  <span className="text-secondary1 font-[500]">{el.time}</span>
                  <span className="text-secondary3 font-[400]">طهرا</span>
                </button>
              ))}
              {eveningTimes.map((el) => (
                <button
                  key={el.time}
                  className="flex justify-between items-center py-[8px] px-[16px] transition-all hover:bg-secondary7"
                  onClick={() => {
                    onChangeTime(el);
                    setEditTime(false);
                  }}
                >
                  <span className="text-secondary1 font-[500]">{el.time}</span>
                  <span className="text-secondary3 font-[400]">مساءا</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DateAndTime;
