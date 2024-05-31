import React from "react";
import ChartItem from "./ChartItem";

const chartsData = [
  {
    title_ar: "عدد الطلبات",
    title_en: "Orders number",
    number: 50,
    last_number: 45,
  },
  {
    title_ar: "زيارات اليوم",
    title_en: "Daily visits",
    number: 644,
    last_number: 544,
  },
  {
    title_ar: "عدد العملاء",
    title_en: "Clients number",
    number: 1500,
    last_number: 1550,
  },
  {
    title_ar: "الاشتراكات",
    title_en: "Subscriptions",
    number: 360,
    last_number: 310,
  },
];
const ChartItems = () => {
  return (
    <div className="flex items-center justify-between">
      {chartsData.map((el, i) => (
        <ChartItem key={i} data={el} />
      ))}
    </div>
  );
};

export default ChartItems;
