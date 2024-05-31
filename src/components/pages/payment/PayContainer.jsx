"use client";
import React, { useEffect, useState } from "react";
import Details from "./Details";
import PayWay from "./PayWay";
import { AnimatePresence, motion } from "framer-motion";

import BottomActionsContaienr from "@/components/ui/BottomActionsContaienr";
import Button from "@/components/ui/Button";
import Fetching from "@/components/ui/Fetching";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const initPackagesData = [
  {
    id: "123",
    price: 150,
    promo: false,
  },

  {
    id: "12365",
    price: 150,
    promo: false,
  },
  {
    id: "23454321345",
    price: 350,
    promo: false,
  },
];

const initCard = {
  cardNumber: "",
  cardDate: "",
  cvv: "",
  name: "",
};
const PayContainer = () => {
  const [packagesData, setPackagesData] = useState(initPackagesData);
  const [packgData, setPackgData] = useState(false);
  const [payWay, setPayWay] = useState("key");
  const [cardData, setCardData] = useState(initCard);
  const [paying, setPaying] = useState(false);
  const [paied, setPaied] = useState(false);
  const [coup, setCoup] = useState("");
  const router = useRouter();
  const query = useSearchParams();
  const packagId = query.get("package");
  const isCoupoun = query.get("coup");
  const lang = useLocale();
  const t = useTranslations("payment");

  //fetching packge data
  useEffect(() => {
    const data = packagesData.find((el) => el.id == packagId);
    if (isCoupoun) {
      //fetching coupoun data
      if (isCoupoun == "ali50") {
        setPackgData({ ...data, promo: { discount: 50, id: isCoupoun } });
        setCoup(isCoupoun);
      }
      if (isCoupoun == "ali20") {
        setPackgData({ ...data, promo: { discount: 20, id: isCoupoun } });
        setCoup(isCoupoun);
      }
    } else {
      setPackgData(data);
    }
  }, [packagesData]);

  const coupounHandler = (coup) => {
    //chcking is the coup valid and return with the coup data if found
    if (coup == "ali50") {
      setPackgData({ ...packgData, promo: { discount: 50, id: coup } });
    }
    if (coup == "ali20") {
      setPackgData({ ...packgData, promo: { discount: 20, id: coup } });
    }
  };

  //change card number handler
  const changeCardNumberHandler = (e) => {
    setCardData({
      ...cardData,
      cardNumber: e,
    });
  };
  //change card date handler
  const handleDateChange = (e) => {
    setCardData({
      ...cardData,
      cardDate: e,
    });
  };
  //change cvv hander
  const handleCvvChange = (e) => {
    setCardData({
      ...cardData,
      cvv: e,
    });
  };
  //change name
  const handleNameChange = (e) => {
    setCardData({
      ...cardData,
      name: e.target.value,
    });
  };

  const payHandler = () => {
    setPaying(true);
    const removeCardSpaces = cardData.cardNumber.replace(/\s/g, "");
    //sending request to pay
    console.log({
      ...cardData,
      cardNumber: removeCardSpaces,
      packageInfo: packgData,
    });
    //after the response
    setPaying(false);
    setPaied(true);
  };
  return (
    <>
      {packgData ? (
        <section className="m-[24px] flex flex-col gap-[28px]">
          <Details
            data={packgData}
            coupounHandler={coupounHandler}
            coup={coup}
            setCoup={(e) => setCoup(e)}
            translate={t}
          />
          <PayWay
            payWay={payWay}
            setPayWay={(e) => setPayWay(e)}
            cardData={cardData}
            changeCardNumberHandler={changeCardNumberHandler}
            handleDateChange={handleDateChange}
            handleCvvChange={handleCvvChange}
            changeCardNameHandler={handleNameChange}
            translate={t}
          />
          <BottomActionsContaienr>
            <button
              onClick={payHandler}
              className="h-[56px] w-full py-[8px] px-[16px] flex items-center justify-center rounded-[16px] bg-primary1 text-white font-[700] leading-[150%] disabled:bg-secondary4"
              disabled={
                cardData.cardNumber.length < 19 ||
                cardData.cardDate.length < 5 ||
                cardData.cvv.length < 3 ||
                cardData.name.length < 1
              }
            >
              {t("confirm-payment")}
            </button>
          </BottomActionsContaienr>
        </section>
      ) : (
        <Fetching />
      )}

      <AnimatePresence mode="wait">
        {paied && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed z-[10000] bottom-0 left-0 bg-[rgba(0,0,0,.7)] w-full h-[100vh] flex justify-center  items-end"
          >
            <div className="flex flex-col gap-[16px] text-center bg-white w-full p-[24px] pt-[48px] rounded-[40px_40px_0px_0px] ">
              <h5 className="h5 text-primary1">{t("payment-success")}</h5>
              <p className="text-secondary3 font-[500] leading-[150%]">
                {t("contact-soon")}
              </p>
              <Button
                link={false}
                text={t("okay")}
                clickHandler={() => {
                  isCoupoun
                    ? router.back()
                    : router.push(`/${lang}/visit/${packgData.id}`);
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PayContainer;
