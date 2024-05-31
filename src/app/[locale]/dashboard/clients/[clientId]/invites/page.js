"use client";
import Header from "@/components/dashboard/header/Header";
import React, { useEffect, useRef, useState } from "react";
import ClientSections from "@/components/dashboard/clients/ClientSections";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import OrdersWithoutHead from "@/components/dashboard/orders/OrdersWithoutHead";
import Invites from "@/components/dashboard/orders/Invites";
function page({ params }) {
  const [lang, setLang] = useState(document.querySelector("html").lang);

  useEffect(() => {
    let htmllang = document.querySelector("html").lang;
    setLang(htmllang);
  }, [lang]);

  useEffect(() => {
    let navLst = window.location.href.split("/");
    let links = document.querySelectorAll(".secLinks a");
    links.forEach((e) => {
      e.getAttribute("label") === navLst[7]
        ? e.classList.add("active")
        : e.classList.remove("active");
    });
    if (navLst[7] === undefined) {
      links[0].classList.add("active");
    }
  }, []);

  return (
      <div className="flex flex-col h-[100vh]">
        <Header title={"العملاء"} crumb={"ايلا ياسر"} />
        <div className="setcNav">
          <ClientSections ClientId={params.clientId} />
          <div className="clientContainer">
            <h1 className="hd1">
              <h1>
                {lang === "ar" ? " الدعوات  " : " Invites "}{" "}
                <span className="greenColor">
                  {lang === "ar" ? " ( 15 نقطة)  " : " ( 15 Points) "}
                </span>{" "}
              </h1>
              <div className="btn">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9697 23.73H7.96973C4.54973 23.73 3.21973 22.4 3.21973 18.98V10.98C3.21973 10.57 3.55973 10.23 3.96973 10.23H19.9697C20.3797 10.23 20.7197 10.57 20.7197 10.98V18.98C20.7197 22.4 19.3897 23.73 15.9697 23.73ZM4.71973 11.73V18.98C4.71973 21.56 5.38973 22.23 7.96973 22.23H15.9697C18.5497 22.23 19.2197 21.56 19.2197 18.98V11.73H4.71973Z"
                    fill="white"
                  />
                  <path
                    d="M19.5 11.73H4.5C2.75 11.73 1.75 10.73 1.75 8.97998V7.97998C1.75 6.22998 2.75 5.22998 4.5 5.22998H19.5C21.2 5.22998 22.25 6.27998 22.25 7.97998V8.97998C22.25 10.68 21.2 11.73 19.5 11.73ZM4.5 6.72998C3.59 6.72998 3.25 7.06998 3.25 7.97998V8.97998C3.25 9.88998 3.59 10.23 4.5 10.23H19.5C20.38 10.23 20.75 9.85998 20.75 8.97998V7.97998C20.75 7.09998 20.38 6.72998 19.5 6.72998H4.5Z"
                    fill="white"
                  />
                  <path
                    d="M11.6401 6.72986H6.12009C5.91009 6.72986 5.71009 6.63986 5.57009 6.48986C4.96009 5.81986 4.98009 4.78986 5.62009 4.14986L7.04009 2.72986C7.70009 2.06986 8.79009 2.06986 9.45009 2.72986L12.1701 5.44986C12.3801 5.65986 12.4501 5.98986 12.3301 6.26986C12.2201 6.54986 11.9501 6.72986 11.6401 6.72986ZM6.67009 5.22986H9.84009L8.39009 3.78986C8.31009 3.70986 8.18009 3.70986 8.10009 3.78986L6.68009 5.20986C6.68009 5.21986 6.67009 5.21986 6.67009 5.22986Z"
                    fill="white"
                  />
                  <path
                    d="M17.8701 6.72986H12.3501C12.0501 6.72986 11.7701 6.54986 11.6601 6.26986C11.5401 5.98986 11.6101 5.66986 11.8201 5.44986L14.5401 2.72986C15.2001 2.06986 16.2901 2.06986 16.9501 2.72986L18.3701 4.14986C19.0101 4.78986 19.0401 5.81986 18.4201 6.48986C18.2801 6.63986 18.0801 6.72986 17.8701 6.72986ZM14.1701 5.22986H17.3401C17.3301 5.21986 17.3301 5.21986 17.3201 5.20986L15.9001 3.78986C15.8201 3.70986 15.6901 3.70986 15.6101 3.78986L14.1701 5.22986Z"
                    fill="white"
                  />
                  <path
                    d="M9.94043 17.88C9.66043 17.88 9.37043 17.81 9.11043 17.67C8.54043 17.36 8.19043 16.77 8.19043 16.13V10.98C8.19043 10.57 8.53043 10.23 8.94043 10.23H14.9804C15.3904 10.23 15.7304 10.57 15.7304 10.98V16.11C15.7304 16.76 15.3804 17.35 14.8104 17.65C14.2404 17.96 13.5504 17.92 13.0104 17.56L12.1204 16.96C12.0404 16.9 11.9304 16.9 11.8404 16.96L10.9004 17.58C10.6104 17.78 10.2704 17.88 9.94043 17.88ZM9.69043 11.73V16.12C9.69043 16.25 9.77043 16.31 9.82043 16.34C9.87043 16.37 9.97043 16.4 10.0804 16.33L11.0204 15.71C11.6104 15.32 12.3704 15.32 12.9504 15.71L13.8404 16.31C13.9504 16.38 14.0504 16.35 14.1004 16.32C14.1504 16.29 14.2304 16.23 14.2304 16.1V11.72H9.69043V11.73Z"
                    fill="white"
                  />
                </svg>
                تبديل النقاط
              </div>
            </h1>
            <div className="flex flex-col gap-[24px] flex-1 bg-white rounded-[24px_24px_0px_0px] py-[24px]  overflow-auto hideScroll">
              <p className="text-secondary2 text-[24px] font-[500] mx-[24px] ">
                العملاء
              </p>
              <Invites />
            </div>
          </div>
        </div>
      </div>
  );
}

export default page;
