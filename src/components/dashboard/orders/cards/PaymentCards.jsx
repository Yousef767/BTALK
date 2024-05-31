import React from "react";
import PaymentCard from "./PaymentCard";
const data = [
  {
    title_ar: "الدخل الشهرى",
    title_en: "Montly Income",
    number: 2800,
    image:
      `/media/money-recive.svg`,
  },
  {
    title_ar: "اجمالى الدخل ",
    title_en: "Total Income",
    number: 249939,
    image:
      "/media/flag-2.svg",
    },
    {
      title_ar: "فشل الدفع",
      title_en: "Paymant Failed",
      number: 400,
      image:
      "/media/close-circle.svg",
  },,
];
const PaymentCards = () => {
  return (
    <div className="flex items-center justify-between flex-wrap my-[24px]">
      {data.map((el, i) => (
        <PaymentCard key={i} data={el} />
      ))}
    </div>
  );
};

export default PaymentCards;
