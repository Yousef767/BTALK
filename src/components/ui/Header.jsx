"use client";
import React, { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Language from "./Language";
import { useLocale } from "next-intl";

const btnStyle =
  "w-[56px] h-[56px] flex items-center justify-center rounded-[16px] border-[1px] border-solid border-primary1";

const Header = ({ lang, bg, title, goHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("ar");
  const [language, setLanguage] = useState(false);
  const [isPending, startTransition] = useTransition();
  const localActive = useLocale();
  const router = useRouter();

  useEffect(() => {
    //set the language value
    setCurrentLanguage(localActive);
    //scrolling handler
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const saveHandler = () => {
    //change languge here
    console.log(currentLanguage);
    startTransition(() => {
      router.replace(`/${currentLanguage}`);
    });
    setLanguage(false);
  };

  return (
    <div className="fixed z-40 left-0 top-0 w-full rl ">
      <div
        className={`relative max-w-[450px] w-[100%] mx-auto  px-[24px] pt-[2vh] ${
          !title && "pb-[8px]"
        }  ${isScrolled ? bg : "bg-transparent"}`}
      >
        <div className={` flex justify-between items-center  `}>
          {lang ? (
            <button className={`${btnStyle}`} onClick={() => setLanguage(true)}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                  fill="#585158"
                />
                <path
                  d="M9.00023 21.75H8.00023C7.59023 21.75 7.25023 21.41 7.25023 21C7.25023 20.59 7.57023 20.26 7.98023 20.25C6.41023 14.89 6.41023 9.11 7.98023 3.75C7.57023 3.74 7.25023 3.41 7.25023 3C7.25023 2.59 7.59023 2.25 8.00023 2.25H9.00023C9.24023 2.25 9.47023 2.37 9.61023 2.56C9.75023 2.76 9.79023 3.01 9.71023 3.24C7.83023 8.89 7.83023 15.11 9.71023 20.77C9.79023 21 9.75023 21.25 9.61023 21.45C9.47023 21.63 9.24023 21.75 9.00023 21.75Z"
                  fill="#585158"
                />
                <path
                  d="M14.9999 21.75C14.9199 21.75 14.8399 21.74 14.7599 21.71C14.3699 21.58 14.1499 21.15 14.2899 20.76C16.1699 15.11 16.1699 8.89 14.2899 3.23C14.1599 2.84 14.3699 2.41 14.7599 2.28C15.1599 2.15 15.5799 2.36 15.7099 2.75C17.6999 8.71 17.6999 15.27 15.7099 21.22C15.6099 21.55 15.3099 21.75 14.9999 21.75Z"
                  fill="#585158"
                />
                <path
                  d="M12 17.2C9.21 17.2 6.43 16.81 3.75 16.02C3.74 16.42 3.41 16.75 3 16.75C2.59 16.75 2.25 16.41 2.25 16V15C2.25 14.76 2.37 14.53 2.56 14.39C2.76 14.25 3.01 14.21 3.24 14.29C8.89 16.17 15.12 16.17 20.77 14.29C21 14.21 21.25 14.25 21.45 14.39C21.65 14.53 21.76 14.76 21.76 15V16C21.76 16.41 21.42 16.75 21.01 16.75C20.6 16.75 20.27 16.43 20.26 16.02C17.57 16.81 14.79 17.2 12 17.2Z"
                  fill="#585158"
                />
                <path
                  d="M20.9998 9.75C20.9198 9.75 20.8398 9.74 20.7598 9.71C15.1098 7.83 8.87978 7.83 3.22978 9.71C2.82978 9.84 2.40978 9.63 2.27978 9.24C2.15978 8.84 2.36978 8.42 2.75978 8.29C8.71978 6.3 15.2798 6.3 21.2298 8.29C21.6198 8.42 21.8398 8.85 21.6998 9.24C21.6098 9.55 21.3098 9.75 20.9998 9.75Z"
                  fill="#585158"
                />
              </svg>
            </button>
          ) : (
            <button
              className={`${btnStyle}`}
              onClick={() => {
                if (goHome) {
                  router.push("/");
                } else {
                  router.back();
                }
              }}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8.9101 20.67C8.7201 20.67 8.5301 20.6 8.3801 20.45C8.0901 20.16 8.0901 19.68 8.3801 19.39L14.9001 12.87C15.3801 12.39 15.3801 11.61 14.9001 11.13L8.3801 4.61C8.0901 4.32 8.0901 3.84 8.3801 3.55C8.6701 3.26 9.1501 3.26 9.4401 3.55L15.9601 10.07C16.4701 10.58 16.7601 11.27 16.7601 12C16.7601 12.73 16.4801 13.42 15.9601 13.93L9.4401 20.45C9.2901 20.59 9.1001 20.67 8.9101 20.67Z"
                  fill="#585158"
                />
              </svg>
            </button>
          )}

          <Image
            src={
              "https://res.cloudinary.com/freelancer3223/image/upload/v1710695066/thebtalk_images/logo_x9b6tp.svg"
            }
            width={70}
            height={56}
            priority
            alt="logo"
            className=""
          />
        </div>
        {title && (
          <h3
            className={`text-primary1 text-[24px] font-[500] pt-[8px] ${
              localActive == "ar" ? "rl" : "lr"
            }`}
          >
            {title}
          </h3>
        )}
      </div>
      <AnimatePresence mode="wait">
        {language && (
          <Language
            lang={currentLanguage}
            onClick={(v) => setCurrentLanguage(v)}
            onSave={saveHandler}
            close={() => setLanguage(false)}
            disabled={isPending}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
