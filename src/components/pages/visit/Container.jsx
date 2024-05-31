"use client";
import BottomActionsContaienr from "@/components/ui/BottomActionsContaienr";
import EmptyData from "@/components/ui/EmptyData";
import { useRouter } from "next/navigation";
import React from "react";
import Card from "./Card";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const Container = ({ data }) => {
  const t = useTranslations("visit");
  const lang = useLocale();
  const router = useRouter();
  return (
    <section className="p-[24px] pb-[0px] ">
      {data?.date ? (
        <Card data={data} t={t} />
      ) : (
        <h3 className="text-primary1 text-[19px] font-[500] leading-[150%] mb-[24px]">
          {lang == "en" ? data?.title_en : data?.title_ar}
        </h3>
      )}

      {/* message here  */}
      <div className="p-[16px] px-[8px] flex items-center  gap-[12px] rounded-[16px] bg-[#F4FDF8]">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
              fill="#4ADE80"
            />
            <path
              d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z"
              fill="#4ADE80"
            />
            <path
              d="M12 17C11.87 17 11.74 16.97 11.62 16.92C11.5 16.87 11.39 16.8 11.29 16.71C11.2 16.61 11.13 16.51 11.08 16.38C11.03 16.26 11 16.13 11 16C11 15.87 11.03 15.74 11.08 15.62C11.13 15.5 11.2 15.39 11.29 15.29C11.39 15.2 11.5 15.13 11.62 15.08C11.86 14.98 12.14 14.98 12.38 15.08C12.5 15.13 12.61 15.2 12.71 15.29C12.8 15.39 12.87 15.5 12.92 15.62C12.97 15.74 13 15.87 13 16C13 16.13 12.97 16.26 12.92 16.38C12.87 16.51 12.8 16.61 12.71 16.71C12.61 16.8 12.5 16.87 12.38 16.92C12.26 16.97 12.13 17 12 17Z"
              fill="#4ADE80"
            />
          </svg>
        </span>

        <p className="text-primary1 font-[400] leading-[150%]">
          {data?.date
            ? lang == "en"
              ? data.message_en
              : data.message_ar
            : t("contact-soon")}
        </p>
      </div>
      {!data.date && <EmptyData className={"pt-[4vh]"} />}

      <BottomActionsContaienr>
        {data.date ? (
          <Link
            href={
              "https://www.google.com/maps/place/%D9%83%D8%A7%D9%8A%D8%B1%D9%88+%D9%81%D8%B3%D8%AA%D9%8A%D9%81%D8%A7%D9%84+%D8%B3%D9%8A%D8%AA%D9%8A%D8%8C+%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D9%86%D8%B5%D8%B1%D8%8C+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%E2%80%AC%E2%80%AD/@30.0270231,31.4221001,15z/data=!3m1!4b1!4m6!3m5!1s0x14583cfd5e540799:0x4a397398c27f4413!8m2!3d30.0328642!4d31.4100122!16s%2Fm%2F0czdnmv?entry=ttu"
            }
            target="_blank"
            className="h-[56px] w-full py-[8px] px-[16px] flex items-center justify-center gap-[8px] rounded-[16px] border-[1px] border-primary1 "
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8.82812 17.3342C9.4616 18.1507 10.0381 19.0108 10.5536 19.9082C10.9937 20.7522 11.1771 21.3246 11.4988 22.3415C11.696 22.9034 11.8743 23.0711 12.2576 23.0711C12.6752 23.0711 12.8647 22.7858 13.0111 22.3446C13.3151 21.3842 13.5537 20.6513 13.93 19.9587C14.6685 18.6216 15.5862 17.4335 16.4879 16.2915C16.732 15.9683 18.3102 14.0855 19.0207 12.5999C19.0207 12.5999 19.8939 10.9679 19.8939 8.68872C19.8939 6.55676 19.0327 5.07812 19.0327 5.07812L16.5533 5.74974L15.0475 9.76104L14.675 10.3142L14.6005 10.4144L14.5014 10.5398L14.3275 10.7402L14.079 10.9915L12.7381 12.0964L9.38579 14.0541L8.82812 17.3342Z"
                  fill="#34A853"
                />
                <path
                  d="M5.36816 12.3255C6.18634 14.2157 7.76409 15.8773 8.83155 17.3354L14.5014 10.5424C14.5014 10.5424 13.7026 11.599 12.2536 11.599C10.6397 11.599 9.3358 10.2954 9.3358 8.65167C9.3358 7.52448 10.0063 6.75012 10.0063 6.75012L6.15745 7.79322L5.36816 12.3255Z"
                  fill="#FBBC04"
                />
                <path
                  d="M14.5646 1.2724C16.4477 1.88649 18.0594 3.1757 19.0343 5.07676L14.503 10.5384C14.503 10.5384 15.1735 9.75008 15.1735 8.62989C15.1735 6.94789 13.7731 5.69134 12.2604 5.69134C10.8299 5.69134 10.0083 6.74621 10.0083 6.74621V3.30542L14.5646 1.2724Z"
                  fill="#4285F4"
                />
                <path
                  d="M6.40674 3.68569C7.53144 2.32464 9.51048 0.923096 12.2389 0.923096C13.5626 0.923096 14.5599 1.2746 14.5599 1.2746L10.0041 6.74926H6.77617L6.40674 3.68569Z"
                  fill="#1A73E8"
                />
                <path
                  d="M5.36818 12.3255C5.36818 12.3255 4.61548 10.8346 4.61548 8.67475C4.61548 6.6334 5.40005 4.84902 6.40682 3.68567L10.0067 6.74972L5.36818 12.3255Z"
                  fill="#EA4335"
                />
              </svg>
            </span>
            <span className="text-primary1 font-[700] leading-[150%]">
              {t("location")}
            </span>
          </Link>
        ) : (
          <button
            onClick={() => router.push("/")}
            className="h-[56px] w-full py-[8px] px-[16px] flex items-center justify-center rounded-[16px] bg-secondary6 text-secondary1 font-[700] leading-[150%] "
          >
            {t("back")}
          </button>
        )}
      </BottomActionsContaienr>
    </section>
  );
};

export default Container;
