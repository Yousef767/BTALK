import React from "react";
import Service from "./Service";
const services = [
  {
    title_ar: "مواعيد خاصة لعملاء خارج الكويت تتناسب مع مدة اقامتهم",
    title_en:
      "Special appointments for clients outside Kuwait that suit the length of their stay.",
    price: "150",
  },
  {
    title_ar: "استلام المخطط",
    title_en: "Receive the chart",
    price: "150",
  },
  {
    title_ar: "تنفيذ مخطط الاسنان",
    title_en: "Implementation of dental plan",
    price: "150",
  },
  {
    title_ar: "ترشيح دكتور عمليات",
    title_en: "Recommend an operating doctor",
    price: "150",
  },
];
const ExtraServices = ({ extra, setExtra, t }) => {
  const extraHandler = (d) => {
    const isAdded = extra.find((el) => el == d);
    if (isAdded) {
      const newData = extra.filter((el) => el != d);
      setExtra(newData);
    } else {
      setExtra([...extra, d]);
    }
  };
  return (
    <div className="flex flex-col gap-[10px]">
      <h4 className="text-primary1 font-[500] leading-[150%]">
        {" "}
        {t("extra-title")}
      </h4>

      {services.map((el, i) => (
        <Service
          key={i}
          data={el}
          clickHandler={extraHandler}
          included={extra.find((ele) => ele == el)}
        />
      ))}
    </div>
  );
};

export default ExtraServices;
