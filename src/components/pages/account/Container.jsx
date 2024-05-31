"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Welcome from "../home/Welcome";
import AccLink from "./AccLink";
import Confirm from "./Confirm";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import TimeFormat from "./bills/details/TimeFormat";

const Container = () => {
  const [confirm, setConfirm] = useState(false);
  const [logout, setLogout] = useState(false);
  const router = useRouter();
  const t = useTranslations("account");
  const lang = useLocale();

  const signoutHandler = () => {
    console.log("log out");
    //logout handler
    router.push(`/${lang}/login`);
  };
  useEffect(() => {
    if (logout) {
      signoutHandler();
    }
  }, [confirm]);
  const boxStyle = "flex flex-col gap-[16px] rounded-[16px] bg-white p-[8px]";
  return (
    <>
      <div className="px-[24px] translate-y-[-16px]">
        <Welcome profile={true} />
        <div className="  flex items-center justify-center gap-[8px] text-[14px] font-[400] mb-[33px]">
          <span className="text-black pt-[2px]">{t("end-date")}</span>
          <span className="bg-white rounded-[8px] p-[8px] text-primary1 pb-[6px] pt-[10px]">
            <TimeFormat date={"2024-09-11T12:57:43.631Z"} />
          </span>
        </div>
        <div className="flex flex-col gap-[24px]">
          <div className={`${boxStyle}`}>
            <AccLink
              href={`/${lang}/account/invitations`}
              img="https://res.cloudinary.com/freelancer3223/image/upload/v1711242261/thebtalk_images/share_ndvd0y.svg"
              title={t("invite-friends")}
              withArrow={false}
              imgStyle="bg-[#f4fdf8]"
              invite={true}
              t={t}
            />
            <AccLink
              href={`/${lang}/account/bills`}
              img="https://res.cloudinary.com/freelancer3223/image/upload/v1711241504/thebtalk_images/receipt-text_d2nzcf.svg"
              title={t("bills")}
              withArrow={true}
              imgStyle=""
            />
            <AccLink
              href={`/${lang}/account/settings`}
              img="https://res.cloudinary.com/freelancer3223/image/upload/v1711241561/thebtalk_images/personalcard_y34e44.svg"
              title={t("account-info")}
              withArrow={true}
              imgStyle=""
            />
          </div>
          {/* <div className={`${boxStyle}`}>
            <AccLink
              href={`/${lang}/account/chat`}
              img="https://res.cloudinary.com/freelancer3223/image/upload/v1711241580/thebtalk_images/messages-3_scq3yc.svg"
              title={t("chat")}
              withArrow={false}
              imgStyle=""
            />
          </div> */}
          <div className={`${boxStyle}`}>
            <AccLink
              href={`/${lang}/account/terms`}
              img="https://res.cloudinary.com/freelancer3223/image/upload/v1711241593/thebtalk_images/judge_ylsfcl.svg"
              title={t("conditions")}
              withArrow={false}
              imgStyle=""
            />
            <AccLink
              href={`/${lang}/account/about`}
              img="https://res.cloudinary.com/freelancer3223/image/upload/v1711241637/thebtalk_images/warning-2_vocra7.svg"
              title={t("about")}
              withArrow={false}
              imgStyle=""
            />

            <button
              onClick={() => setConfirm(true)}
              className="flex items-center justify-between"
            >
              <span className="flex items-center gap-[6px]">
                <span
                  className={`w-[40px] h-[40px] flex items-center justify-center rounded-[8px] bg-[#FDF4F4]`}
                >
                  <Image
                    src="https://res.cloudinary.com/freelancer3223/image/upload/v1711241677/thebtalk_images/logout_cqdnbw.svg"
                    width={24}
                    height={24}
                    priority
                    alt={t("logout")}
                  />
                </span>
                <span className="font-[500] leading-[150%] text-secondary2">
                  {t("logout")}
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {confirm && (
          <Confirm
            title={t("logout-message")}
            accept={() => {
              setConfirm(false);
              setLogout(true);
            }}
            isDelete={false}
            acceptText={"الخروج"}
            reject={() => setConfirm(false)}
            btnsStyle="grid-cols-2"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Container;
