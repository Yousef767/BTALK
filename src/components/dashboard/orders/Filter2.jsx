"use client";
import React, { useState, useEffect, useRef } from "react";
import FilterWithPackage from "./FilterWithPackage";
import { AnimatePresence } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocale } from "next-intl";
const Filter2 = ({
  searchValue,
  setSearchValue,
  cleckHandler,
  setStatus,
  setDateFrom,
  setDateTo,
}) => {
  const [filterWithPackage, setFilterWithPackage] = useState(false);
  const [filterWithStatus, setFilterWithStatus] = useState(0);
  const [filterWithDate, setFilterWithDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
  };
  const handleSearchWithStatus = (e) => {
    setFilterWithStatus(e.target.value);
  };
  const lang = useLocale();
  useEffect(() => {
    setStatus(filterWithStatus);
  }, [filterWithStatus]);
  const statusRef = useRef();
  const dateRef = useRef();
  const toggleSelect = () => {
    dateRef.current.classList.remove("show");
    statusRef.current.classList.toggle("show");
  };
  const toggleDate = () => {
    statusRef.current.classList.remove("show");
    dateRef.current.classList.toggle("show");
  };
  return (
    <div className="flex justify-between items-center px-[16px]">
      <div className=" relative h-[56px] w100-40  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          className="absolute top-0 h-full right-[16px] pointer-events-none"
        >
          <path
            d="M15.3334 29.7713C7.80008 29.7713 1.66675 23.6379 1.66675 16.1046C1.66675 8.57126 7.80008 2.43793 15.3334 2.43793C22.8667 2.43793 29.0001 8.57126 29.0001 16.1046C29.0001 23.6379 22.8667 29.7713 15.3334 29.7713ZM15.3334 4.43793C8.89341 4.43793 3.66675 9.67793 3.66675 16.1046C3.66675 22.5313 8.89341 27.7713 15.3334 27.7713C21.7734 27.7713 27.0001 22.5313 27.0001 16.1046C27.0001 9.67793 21.7734 4.43793 15.3334 4.43793Z"
            fill="#D3D3D9"
          />
          <path
            d="M29.3333 31.1046C29.0799 31.1046 28.8266 31.0112 28.6266 30.8112L25.9599 28.1446C25.5733 27.7579 25.5733 27.1179 25.9599 26.7312C26.3466 26.3446 26.9866 26.3446 27.3733 26.7312L30.0399 29.3979C30.4266 29.7846 30.4266 30.4246 30.0399 30.8112C29.8399 31.0112 29.5866 31.1046 29.3333 31.1046Z"
            fill="#D3D3D9"
          />
        </svg>
        <input
          type="text"
          className={`outline-none w-full h-[56px] rounded-[16px] border-[1px] border-secondary6 leading-[56px] pr-[56px] pl-[128px] placeholder:text-secondary3 placeholder:text-[16px] placeholder:font-[400]
          text-primary1 text-[19px] font-[500]  focus:border-primary3 transition-all ${
            searchValue.length > 0
              ? "bg-white border-primary3 "
              : " bg-secondary8 "
          }`}
          placeholder="ابحث برقم الطلب  .............."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className={`w-[120px] h-full flex items-center justify-center disabled:text-secondary4 font-[700] absolute top-0 left-0 disabled:bg-transparent bg-primary3 text-white rounded-[16px]`}
          disabled={searchValue.length < 1}
          onClick={cleckHandler}
        >
          ابحث
        </button>
      </div>
      <div className="relative">
        <AnimatePresence mode="wait">
          {filterWithPackage && (
            <FilterWithPackage onClose={() => setFilterWithPackage(false)} />
          )}
        </AnimatePresence>
      </div>
      <div className="select relative">
        <button
          onClick={() => {
            toggleSelect();
          }}
        >
          {lang === "ar" ? "الحالة" : "Status"}
        </button>
        <div className="list" ref={statusRef}>
          <div className="top">
            <h3>{lang === "ar" ? "الحالة" : "Status"}</h3>
            <button
              className="reset"
              onClick={() => {
                setStatus("0");
              }}
            >
              <i class="fa-solid fa-rotate-right"></i>
              {lang === "ar" ? "اعادة تعيين" : "Reset"}
            </button>
          </div>
          <div className="sts">
            <span
              onClick={() => {
                setStatus("active");
              }}
              className="py-[8px] px-[24px] rounded-[16px] bg-[#F4FDF8] text-green font-[500] h-[40px] inline-block"
            >
              تم التأكيد
            </span>
            <span
              onClick={() => {
                setStatus("waiting");
              }}
              className="py-[8px] px-[24px] rounded-[16px] bg-red2 text-primary3 font-[500] h-[40px] inline-block"
            >
              فشل الدفع
            </span>
          </div>
        </div>
        <i className="fa-regular fa-angle-down"></i>
      </div>
      <div className="select" id="date">
        <button
          className="pr40"
          onClick={() => {
            toggleDate();
          }}
        >
          {lang === "ar" ? "التاريخ" : "Date"}
        </button>
        <div
          className={lang === "ar" ? "list left-0" : "list right-0"}
          ref={dateRef}
        >
          <div className="top">
            <h3>{lang === "ar" ? "التاريخ" : "Date"}</h3>
            <button
              className="reset"
              onClick={() => {
                setDateFrom("");
                setDateTo("");
              }}
            >
              <i class="fa-solid fa-rotate-right"></i>
              {lang === "ar" ? "اعادة تعيين" : "Reset"}
            </button>
          </div>
          <div className="sts gap10">
            <div className="st">
              <span className={lang === "ar" ? "text-right" : "text-left"}>
                {lang === "ar" ? "من" : "From"}
              </span>
              <div className="select">
                <input
                  type="datetime-local"
                  name=""
                  id=""
                  onChange={(e) => {
                    setDateFrom(e.target.value);
                  }}
                />
                <i class="fa-regular fa-calendar-days"></i>
              </div>
            </div>
            <div className="st">
              <span className={lang === "ar" ? "text-right" : "text-left"}>
                {lang === "ar" ? "الي" : "To"}
              </span>
              <div className="select">
                <input
                  type="datetime-local"
                  name=""
                  id=""
                  onChange={(e) => {
                    setDateTo(e.target.value);
                  }}
                />
                <i class="fa-regular fa-calendar-days"></i>
              </div>
            </div>
          </div>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.75 3.56V2C16.75 1.59 16.41 1.25 16 1.25C15.59 1.25 15.25 1.59 15.25 2V3.5H8.74999V2C8.74999 1.59 8.40999 1.25 7.99999 1.25C7.58999 1.25 7.24999 1.59 7.24999 2V3.56C4.54999 3.81 3.23999 5.42 3.03999 7.81C3.01999 8.1 3.25999 8.34 3.53999 8.34H20.46C20.75 8.34 20.99 8.09 20.96 7.81C20.76 5.42 19.45 3.81 16.75 3.56Z"
            fill="#AFAFAF"
          />
          <path
            d="M20 9.83984H4C3.45 9.83984 3 10.2898 3 10.8398V16.9998C3 19.9998 4.5 21.9998 8 21.9998H16C19.5 21.9998 21 19.9998 21 16.9998V10.8398C21 10.2898 20.55 9.83984 20 9.83984ZM9.21 18.2098C9.11 18.2998 9 18.3698 8.88 18.4198C8.76 18.4698 8.63 18.4998 8.5 18.4998C8.37 18.4998 8.24 18.4698 8.12 18.4198C8 18.3698 7.89 18.2998 7.79 18.2098C7.61 18.0198 7.5 17.7598 7.5 17.4998C7.5 17.2398 7.61 16.9798 7.79 16.7898C7.89 16.6998 8 16.6298 8.12 16.5798C8.36 16.4798 8.64 16.4798 8.88 16.5798C9 16.6298 9.11 16.6998 9.21 16.7898C9.39 16.9798 9.5 17.2398 9.5 17.4998C9.5 17.7598 9.39 18.0198 9.21 18.2098ZM9.42 14.3798C9.37 14.4998 9.3 14.6098 9.21 14.7098C9.11 14.7998 9 14.8698 8.88 14.9198C8.76 14.9698 8.63 14.9998 8.5 14.9998C8.37 14.9998 8.24 14.9698 8.12 14.9198C8 14.8698 7.89 14.7998 7.79 14.7098C7.7 14.6098 7.63 14.4998 7.58 14.3798C7.53 14.2598 7.5 14.1298 7.5 13.9998C7.5 13.8698 7.53 13.7398 7.58 13.6198C7.63 13.4998 7.7 13.3898 7.79 13.2898C7.89 13.1998 8 13.1298 8.12 13.0798C8.36 12.9798 8.64 12.9798 8.88 13.0798C9 13.1298 9.11 13.1998 9.21 13.2898C9.3 13.3898 9.37 13.4998 9.42 13.6198C9.47 13.7398 9.5 13.8698 9.5 13.9998C9.5 14.1298 9.47 14.2598 9.42 14.3798ZM12.71 14.7098C12.61 14.7998 12.5 14.8698 12.38 14.9198C12.26 14.9698 12.13 14.9998 12 14.9998C11.87 14.9998 11.74 14.9698 11.62 14.9198C11.5 14.8698 11.39 14.7998 11.29 14.7098C11.11 14.5198 11 14.2598 11 13.9998C11 13.7398 11.11 13.4798 11.29 13.2898C11.39 13.1998 11.5 13.1298 11.62 13.0798C11.86 12.9698 12.14 12.9698 12.38 13.0798C12.5 13.1298 12.61 13.1998 12.71 13.2898C12.89 13.4798 13 13.7398 13 13.9998C13 14.2598 12.89 14.5198 12.71 14.7098Z"
            fill="#AFAFAF"
          />
        </svg>
        <i className="fa-regular fa-angle-down"></i>
      </div>
    </div>
  );
};

export default Filter2;
