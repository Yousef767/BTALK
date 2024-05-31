"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SharePopup from "./SharePopup";
import { AnimatePresence } from "framer-motion";
import Awardspopup from "./Awardspopup";
import { useTranslations } from "next-intl";

const initialAwards = [
  {
    title_ar: "تفاصيل الجائزة 1",
    title_en: "Award 1 details",
    points: 1,
  },
  {
    title_ar: "تفاصيل الجائزة 2",
    title_en: "Award 2 details",
    points: 2,
  },
  {
    title_ar: "تفاصيل الجائزة 3",
    title_en: "Award 3 details",
    points: 3,
  },
];
const Container = () => {
  const [share, setShare] = useState(false);
  const [awards, setAwards] = useState(false);
  const [awardsData, setAwardsData] = useState(initialAwards);
  const [invitationCopied, setInvitationCopied] = useState(false);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  const t = useTranslations("invitations");

  //copy invite url handler
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  useEffect(() => {
    const deleteMsg = setTimeout(() => {
      setInvitationCopied(false);
      setShareLinkCopied(false);
      return () => clearTimeout(deleteMsg);
    }, 2000);
    return () => clearTimeout(deleteMsg);
  }, [invitationCopied, shareLinkCopied]);

  return (
    <>
      <div className="p-[24px] flex flex-col justify-between items-center rounded-[48px] mx-[24px] bg-secondary7 translate-y-[-32%]">
        <div className="text-center mt-[48px] flex flex-col gap-[4px] ">
          <h5 className="text-primary1 text-[24px] font-[700]">{t("title")}</h5>
          <p className="text-secondary3 text-[19px] font-[400] tracking-[.38px]">
            {t("description")}
          </p>
        </div>

        <div className="w-full mt-[32px] flex flex-col justify-center items-center gap-[10px]">
          <span className="text-primary6 text-[19px] font-[500] leading-[150%]">
            {t("invite-num")}
          </span>
          <button
            className="w-full min-h-[48px] flex flex-col items-center gap-[2px] rounded-[16px] bg-primary5 lr"
            onClick={() => {
              copyToClipboard("56334");
              setInvitationCopied(true);
            }}
          >
            <span className="flex items-center justify-center gap-[8px]">
              {" "}
              <Image
                src={
                  "https://res.cloudinary.com/freelancer3223/image/upload/v1711286938/thebtalk_images/document-copy_avy1sd.svg"
                }
                width={24}
                height={24}
                priority
                alt="copy-icon"
              />
              <span className="pt-[8px] text-primary1 text-[28px] font-[400]">
                56334
              </span>
            </span>
          </button>
          {invitationCopied && (
            <p className="text-center text-primary1 text-[14px]">{t("copy")}</p>
          )}
          <p className="text-green font-[700] leading-[150%]">
            1 {t("points")}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[8px] w-full mt-[56px]">
          <button
            className="flex items-center justify-center gap-[8px] h-[56px] py-[8px] px-[16px] rounded-[16px] bg-primary3 "
            onClick={() => setShare(true)}
          >
            <Image
              src={
                "https://res.cloudinary.com/freelancer3223/image/upload/v1711286893/thebtalk_images/share_sonlng.svg"
              }
              width={24}
              height={24}
              priority
              alt="share-icon"
            />
            <span className="text-white font-[700] leading-[150%] pt-[2px]">
              {t("share")}
            </span>
          </button>
          <button
            className="flex items-center justify-center gap-[8px] h-[56px] py-[8px] px-[16px] border-[1px] rounded-[16px] border-primary1"
            onClick={() => setAwards(true)}
          >
            <Image
              src={
                "https://res.cloudinary.com/freelancer3223/image/upload/v1711286914/thebtalk_images/gift_zrqdxx.svg"
              }
              width={24}
              height={24}
              priority
              alt="gifts-icon"
            />
            <span className="text-primary1 font-[700] leading-[150%] pt-[2px]">
              {t("awards")}
            </span>
          </button>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {share && (
          <SharePopup
            closeHandler={() => setShare(false)}
            copied={shareLinkCopied}
            copyToClipboard={copyToClipboard}
            setCopied={() => setShareLinkCopied(true)}
            t={t}
          />
        )}
        {awards && (
          <Awardspopup
            awards={awardsData}
            closeHandler={() => setAwards(false)}
            t={t}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Container;
