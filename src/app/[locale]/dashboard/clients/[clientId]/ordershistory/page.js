"use client";
import Header from "@/components/dashboard/header/Header";
import React, { useEffect, useRef, useState } from "react";
import ClientSections from "@/components/dashboard/clients/ClientSections";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import OrdersWithoutHead from "@/components/dashboard/orders/OrdersWithoutHead";

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
            {lang === "ar" ? "سجل الطلبات " : "Orders History"}
            <div className="btn">
              <i className="fa-regular fa-plus"></i> اضافة طلب
            </div>
          </h1>
          <div className="flex flex-col gap-[24px] flex-1 bg-white rounded-[24px_24px_0px_0px] py-[24px]  overflow-auto hideScroll">
            <p className="text-secondary2 text-[24px] font-[500] mx-[24px] ">
              العملاء
            </p>
            <OrdersWithoutHead />
          </div>
        </div>
      </div>
    </div>

  );
}

export default page;
