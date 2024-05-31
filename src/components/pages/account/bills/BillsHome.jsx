"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import AddButton from "./AddButton";
import ToPay from "./ToPay";
import Paid from "./Paid";
import Confirm from "../Confirm";
import Tostify from "@/components/ui/Tostify";
import { useTranslations } from "next-intl";

const initBills = [
  {
    id: "234uiiojioj3j",
    toPay: false,
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1711538339/thebtalk_images/Rectangle_1734_avhmxi.png",
    title: "عيادة الاسنان دكتور محمد العارف",
  },
  {
    id: "n2jb234234",
    toPay: true,
    number: "12345",
    date: " 5 ديسمبر 2023",
    isPaid: true,
    billType: "عيادة الاسنان ",
    price: "150",
  },

  {
    id: "23454321345",
    toPay: true,
    number: "55342",
    date: " 5 ديسمبر 2023",
    isPaid: false,
    billType: "استشارة تجميل",
    price: "350",
  },
];
const BillsHome = () => {
  const [bills, setBills] = useState(initBills);
  const [billtoDelete, setBilltoDelete] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [activeNotify, setActiveNotify] = useState(false);
  const t = useTranslations("bills");

  const deleteBillHandler = () => {
    //delter handler here
    const newBills = bills.filter((b) => b.id != billtoDelete);
    setBills(newBills);
    setConfirm(false);
    setActiveNotify(true);
  };

  return (
    <>
      <div className="px-[24px] py-[16px]">
        <AddButton translate={t} />
        <div className="mt-[24px] flex flex-col gap-[24px]">
          {bills.map((bill) => {
            return (
              <div key={bill.id}>
                {bill.toPay ? (
                  <ToPay data={bill} translate={t} />
                ) : (
                  <Paid
                    data={bill}
                    translate={t}
                    onDelete={() => {
                      setConfirm(true);
                      setBilltoDelete(bill.id);
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <AnimatePresence mode="wait">
        {confirm && (
          <Confirm
            title={t("delete-label")}
            deleteT={t}
            accept={deleteBillHandler}
            isDelete={true}
            reject={() => setConfirm(false)}
            btnsStyle="grid-cols-[2fr_1.05fr]"
          />
        )}
      </AnimatePresence>
      {/* //notifications  */}
      <Tostify
        type={"success"}
        message={t("deleted")}
        active={activeNotify}
        setClose={() => setActiveNotify(false)}
      />
    </>
  );
};

export default BillsHome;
