"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

//sharing functionality
const urlToShare = "https://theBtalk(examble).com"; // Replace with your URL
const shareOnFacebook = () => {
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    urlToShare
  )}`;
  window.open(facebookShareUrl, "_blank", "width=600,height=400");
};

const handleShareViaWhatsApp = () => {
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(urlToShare)}`;

  // Open the WhatsApp share URL in a new tab/window
  window.open(whatsappUrl, "_blank");
};

const handleShareViaTelegram = () => {
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
    urlToShare
  )}`;

  // Open the Telegram share URL in a new tab/window
  window.open(telegramUrl, "_blank");
};

const socialLinks = [
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1710686253/thebtalk_images/logos_facebook_ikrf2r.svg",
    clickHandler: shareOnFacebook,
  },

  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1710686253/thebtalk_images/logos_telegram_g5zdp6.svg",
    clickHandler: handleShareViaTelegram,
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1710686253/thebtalk_images/logos_whatsapp-icon_bhsltx.svg",
    clickHandler: handleShareViaWhatsApp,
  },
];

const SharePopup = ({
  closeHandler,
  copied,
  setCopied,
  copyToClipboard,
  t,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed z-[1000] top-0 left-0 bg-[rgba(0,0,0,.7)] w-full h-[100vh] flex justify-center items-center"
    >
      <div className="w-[90%] mx-auto p-[16px] pt-[32px] bg-white rounded-[24px] flex flex-col gap-[32px] ">
        <h4 className="text-primary1 text-center text-[24px] font-[500]">
          {t("share-via")}
        </h4>

        <div>
          <ul className="flex justify-center items-center gap-[24px]">
            <li>
              <button
                onClick={() => {
                  copyToClipboard("http://localhost:3000/accounnnn");
                  setCopied();
                }}
              >
                <Image
                  src={
                    "https://res.cloudinary.com/freelancer3223/image/upload/v1711296109/thebtalk_images/icon_1_gr0uqw.svg"
                  }
                  width={40}
                  height={40}
                  alt="socila media connection"
                  className=""
                  priority
                />
              </button>
            </li>
            {socialLinks.map((el) => (
              <li key={el.image}>
                <button onClick={el.clickHandler}>
                  <Image
                    src={el.image}
                    width={40}
                    height={40}
                    alt="socila media connection"
                    className=""
                    priority
                  />
                </button>
              </li>
            ))}
          </ul>
          {copied && <p className="text-center text-primary1">{t("copy")} </p>}
        </div>
        <button
          className="w-full h-[56px] flex justify-center items-center rounded-[16px] bg-primary1 text-white "
          onClick={closeHandler}
        >
          {t("okay")}
        </button>
      </div>
    </motion.div>
  );
};

export default SharePopup;
