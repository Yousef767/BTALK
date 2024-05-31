"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BottomActionsContaienr from "@/components/ui/BottomActionsContaienr";
import SharePopup from "../invitations/SharePopup";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import ContactUs from "@/components/ui/ContactUs";
import { useLocale, useTranslations } from "next-intl";

const Container = () => {
  const [share, setShare] = useState(false);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  const router = useRouter();
  const t = useTranslations("about");
  const shareT = useTranslations("invitations");
  const lang = useLocale();

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
      setShareLinkCopied(false);
      return () => clearTimeout(deleteMsg);
    }, 2000);
    return () => clearTimeout(deleteMsg);
  }, [shareLinkCopied]);

  return (
    <>
      <div>
        {" "}
        <div className="mt-[24px] mx-[16px]">
          <div className="mb-[40px]">
            <h6 className="text-secondary2 text-[24px] font-[500] mb-[10px]">
              {t("about")}
            </h6>
            <p className="text-primary1 text-[19px] font-[400] tracking-[.38px]">
              {t("description")}
            </p>
          </div>
          <div>
            <h6 className="text-secondary2 text-[24px] font-[500] mb-[10px]">
              {t("contact-us")}
            </h6>
            <div className="flex gap-[24px]">
              <Link href={`/${lang}/account/chat`}>
                <Image
                  src={
                    "https://res.cloudinary.com/freelancer3223/image/upload/v1711500033/thebtalk_images/icon_2_rtzfy7.svg"
                  }
                  width={40}
                  height={40}
                  alt="socila media connection"
                  className=""
                  priority
                />
              </Link>
              <ContactUs />
            </div>
          </div>
        </div>
        <BottomActionsContaienr>
          <div className="grid grid-cols-2 gap-[24px]">
            <button
              className={` text-secondary1 font-[700] leading-[150%] flex items-center justify-center rounded-[16px] bg-secondary6 `}
              onClick={() => router.back()}
            >
              {t("back")}
            </button>
            <button
              className={` bg-primary3 text-white flex items-center justify-center gap-[8px]  h-[56px] rounded-[16px] font-[700] leading-[150%]`}
              onClick={() => setShare(true)}
            >
              <Image
                src={
                  "https://res.cloudinary.com/freelancer3223/image/upload/v1711286893/thebtalk_images/share_sonlng.svg"
                }
                width={24}
                height={24}
                priority
                alt="copy-icon"
              />
              <span className="pt-[4px]"> {t("invite")} </span>
            </button>
          </div>
        </BottomActionsContaienr>
      </div>{" "}
      <AnimatePresence mode="wait">
        {share && (
          <SharePopup
            closeHandler={() => setShare(false)}
            copied={shareLinkCopied}
            copyToClipboard={copyToClipboard}
            setCopied={() => setShareLinkCopied(true)}
            t={shareT}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Container;
