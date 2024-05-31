"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("navbar");
  const pathname = usePathname();
  const lang = useLocale();
  useEffect(() => {
    if(document.getElementById('whiteSvg')){
      document.getElementById('whiteSvg').id = '';
    }
  }, []);
  return (
    <div className="fixed z-[2] bottom-0 left-0   w-[100%] h-[80px] ">
      <nav className="relative max-w-[450px] w-[100%] mx-auto   bg-primary1 px-[32px] flex items-center">
        <ul className="w-full flex justify-between relative ">
          <li
            className={`relative  navlink ${
              pathname === `/${lang}` && "active"
            }  `}
          >
            <Link
              href={"/"}
              className="flex flex-col items-center gap-[8px] h-[80px] pt-[16px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.0402 6.82L14.2802 2.79C12.7102 1.69 10.3002 1.75 8.79023 2.92L3.78023 6.83C2.78023 7.61 1.99023 9.21 1.99023 10.47V17.37C1.99023 19.92 4.06023 22 6.61023 22H17.3902C19.9402 22 22.0102 19.93 22.0102 17.38V10.6C22.0102 9.25 21.1402 7.59 20.0402 6.82ZM12.7502 18C12.7502 18.41 12.4102 18.75 12.0002 18.75C11.5902 18.75 11.2502 18.41 11.2502 18V15C11.2502 14.59 11.5902 14.25 12.0002 14.25C12.4102 14.25 12.7502 14.59 12.7502 15V18Z"
                  fill={pathname === `/${lang}` ? "#EA9967" : "#AFAFAF"}
                />
              </svg>
              <span
                className={`font-[400] leading-[150%] ${
                  pathname === `/${lang}` ? "text-[#EA9967]" : "text-[#AFAFAF]"
                }`}
              >
                {t("home")}
              </span>
            </Link>
          </li>

          <li
            className={`relative  navlink ${
              pathname === `/${lang}/notifications` && "active"
            }`}
          >
            <Link
              href={`/${lang}/notifications`}
              className="flex flex-col items-center gap-[8px] h-[80px] pt-[16px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M12.3534 20.53C10.0234 20.53 7.69337 20.16 5.48337 19.42C4.64337 19.13 4.00337 18.54 3.72337 17.77C3.43337 17 3.53337 16.15 3.99337 15.39L5.14337 13.48C5.38337 13.08 5.60337 12.28 5.60337 11.81V8.91998C5.60337 5.19998 8.63337 2.16998 12.3534 2.16998C16.0734 2.16998 19.1034 5.19998 19.1034 8.91998V11.81C19.1034 12.27 19.3234 13.08 19.5634 13.49L20.7034 15.39C21.1334 16.11 21.2134 16.98 20.9234 17.77C20.6334 18.56 20.0034 19.16 19.2134 19.42C17.0134 20.16 14.6834 20.53 12.3534 20.53ZM12.3534 3.66998C9.46337 3.66998 7.10337 6.01998 7.10337 8.91998V11.81C7.10337 12.54 6.80337 13.62 6.43337 14.25L5.28336 16.16C5.06336 16.53 5.00337 16.92 5.13337 17.25C5.25337 17.59 5.55337 17.85 5.96337 17.99C10.1434 19.39 14.5734 19.39 18.7534 17.99C19.1134 17.87 19.3934 17.6 19.5234 17.24C19.6534 16.88 19.6234 16.49 19.4234 16.16L18.2734 14.25C17.8934 13.6 17.6034 12.53 17.6034 11.8V8.91998C17.6034 6.01998 15.2534 3.66998 12.3534 3.66998Z"
                  fill={
                    pathname === `/${lang}/notifications`
                      ? "#EA9967"
                      : "#AFAFAF"
                  }
                />
                <path
                  d="M14.2136 3.93999C14.1436 3.93999 14.0736 3.92999 14.0036 3.90999C13.7136 3.82999 13.4336 3.76999 13.1636 3.72999C12.3136 3.61999 11.4936 3.67999 10.7236 3.90999C10.4436 3.99999 10.1436 3.90999 9.95361 3.69999C9.76361 3.48999 9.70361 3.18999 9.81361 2.91999C10.2236 1.86999 11.2236 1.17999 12.3636 1.17999C13.5036 1.17999 14.5036 1.85999 14.9136 2.91999C15.0136 3.18999 14.9636 3.48999 14.7736 3.69999C14.6236 3.85999 14.4136 3.93999 14.2136 3.93999Z"
                  fill={
                    pathname === `/${lang}/notifications`
                      ? "#EA9967"
                      : "#AFAFAF"
                  }
                />
                <path
                  d="M12.3535 22.81C11.3635 22.81 10.4035 22.41 9.70352 21.71C9.00352 21.01 8.60352 20.05 8.60352 19.06H10.1035C10.1035 19.65 10.3435 20.23 10.7635 20.65C11.1835 21.07 11.7635 21.31 12.3535 21.31C13.5935 21.31 14.6035 20.3 14.6035 19.06H16.1035C16.1035 21.13 14.4235 22.81 12.3535 22.81Z"
                  fill={
                    pathname === `/${lang}/notifications`
                      ? "#EA9967"
                      : "#AFAFAF"
                  }
                />
              </svg>
              <span
                className={`font-[400] leading-[150%] ${
                  pathname === `/${lang}/notifications`
                    ? "text-[#EA9967]"
                    : "text-[#AFAFAF]"
                }`}
              >
                {t("notifications")}{" "}
              </span>
            </Link>
          </li>

          <li
            className={`relative  navlink ${
              pathname === `/${lang}/gallery` && "active"
            }`}
          >
            <Link
              href={`/${lang}/gallery`}
              className="flex flex-col items-center gap-[8px] h-[80px] pt-[16px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M15.6665 22.75H9.6665C4.2365 22.75 1.9165 20.43 1.9165 15V9C1.9165 3.57 4.2365 1.25 9.6665 1.25H15.6665C21.0965 1.25 23.4165 3.57 23.4165 9V15C23.4165 20.43 21.0965 22.75 15.6665 22.75ZM9.6665 2.75C5.0565 2.75 3.4165 4.39 3.4165 9V15C3.4165 19.61 5.0565 21.25 9.6665 21.25H15.6665C20.2765 21.25 21.9165 19.61 21.9165 15V9C21.9165 4.39 20.2765 2.75 15.6665 2.75H9.6665Z"
                  fill={pathname === `/${lang}/gallery` ? "#EA9967" : "#AFAFAF"}
                />
                <path
                  d="M9.6665 10.75C8.1465 10.75 6.9165 9.52 6.9165 8C6.9165 6.48 8.1465 5.25 9.6665 5.25C11.1865 5.25 12.4165 6.48 12.4165 8C12.4165 9.52 11.1865 10.75 9.6665 10.75ZM9.6665 6.75C8.9765 6.75 8.4165 7.31 8.4165 8C8.4165 8.69 8.9765 9.25 9.6665 9.25C10.3565 9.25 10.9165 8.69 10.9165 8C10.9165 7.31 10.3565 6.75 9.6665 6.75Z"
                  fill={pathname === `/${lang}/gallery` ? "#EA9967" : "#AFAFAF"}
                />
                <path
                  d="M3.33628 19.7C3.09628 19.7 2.85628 19.58 2.71628 19.37C2.48628 19.03 2.57628 18.56 2.92628 18.33L7.85628 15.02C8.93628 14.29 10.4263 14.38 11.4063 15.21L11.7363 15.5C12.2363 15.93 13.0863 15.93 13.5763 15.5L17.7363 11.93C18.7963 11.02 20.4663 11.02 21.5363 11.93L23.1663 13.33C23.4763 13.6 23.5163 14.07 23.2463 14.39C22.9763 14.7 22.5063 14.74 22.1863 14.47L20.5563 13.07C20.0563 12.64 19.2063 12.64 18.7063 13.07L14.5463 16.64C13.4863 17.55 11.8163 17.55 10.7463 16.64L10.4163 16.35C9.95628 15.96 9.19628 15.92 8.68628 16.27L3.75628 19.58C3.62628 19.66 3.47628 19.7 3.33628 19.7Z"
                  fill={pathname === `/${lang}/gallery` ? "#EA9967" : "#AFAFAF"}
                />
              </svg>
              <span
                className={`font-[400] leading-[150%] ${
                  pathname === `/${lang}/gallery`
                    ? "text-[#EA9967]"
                    : "text-[#AFAFAF]"
                }`}
              >
                {t("gallery")}
              </span>
            </Link>
          </li>

          <li
            className={`relative  navlink ${
              pathname === `/${lang}/account` && "active"
            }`}
          >
            <Link
              href={`/${lang}/account`}
              className="flex flex-col items-center gap-[8px] h-[80px] pt-[16px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z"
                  fill={pathname === `/${lang}/account` ? "#EA9967" : "#AFAFAF"}
                />
                <path
                  d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z"
                  fill={pathname === `/${lang}/account` ? "#EA9967" : "#AFAFAF"}
                />
              </svg>
              <span
                className={`font-[400] leading-[150%] ${
                  pathname === `/${lang}/account`
                    ? "text-[#EA9967]"
                    : "text-[#AFAFAF]"
                }`}
              >
                {t("account")}
              </span>
            </Link>
          </li>
        </ul>

        {/* carves of the nav  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="absolute z-10 top-[-31.5px] left-[0px]"
        >
          <path d="M32 32C14.3269 32 0 17.6731 0 0V32H32Z" fill="#222325" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="absolute z-10 top-[-31.5px] right-[0px]"
        >
          <path d="M0 32C17.6731 32 32 17.6731 32 0V32H0Z" fill="#222325" />
        </svg>
      </nav>
    </div>
  );
};

export default Navbar;
