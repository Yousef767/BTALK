import React from "react";
import Card from "./Card";
const data = [
  {
    title_ar: "الطلبات",
    title_en: "Orders",
    number: 626,
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713387977/thebtalk_images/shopping-cart_gldykp.svg",
  },
  {
    title_ar: "فى الانتظار",
    title_en: "Wating",
    number: 16,
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713387993/thebtalk_images/clock_glth9u.svg",
  },
  {
    title_ar: "منتهية",
    title_en: "Done",
    number: 500,
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713388047/thebtalk_images/minus-square_sx23r2.svg",
  },
  {
    title_ar: "الخطوة الاولى",
    title_en: "First step",
    number: 60,
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713388032/thebtalk_images/flag-2_pnzsdk.svg",
  },
  {
    title_ar: "الخطوة الاخيرة",
    title_en: "Last step",
    number: 80,
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713388011/thebtalk_images/tick-square_axpfdl.svg",
  },
];
const Cards = () => {
  return (
    <div className="flex items-center justify-between flex-wrap my-[24px]">
      {data.map((el, i) => (
        <Card key={i} data={el} />
      ))}
    </div>
  );
};

export default Cards;
