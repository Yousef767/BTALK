"use client";
import React, { useContext } from "react";
import Header from "@/components/dashboard/header/Header";
import { useLocale } from "next-intl";
import ChartItems from "@/components/dashboard/home/charts/ChartItems";
import Orders from "@/components/dashboard/home/orders/Orders";


// import Chats from "@/components/dashboard/home/chats/Chats";
const Page = () => {
  const lang = useLocale();

  return (
      <div className="flex flex-col ">
        <Header title={lang == "en" ? "Home" : "الرئيسية"} />
        <ChartItems />
        <div className="flex h-[71vh] gap-[24px] items-stretch ">
          <Orders />
          {/* <Chats /> */}
        </div>
        {/* checking the git updates  */}
      </div>
  );
};

export default Page;
