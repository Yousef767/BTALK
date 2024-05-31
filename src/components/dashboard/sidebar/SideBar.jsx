"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";
import SideLink from "./SideLink";
import CustomRoute from "@/app/[locale]/CustomRoute/CustomRoute";

const links = [
  {
    title_ar: "الرئيسية",
    title_en: "Home",
    image: "",
    url: "/",
    url_tag: "dashboard",
    svg_white: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M17.79 22.9499H6.21C3.47 22.9499 1.25 20.7199 1.25 17.9799V10.5699C1.25 9.20993 2.09 7.49993 3.17 6.65993L8.56 2.45993C10.18 1.19993 12.77 1.13993 14.45 2.31993L20.63 6.64993C21.82 7.47993 22.75 9.25993 22.75 10.7099V17.9899C22.75 20.7199 20.53 22.9499 17.79 22.9499ZM9.48 3.63993L4.09 7.83993C3.38 8.39993 2.75 9.66993 2.75 10.5699V17.9799C2.75 19.8899 4.3 21.4499 6.21 21.4499H17.79C19.7 21.4499 21.25 19.8999 21.25 17.9899V10.7099C21.25 9.74993 20.56 8.41993 19.77 7.87993L13.59 3.54993C12.45 2.74993 10.57 2.78993 9.48 3.63993Z"
            fill="white"
          />
          <path
            d="M12 18.95C11.59 18.95 11.25 18.61 11.25 18.2V15.2C11.25 14.79 11.59 14.45 12 14.45C12.41 14.45 12.75 14.79 12.75 15.2V18.2C12.75 18.61 12.41 18.95 12 18.95Z"
            fill="white"
          />
        </svg>
      </>
    ),
    svg_black: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M17.79 22.9499H6.21C3.47 22.9499 1.25 20.7199 1.25 17.9799V10.5699C1.25 9.20993 2.09 7.49993 3.17 6.65993L8.56 2.45993C10.18 1.19993 12.77 1.13993 14.45 2.31993L20.63 6.64993C21.82 7.47993 22.75 9.25993 22.75 10.7099V17.9899C22.75 20.7199 20.53 22.9499 17.79 22.9499ZM9.48 3.63993L4.09 7.83993C3.38 8.39993 2.75 9.66993 2.75 10.5699V17.9799C2.75 19.8899 4.3 21.4499 6.21 21.4499H17.79C19.7 21.4499 21.25 19.8999 21.25 17.9899V10.7099C21.25 9.74993 20.56 8.41993 19.77 7.87993L13.59 3.54993C12.45 2.74993 10.57 2.78993 9.48 3.63993Z"
            fill="#222325"
          />
          <path
            d="M12 18.95C11.59 18.95 11.25 18.61 11.25 18.2V15.2C11.25 14.79 11.59 14.45 12 14.45C12.41 14.45 12.75 14.79 12.75 15.2V18.2C12.75 18.61 12.41 18.95 12 18.95Z"
            fill="#222325"
          />
        </svg>
      </>
    ),
  },
  {
    title_ar: "الطلبات",
    title_en: "Orders",
    image: "",
    url: "/orders",
    url_tag: "orders",
    svg_white: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M18.19 17.95H7.53999C6.54999 17.95 5.59999 17.53 4.92999 16.8C4.25999 16.07 3.92 15.0899 4 14.0999L4.83 4.13995C4.86 3.82995 4.74999 3.52996 4.53999 3.29996C4.32999 3.06996 4.04 2.94995 3.73 2.94995H2C1.59 2.94995 1.25 2.60995 1.25 2.19995C1.25 1.78995 1.59 1.44995 2 1.44995H3.74001C4.47001 1.44995 5.15999 1.75995 5.64999 2.28995C5.91999 2.58995 6.12 2.93996 6.23 3.32996H18.72C19.73 3.32996 20.66 3.72995 21.34 4.44995C22.01 5.17995 22.35 6.12995 22.27 7.13995L21.73 14.64C21.62 16.47 20.02 17.95 18.19 17.95ZM6.28 4.81995L5.5 14.2199C5.45 14.7999 5.64 15.3499 6.03 15.7799C6.42 16.2099 6.95999 16.4399 7.53999 16.4399H18.19C19.23 16.4399 20.17 15.56 20.25 14.52L20.79 7.01996C20.83 6.42996 20.64 5.86996 20.25 5.45996C19.86 5.03996 19.32 4.80994 18.73 4.80994H6.28V4.81995Z"
            fill="#fff"
          />
          <path
            d="M16.25 22.95C15.15 22.95 14.25 22.05 14.25 20.95C14.25 19.85 15.15 18.95 16.25 18.95C17.35 18.95 18.25 19.85 18.25 20.95C18.25 22.05 17.35 22.95 16.25 22.95ZM16.25 20.45C15.97 20.45 15.75 20.67 15.75 20.95C15.75 21.23 15.97 21.45 16.25 21.45C16.53 21.45 16.75 21.23 16.75 20.95C16.75 20.67 16.53 20.45 16.25 20.45Z"
            fill="#fff"
          />
          <path
            d="M8.25 22.95C7.15 22.95 6.25 22.05 6.25 20.95C6.25 19.85 7.15 18.95 8.25 18.95C9.35 18.95 10.25 19.85 10.25 20.95C10.25 22.05 9.35 22.95 8.25 22.95ZM8.25 20.45C7.97 20.45 7.75 20.67 7.75 20.95C7.75 21.23 7.97 21.45 8.25 21.45C8.53 21.45 8.75 21.23 8.75 20.95C8.75 20.67 8.53 20.45 8.25 20.45Z"
            fill="#fff"
          />
          <path
            d="M21 8.94995H9C8.59 8.94995 8.25 8.60995 8.25 8.19995C8.25 7.78995 8.59 7.44995 9 7.44995H21C21.41 7.44995 21.75 7.78995 21.75 8.19995C21.75 8.60995 21.41 8.94995 21 8.94995Z"
            fill="#fff"
          />
        </svg>
      </>
    ),
    svg_black: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M18.19 17.95H7.53999C6.54999 17.95 5.59999 17.53 4.92999 16.8C4.25999 16.07 3.92 15.0899 4 14.0999L4.83 4.13995C4.86 3.82995 4.74999 3.52996 4.53999 3.29996C4.32999 3.06996 4.04 2.94995 3.73 2.94995H2C1.59 2.94995 1.25 2.60995 1.25 2.19995C1.25 1.78995 1.59 1.44995 2 1.44995H3.74001C4.47001 1.44995 5.15999 1.75995 5.64999 2.28995C5.91999 2.58995 6.12 2.93996 6.23 3.32996H18.72C19.73 3.32996 20.66 3.72995 21.34 4.44995C22.01 5.17995 22.35 6.12995 22.27 7.13995L21.73 14.64C21.62 16.47 20.02 17.95 18.19 17.95ZM6.28 4.81995L5.5 14.2199C5.45 14.7999 5.64 15.3499 6.03 15.7799C6.42 16.2099 6.95999 16.4399 7.53999 16.4399H18.19C19.23 16.4399 20.17 15.56 20.25 14.52L20.79 7.01996C20.83 6.42996 20.64 5.86996 20.25 5.45996C19.86 5.03996 19.32 4.80994 18.73 4.80994H6.28V4.81995Z"
            fill="#222325"
          />
          <path
            d="M16.25 22.95C15.15 22.95 14.25 22.05 14.25 20.95C14.25 19.85 15.15 18.95 16.25 18.95C17.35 18.95 18.25 19.85 18.25 20.95C18.25 22.05 17.35 22.95 16.25 22.95ZM16.25 20.45C15.97 20.45 15.75 20.67 15.75 20.95C15.75 21.23 15.97 21.45 16.25 21.45C16.53 21.45 16.75 21.23 16.75 20.95C16.75 20.67 16.53 20.45 16.25 20.45Z"
            fill="#222325"
          />
          <path
            d="M8.25 22.95C7.15 22.95 6.25 22.05 6.25 20.95C6.25 19.85 7.15 18.95 8.25 18.95C9.35 18.95 10.25 19.85 10.25 20.95C10.25 22.05 9.35 22.95 8.25 22.95ZM8.25 20.45C7.97 20.45 7.75 20.67 7.75 20.95C7.75 21.23 7.97 21.45 8.25 21.45C8.53 21.45 8.75 21.23 8.75 20.95C8.75 20.67 8.53 20.45 8.25 20.45Z"
            fill="#222325"
          />
          <path
            d="M21 8.94995H9C8.59 8.94995 8.25 8.60995 8.25 8.19995C8.25 7.78995 8.59 7.44995 9 7.44995H21C21.41 7.44995 21.75 7.78995 21.75 8.19995C21.75 8.60995 21.41 8.94995 21 8.94995Z"
            fill="#222325"
          />
        </svg>
      </>
    ),
  },
  // {
  //   title_ar: "المحادثات",
  //   title_en: "Chats",
  //   image: "",
  //   url: "/chats",
  //   url_tag: "chats",
  //   svg_white: (
  //     <>
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="24"
  //         height="25"
  //         viewBox="0 0 24 25"
  //         fill="none"
  //       >
  //         <path
  //           d="M12 23.01C11.31 23.01 10.66 22.66 10.2 22.05L8.7 20.05C8.67 20.01 8.55 19.96 8.5 19.95H8C3.83 19.95 1.25 18.82 1.25 13.2V8.19995C1.25 3.77995 3.58 1.44995 8 1.44995H16C20.42 1.44995 22.75 3.77995 22.75 8.19995V13.2C22.75 17.62 20.42 19.95 16 19.95H15.5C15.42 19.95 15.35 19.99 15.3 20.05L13.8 22.05C13.34 22.66 12.69 23.01 12 23.01ZM8 2.94995C4.42 2.94995 2.75 4.61995 2.75 8.19995V13.2C2.75 17.72 4.3 18.45 8 18.45H8.5C9.01 18.45 9.59 18.74 9.9 19.15L11.4 21.15C11.75 21.61 12.25 21.61 12.6 21.15L14.1 19.15C14.43 18.71 14.95 18.45 15.5 18.45H16C19.58 18.45 21.25 16.78 21.25 13.2V8.19995C21.25 4.61995 19.58 2.94995 16 2.94995H8Z"
  //           fill="#fff"
  //         />
  //         <path
  //           d="M12 12.2C11.44 12.2 11 11.75 11 11.2C11 10.65 11.45 10.2 12 10.2C12.55 10.2 13 10.65 13 11.2C13 11.75 12.56 12.2 12 12.2Z"
  //           fill="#fff"
  //         />
  //         <path
  //           d="M16 12.2C15.44 12.2 15 11.75 15 11.2C15 10.65 15.45 10.2 16 10.2C16.55 10.2 17 10.65 17 11.2C17 11.75 16.56 12.2 16 12.2Z"
  //           fill="#fff"
  //         />
  //         <path
  //           d="M8 12.2C7.44 12.2 7 11.75 7 11.2C7 10.65 7.45 10.2 8 10.2C8.55 10.2 9 10.65 9 11.2C9 11.75 8.56 12.2 8 12.2Z"
  //           fill="#fff"
  //         />
  //       </svg>
  //     </>
  //   ),
  //   svg_black: (
  //     <>
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="24"
  //         height="25"
  //         viewBox="0 0 24 25"
  //         fill="none"
  //       >
  //         <path
  //           d="M12 23.01C11.31 23.01 10.66 22.66 10.2 22.05L8.7 20.05C8.67 20.01 8.55 19.96 8.5 19.95H8C3.83 19.95 1.25 18.82 1.25 13.2V8.19995C1.25 3.77995 3.58 1.44995 8 1.44995H16C20.42 1.44995 22.75 3.77995 22.75 8.19995V13.2C22.75 17.62 20.42 19.95 16 19.95H15.5C15.42 19.95 15.35 19.99 15.3 20.05L13.8 22.05C13.34 22.66 12.69 23.01 12 23.01ZM8 2.94995C4.42 2.94995 2.75 4.61995 2.75 8.19995V13.2C2.75 17.72 4.3 18.45 8 18.45H8.5C9.01 18.45 9.59 18.74 9.9 19.15L11.4 21.15C11.75 21.61 12.25 21.61 12.6 21.15L14.1 19.15C14.43 18.71 14.95 18.45 15.5 18.45H16C19.58 18.45 21.25 16.78 21.25 13.2V8.19995C21.25 4.61995 19.58 2.94995 16 2.94995H8Z"
  //           fill="#222325"
  //         />
  //         <path
  //           d="M12 12.2C11.44 12.2 11 11.75 11 11.2C11 10.65 11.45 10.2 12 10.2C12.55 10.2 13 10.65 13 11.2C13 11.75 12.56 12.2 12 12.2Z"
  //           fill="#222325"
  //         />
  //         <path
  //           d="M16 12.2C15.44 12.2 15 11.75 15 11.2C15 10.65 15.45 10.2 16 10.2C16.55 10.2 17 10.65 17 11.2C17 11.75 16.56 12.2 16 12.2Z"
  //           fill="#222325"
  //         />
  //         <path
  //           d="M8 12.2C7.44 12.2 7 11.75 7 11.2C7 10.65 7.45 10.2 8 10.2C8.55 10.2 9 10.65 9 11.2C9 11.75 8.56 12.2 8 12.2Z"
  //           fill="#222325"
  //         />
  //       </svg>
  //     </>
  //   ),
  // },
  {
    title_ar: "العملاء",
    title_en: "Clients",
    image: "",
    url: "/clients",
    url_tag: "clients",
    svg_white: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M12 12.95C8.83 12.95 6.25 10.37 6.25 7.19995C6.25 4.02995 8.83 1.44995 12 1.44995C15.17 1.44995 17.75 4.02995 17.75 7.19995C17.75 10.37 15.17 12.95 12 12.95ZM12 2.94995C9.66 2.94995 7.75 4.85995 7.75 7.19995C7.75 9.53995 9.66 11.45 12 11.45C14.34 11.45 16.25 9.53995 16.25 7.19995C16.25 4.85995 14.34 2.94995 12 2.94995Z"
            fill="#fff"
          />
          <path
            d="M20.5901 22.95C20.1801 22.95 19.8401 22.61 19.8401 22.2C19.8401 18.75 16.3202 15.95 12.0002 15.95C7.68015 15.95 4.16016 18.75 4.16016 22.2C4.16016 22.61 3.82016 22.95 3.41016 22.95C3.00016 22.95 2.66016 22.61 2.66016 22.2C2.66016 17.93 6.85015 14.45 12.0002 14.45C17.1502 14.45 21.3401 17.93 21.3401 22.2C21.3401 22.61 21.0001 22.95 20.5901 22.95Z"
            fill="#fff"
          />
        </svg>
      </>
    ),
    svg_black: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M12 12.95C8.83 12.95 6.25 10.37 6.25 7.19995C6.25 4.02995 8.83 1.44995 12 1.44995C15.17 1.44995 17.75 4.02995 17.75 7.19995C17.75 10.37 15.17 12.95 12 12.95ZM12 2.94995C9.66 2.94995 7.75 4.85995 7.75 7.19995C7.75 9.53995 9.66 11.45 12 11.45C14.34 11.45 16.25 9.53995 16.25 7.19995C16.25 4.85995 14.34 2.94995 12 2.94995Z"
            fill="#222325"
          />
          <path
            d="M20.5901 22.95C20.1801 22.95 19.8401 22.61 19.8401 22.2C19.8401 18.75 16.3202 15.95 12.0002 15.95C7.68015 15.95 4.16016 18.75 4.16016 22.2C4.16016 22.61 3.82016 22.95 3.41016 22.95C3.00016 22.95 2.66016 22.61 2.66016 22.2C2.66016 17.93 6.85015 14.45 12.0002 14.45C17.1502 14.45 21.3401 17.93 21.3401 22.2C21.3401 22.61 21.0001 22.95 20.5901 22.95Z"
            fill="#222325"
          />
        </svg>
      </>
    ),
  },
  {
    title_ar: "التقارير",
    title_en: "Reports",
    url: "/reports",
    url_tag: "reports",
    svg_white: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M7.49994 15.45C7.30994 15.45 7.11994 15.38 6.96994 15.23C6.67994 14.94 6.67994 14.46 6.96994 14.17L10.1699 10.97C10.3299 10.81 10.5399 10.73 10.7699 10.75C10.9899 10.77 11.1899 10.89 11.3199 11.08L12.4099 12.72L15.9599 9.16995C16.2499 8.87995 16.7299 8.87995 17.0199 9.16995C17.3099 9.45995 17.3099 9.93995 17.0199 10.23L12.8199 14.43C12.6599 14.59 12.4499 14.67 12.2199 14.65C11.9999 14.63 11.7999 14.51 11.6699 14.32L10.5799 12.68L8.02994 15.23C7.87994 15.38 7.68994 15.45 7.49994 15.45Z"
            fill="#fff"
          />
          <path
            d="M16.5 12.45C16.09 12.45 15.75 12.11 15.75 11.7V10.45H14.5C14.09 10.45 13.75 10.11 13.75 9.69995C13.75 9.28995 14.09 8.94995 14.5 8.94995H16.5C16.91 8.94995 17.25 9.28995 17.25 9.69995V11.7C17.25 12.11 16.91 12.45 16.5 12.45Z"
            fill="#fff"
          />
          <path
            d="M15 22.95H9C3.57 22.95 1.25 20.63 1.25 15.2V9.19995C1.25 3.76995 3.57 1.44995 9 1.44995H15C20.43 1.44995 22.75 3.76995 22.75 9.19995V15.2C22.75 20.63 20.43 22.95 15 22.95ZM9 2.94995C4.39 2.94995 2.75 4.58995 2.75 9.19995V15.2C2.75 19.81 4.39 21.45 9 21.45H15C19.61 21.45 21.25 19.81 21.25 15.2V9.19995C21.25 4.58995 19.61 2.94995 15 2.94995H9Z"
            fill="#fff"
          />
        </svg>
      </>
    ),
    svg_black: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M7.49994 15.45C7.30994 15.45 7.11994 15.38 6.96994 15.23C6.67994 14.94 6.67994 14.46 6.96994 14.17L10.1699 10.97C10.3299 10.81 10.5399 10.73 10.7699 10.75C10.9899 10.77 11.1899 10.89 11.3199 11.08L12.4099 12.72L15.9599 9.16995C16.2499 8.87995 16.7299 8.87995 17.0199 9.16995C17.3099 9.45995 17.3099 9.93995 17.0199 10.23L12.8199 14.43C12.6599 14.59 12.4499 14.67 12.2199 14.65C11.9999 14.63 11.7999 14.51 11.6699 14.32L10.5799 12.68L8.02994 15.23C7.87994 15.38 7.68994 15.45 7.49994 15.45Z"
            fill="#222325"
          />
          <path
            d="M16.5 12.45C16.09 12.45 15.75 12.11 15.75 11.7V10.45H14.5C14.09 10.45 13.75 10.11 13.75 9.69995C13.75 9.28995 14.09 8.94995 14.5 8.94995H16.5C16.91 8.94995 17.25 9.28995 17.25 9.69995V11.7C17.25 12.11 16.91 12.45 16.5 12.45Z"
            fill="#222325"
          />
          <path
            d="M15 22.95H9C3.57 22.95 1.25 20.63 1.25 15.2V9.19995C1.25 3.76995 3.57 1.44995 9 1.44995H15C20.43 1.44995 22.75 3.76995 22.75 9.19995V15.2C22.75 20.63 20.43 22.95 15 22.95ZM9 2.94995C4.39 2.94995 2.75 4.58995 2.75 9.19995V15.2C2.75 19.81 4.39 21.45 9 21.45H15C19.61 21.45 21.25 19.81 21.25 15.2V9.19995C21.25 4.58995 19.61 2.94995 15 2.94995H9Z"
            fill="#292D32"
          />
        </svg>
      </>
    ),
  },
  {
    title_ar: "الكوبونات",
    title_en: "Coupons",
    url: "/coupons",
    url_tag: "coupons",
    svg_white: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M17 20.95H7C2.59 20.95 1.25 19.61 1.25 15.2V14.7C1.25 14.29 1.59 13.95 2 13.95C2.96 13.95 3.75 13.16 3.75 12.2C3.75 11.24 2.96 10.45 2 10.45C1.59 10.45 1.25 10.11 1.25 9.69995V9.19995C1.25 4.78995 2.59 3.44995 7 3.44995H17C21.41 3.44995 22.75 4.78995 22.75 9.19995V10.2C22.75 10.61 22.41 10.95 22 10.95C21.04 10.95 20.25 11.74 20.25 12.7C20.25 13.66 21.04 14.45 22 14.45C22.41 14.45 22.75 14.79 22.75 15.2C22.75 19.61 21.41 20.95 17 20.95ZM2.75 15.36C2.77 18.8 3.48 19.45 7 19.45H17C20.34 19.45 21.15 18.86 21.24 15.86C19.81 15.52 18.75 14.23 18.75 12.7C18.75 11.17 19.82 9.87995 21.25 9.53995V9.19995C21.25 5.62995 20.57 4.94995 17 4.94995H7C3.48 4.94995 2.77 5.59995 2.75 9.03995C4.18 9.37995 5.25 10.67 5.25 12.2C5.25 13.73 4.18 15.02 2.75 15.36Z"
            fill="#fff"
          />
          <path
            d="M15 16.08C14.44 16.08 13.99 15.63 13.99 15.08C13.99 14.53 14.44 14.08 14.99 14.08C15.54 14.08 15.99 14.53 15.99 15.08C15.99 15.63 15.56 16.08 15 16.08Z"
            fill="#fff"
          />
          <path
            d="M8.99999 11.08C8.43999 11.08 7.98999 10.63 7.98999 10.08C7.98999 9.52996 8.43999 9.07996 8.98999 9.07996C9.53999 9.07996 9.98999 9.52996 9.98999 10.08C9.98999 10.63 9.55999 11.08 8.99999 11.08Z"
            fill="#fff"
          />
          <path
            d="M8.63007 16.63C8.44007 16.63 8.25007 16.56 8.10007 16.41C7.81007 16.12 7.81007 15.64 8.10007 15.35L14.8301 8.61997C15.1201 8.32997 15.6001 8.32997 15.8901 8.61997C16.1801 8.90997 16.1801 9.38997 15.8901 9.67997L9.16007 16.41C9.02007 16.56 8.82007 16.63 8.63007 16.63Z"
            fill="#fff"
          />
        </svg>
      </>
    ),
    svg_black: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M17 20.95H7C2.59 20.95 1.25 19.61 1.25 15.2V14.7C1.25 14.29 1.59 13.95 2 13.95C2.96 13.95 3.75 13.16 3.75 12.2C3.75 11.24 2.96 10.45 2 10.45C1.59 10.45 1.25 10.11 1.25 9.69995V9.19995C1.25 4.78995 2.59 3.44995 7 3.44995H17C21.41 3.44995 22.75 4.78995 22.75 9.19995V10.2C22.75 10.61 22.41 10.95 22 10.95C21.04 10.95 20.25 11.74 20.25 12.7C20.25 13.66 21.04 14.45 22 14.45C22.41 14.45 22.75 14.79 22.75 15.2C22.75 19.61 21.41 20.95 17 20.95ZM2.75 15.36C2.77 18.8 3.48 19.45 7 19.45H17C20.34 19.45 21.15 18.86 21.24 15.86C19.81 15.52 18.75 14.23 18.75 12.7C18.75 11.17 19.82 9.87995 21.25 9.53995V9.19995C21.25 5.62995 20.57 4.94995 17 4.94995H7C3.48 4.94995 2.77 5.59995 2.75 9.03995C4.18 9.37995 5.25 10.67 5.25 12.2C5.25 13.73 4.18 15.02 2.75 15.36Z"
            fill="#222325"
          />
          <path
            d="M15 16.08C14.44 16.08 13.99 15.63 13.99 15.08C13.99 14.53 14.44 14.08 14.99 14.08C15.54 14.08 15.99 14.53 15.99 15.08C15.99 15.63 15.56 16.08 15 16.08Z"
            fill="#222325"
          />
          <path
            d="M8.99999 11.08C8.43999 11.08 7.98999 10.63 7.98999 10.08C7.98999 9.52996 8.43999 9.07996 8.98999 9.07996C9.53999 9.07996 9.98999 9.52996 9.98999 10.08C9.98999 10.63 9.55999 11.08 8.99999 11.08Z"
            fill="#222325"
          />
          <path
            d="M8.63007 16.63C8.44007 16.63 8.25007 16.56 8.10007 16.41C7.81007 16.12 7.81007 15.64 8.10007 15.35L14.8301 8.61997C15.1201 8.32997 15.6001 8.32997 15.8901 8.61997C16.1801 8.90997 16.1801 9.38997 15.8901 9.67997L9.16007 16.41C9.02007 16.56 8.82007 16.63 8.63007 16.63Z"
            fill="#292D32"
          />
        </svg>
      </>
    ),
  },
  {
    title_ar: "الباقات",
    title_en: "Packages",
    url: "/packages",
    url_tag: "packages",
    svg_white: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M16.6999 19.9299H7.29994C6.55994 19.9299 5.80994 19.3999 5.55994 18.7099L1.41993 7.11993C0.909935 5.65993 1.27993 4.98993 1.67993 4.68993C2.07993 4.38993 2.82994 4.20993 4.08994 5.10993L7.98993 7.89993C8.10993 7.96993 8.21994 7.99993 8.29994 7.97993C8.38994 7.94993 8.45994 7.86993 8.50994 7.72993L10.2699 3.03993C10.7999 1.63993 11.5799 1.42993 11.9999 1.42993C12.4199 1.42993 13.1999 1.63993 13.7299 3.03993L15.4899 7.72993C15.5399 7.85993 15.6099 7.94993 15.6999 7.97993C15.7899 8.00993 15.8999 7.97993 16.0099 7.88993L19.6699 5.27993C21.0099 4.31993 21.7899 4.50993 22.2199 4.81993C22.6399 5.13993 23.0299 5.84993 22.4799 7.39993L18.4399 18.7099C18.1899 19.3999 17.4399 19.9299 16.6999 19.9299ZM2.67994 6.00993C2.69994 6.14993 2.73993 6.34993 2.83993 6.60993L6.97994 18.1999C7.01994 18.2999 7.19994 18.4299 7.29994 18.4299H16.6999C16.8099 18.4299 16.9899 18.2999 17.0199 18.1999L21.0599 6.89993C21.1999 6.51993 21.2399 6.25993 21.2499 6.10993C21.0999 6.15993 20.8699 6.26993 20.5399 6.50993L16.8799 9.11993C16.3799 9.46993 15.7899 9.57993 15.2599 9.41993C14.7299 9.25993 14.2999 8.83993 14.0799 8.26993L12.3199 3.57993C12.1899 3.22993 12.0699 3.05993 11.9999 2.97993C11.9299 3.05993 11.8099 3.22993 11.6799 3.56993L9.91994 8.25993C9.70994 8.82993 9.27993 9.24993 8.73993 9.40993C8.20994 9.56993 7.60993 9.45993 7.11994 9.10993L3.21994 6.31993C2.98994 6.15993 2.80994 6.05993 2.67994 6.00993Z"
            fill="#fff"
          />
          <path
            d="M17.5 22.95H6.5C6.09 22.95 5.75 22.61 5.75 22.2C5.75 21.79 6.09 21.45 6.5 21.45H17.5C17.91 21.45 18.25 21.79 18.25 22.2C18.25 22.61 17.91 22.95 17.5 22.95Z"
            fill="#fff"
          />
          <path
            d="M14.5 14.95H9.5C9.09 14.95 8.75 14.61 8.75 14.2C8.75 13.79 9.09 13.45 9.5 13.45H14.5C14.91 13.45 15.25 13.79 15.25 14.2C15.25 14.61 14.91 14.95 14.5 14.95Z"
            fill="#fff"
          />
        </svg>
      </>
    ),
    svg_black: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M16.6999 19.9299H7.29994C6.55994 19.9299 5.80994 19.3999 5.55994 18.7099L1.41993 7.11993C0.909935 5.65993 1.27993 4.98993 1.67993 4.68993C2.07993 4.38993 2.82994 4.20993 4.08994 5.10993L7.98993 7.89993C8.10993 7.96993 8.21994 7.99993 8.29994 7.97993C8.38994 7.94993 8.45994 7.86993 8.50994 7.72993L10.2699 3.03993C10.7999 1.63993 11.5799 1.42993 11.9999 1.42993C12.4199 1.42993 13.1999 1.63993 13.7299 3.03993L15.4899 7.72993C15.5399 7.85993 15.6099 7.94993 15.6999 7.97993C15.7899 8.00993 15.8999 7.97993 16.0099 7.88993L19.6699 5.27993C21.0099 4.31993 21.7899 4.50993 22.2199 4.81993C22.6399 5.13993 23.0299 5.84993 22.4799 7.39993L18.4399 18.7099C18.1899 19.3999 17.4399 19.9299 16.6999 19.9299ZM2.67994 6.00993C2.69994 6.14993 2.73993 6.34993 2.83993 6.60993L6.97994 18.1999C7.01994 18.2999 7.19994 18.4299 7.29994 18.4299H16.6999C16.8099 18.4299 16.9899 18.2999 17.0199 18.1999L21.0599 6.89993C21.1999 6.51993 21.2399 6.25993 21.2499 6.10993C21.0999 6.15993 20.8699 6.26993 20.5399 6.50993L16.8799 9.11993C16.3799 9.46993 15.7899 9.57993 15.2599 9.41993C14.7299 9.25993 14.2999 8.83993 14.0799 8.26993L12.3199 3.57993C12.1899 3.22993 12.0699 3.05993 11.9999 2.97993C11.9299 3.05993 11.8099 3.22993 11.6799 3.56993L9.91994 8.25993C9.70994 8.82993 9.27993 9.24993 8.73993 9.40993C8.20994 9.56993 7.60993 9.45993 7.11994 9.10993L3.21994 6.31993C2.98994 6.15993 2.80994 6.05993 2.67994 6.00993Z"
            fill="#222325"
          />
          <path
            d="M17.5 22.95H6.5C6.09 22.95 5.75 22.61 5.75 22.2C5.75 21.79 6.09 21.45 6.5 21.45H17.5C17.91 21.45 18.25 21.79 18.25 22.2C18.25 22.61 17.91 22.95 17.5 22.95Z"
            fill="#222325"
          />
          <path
            d="M14.5 14.95H9.5C9.09 14.95 8.75 14.61 8.75 14.2C8.75 13.79 9.09 13.45 9.5 13.45H14.5C14.91 13.45 15.25 13.79 15.25 14.2C15.25 14.61 14.91 14.95 14.5 14.95Z"
            fill="#222325"
          />
        </svg>
      </>
    ),
  },
  {
    title_ar: "الدفع",
    title_en: "Payments",
    url: "/payments",
    url_tag: "payments",
    svg_white: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M22 9.44995H2C1.59 9.44995 1.25 9.10995 1.25 8.69995C1.25 8.28995 1.59 7.94995 2 7.94995H22C22.41 7.94995 22.75 8.28995 22.75 8.69995C22.75 9.10995 22.41 9.44995 22 9.44995Z"
            fill="#fff"
          />
          <path
            d="M8 17.45H6C5.59 17.45 5.25 17.11 5.25 16.7C5.25 16.29 5.59 15.95 6 15.95H8C8.41 15.95 8.75 16.29 8.75 16.7C8.75 17.11 8.41 17.45 8 17.45Z"
            fill="#fff"
          />
          <path
            d="M14.5 17.45H10.5C10.09 17.45 9.75 17.11 9.75 16.7C9.75 16.29 10.09 15.95 10.5 15.95H14.5C14.91 15.95 15.25 16.29 15.25 16.7C15.25 17.11 14.91 17.45 14.5 17.45Z"
            fill="#fff"
          />
          <path
            d="M17.56 21.45H6.44C2.46 21.45 1.25 20.25 1.25 16.31V8.08995C1.25 4.14995 2.46 2.94995 6.44 2.94995H17.55C21.53 2.94995 22.74 4.14995 22.74 8.08995V16.3C22.75 20.25 21.54 21.45 17.56 21.45ZM6.44 4.44995C3.3 4.44995 2.75 4.98995 2.75 8.08995V16.3C2.75 19.4 3.3 19.94 6.44 19.94H17.55C20.69 19.94 21.24 19.4 21.24 16.3V8.08995C21.24 4.98995 20.69 4.44995 17.55 4.44995H6.44Z"
            fill="#fff"
          />
        </svg>
      </>
    ),
    svg_black: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M22 9.44995H2C1.59 9.44995 1.25 9.10995 1.25 8.69995C1.25 8.28995 1.59 7.94995 2 7.94995H22C22.41 7.94995 22.75 8.28995 22.75 8.69995C22.75 9.10995 22.41 9.44995 22 9.44995Z"
            fill="#222325"
          />
          <path
            d="M8 17.45H6C5.59 17.45 5.25 17.11 5.25 16.7C5.25 16.29 5.59 15.95 6 15.95H8C8.41 15.95 8.75 16.29 8.75 16.7C8.75 17.11 8.41 17.45 8 17.45Z"
            fill="#222325"
          />
          <path
            d="M14.5 17.45H10.5C10.09 17.45 9.75 17.11 9.75 16.7C9.75 16.29 10.09 15.95 10.5 15.95H14.5C14.91 15.95 15.25 16.29 15.25 16.7C15.25 17.11 14.91 17.45 14.5 17.45Z"
            fill="#222325"
          />
          <path
            d="M17.56 21.45H6.44C2.46 21.45 1.25 20.25 1.25 16.31V8.08995C1.25 4.14995 2.46 2.94995 6.44 2.94995H17.55C21.53 2.94995 22.74 4.14995 22.74 8.08995V16.3C22.75 20.25 21.54 21.45 17.56 21.45ZM6.44 4.44995C3.3 4.44995 2.75 4.98995 2.75 8.08995V16.3C2.75 19.4 3.3 19.94 6.44 19.94H17.55C20.69 19.94 21.24 19.4 21.24 16.3V8.08995C21.24 4.98995 20.69 4.44995 17.55 4.44995H6.44Z"
            fill="#222325"
          />
        </svg>
      </>
    ),
  },
  {
    title_ar: "الاعدادات",
    title_en: "Settings",
    url: "/settings",
    url_tag: "settings",
    svg_white: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M12 15.95C9.93 15.95 8.25 14.27 8.25 12.2C8.25 10.13 9.93 8.44995 12 8.44995C14.07 8.44995 15.75 10.13 15.75 12.2C15.75 14.27 14.07 15.95 12 15.95ZM12 9.94995C10.76 9.94995 9.75 10.96 9.75 12.2C9.75 13.44 10.76 14.45 12 14.45C13.24 14.45 14.25 13.44 14.25 12.2C14.25 10.96 13.24 9.94995 12 9.94995Z"
            fill="#fff"
          />
          <path
            d="M15.21 22.3899C15 22.3899 14.79 22.3599 14.58 22.3099C13.96 22.1399 13.44 21.7499 13.11 21.1999L12.99 20.9999C12.4 19.9799 11.59 19.9799 11 20.9999L10.89 21.1899C10.56 21.7499 10.04 22.1499 9.42 22.3099C8.79 22.4799 8.14 22.3899 7.59 22.0599L5.87 21.0699C5.26 20.7199 4.82 20.1499 4.63 19.4599C4.45 18.7699 4.54 18.0599 4.89 17.4499C5.18 16.9399 5.26 16.4799 5.09 16.1899C4.92 15.8999 4.49 15.7299 3.9 15.7299C2.44 15.7299 1.25 14.5399 1.25 13.0799V11.3199C1.25 9.85993 2.44 8.66993 3.9 8.66993C4.49 8.66993 4.92 8.49993 5.09 8.20993C5.26 7.91993 5.19 7.45993 4.89 6.94993C4.54 6.33993 4.45 5.61993 4.63 4.93993C4.81 4.24993 5.25 3.67993 5.87 3.32993L7.6 2.33993C8.73 1.66993 10.22 2.05993 10.9 3.20993L11.02 3.40993C11.61 4.42993 12.42 4.42993 13.01 3.40993L13.12 3.21993C13.8 2.05993 15.29 1.66993 16.43 2.34993L18.15 3.33993C18.76 3.68993 19.2 4.25993 19.39 4.94993C19.57 5.63993 19.48 6.34993 19.13 6.95993C18.84 7.46993 18.76 7.92993 18.93 8.21993C19.1 8.50993 19.53 8.67993 20.12 8.67993C21.58 8.67993 22.77 9.86993 22.77 11.3299V13.0899C22.77 14.5499 21.58 15.7399 20.12 15.7399C19.53 15.7399 19.1 15.9099 18.93 16.1999C18.76 16.4899 18.83 16.9499 19.13 17.4599C19.48 18.0699 19.58 18.7899 19.39 19.4699C19.21 20.1599 18.77 20.7299 18.15 21.0799L16.42 22.0699C16.04 22.2799 15.63 22.3899 15.21 22.3899ZM12 18.6899C12.89 18.6899 13.72 19.2499 14.29 20.2399L14.4 20.4299C14.52 20.6399 14.72 20.7899 14.96 20.8499C15.2 20.9099 15.44 20.8799 15.64 20.7599L17.37 19.7599C17.63 19.6099 17.83 19.3599 17.91 19.0599C17.99 18.7599 17.95 18.4499 17.8 18.1899C17.23 17.2099 17.16 16.1999 17.6 15.4299C18.04 14.6599 18.95 14.2199 20.09 14.2199C20.73 14.2199 21.24 13.7099 21.24 13.0699V11.3099C21.24 10.6799 20.73 10.1599 20.09 10.1599C18.95 10.1599 18.04 9.71993 17.6 8.94993C17.16 8.17993 17.23 7.16993 17.8 6.18993C17.95 5.92993 17.99 5.61993 17.91 5.31993C17.83 5.01993 17.64 4.77993 17.38 4.61993L15.65 3.62993C15.22 3.36993 14.65 3.51993 14.39 3.95993L14.28 4.14993C13.71 5.13993 12.88 5.69993 11.99 5.69993C11.1 5.69993 10.27 5.13993 9.7 4.14993L9.59 3.94993C9.34 3.52993 8.78 3.37993 8.35 3.62993L6.62 4.62993C6.36 4.77993 6.16 5.02993 6.08 5.32993C6 5.62993 6.04 5.93993 6.19 6.19993C6.76 7.17993 6.83 8.18993 6.39 8.95993C5.95 9.72993 5.04 10.1699 3.9 10.1699C3.26 10.1699 2.75 10.6799 2.75 11.3199V13.0799C2.75 13.7099 3.26 14.2299 3.9 14.2299C5.04 14.2299 5.95 14.6699 6.39 15.4399C6.83 16.2099 6.76 17.2199 6.19 18.1999C6.04 18.4599 6 18.7699 6.08 19.0699C6.16 19.3699 6.35 19.6099 6.61 19.7699L8.34 20.7599C8.55 20.8899 8.8 20.9199 9.03 20.8599C9.27 20.7999 9.47 20.6399 9.6 20.4299L9.71 20.2399C10.28 19.2599 11.11 18.6899 12 18.6899Z"
            fill="#fff"
          />
        </svg>
      </>
    ),
    svg_black: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M12 15.95C9.93 15.95 8.25 14.27 8.25 12.2C8.25 10.13 9.93 8.44995 12 8.44995C14.07 8.44995 15.75 10.13 15.75 12.2C15.75 14.27 14.07 15.95 12 15.95ZM12 9.94995C10.76 9.94995 9.75 10.96 9.75 12.2C9.75 13.44 10.76 14.45 12 14.45C13.24 14.45 14.25 13.44 14.25 12.2C14.25 10.96 13.24 9.94995 12 9.94995Z"
            fill="#222325"
          />
          <path
            d="M15.21 22.3899C15 22.3899 14.79 22.3599 14.58 22.3099C13.96 22.1399 13.44 21.7499 13.11 21.1999L12.99 20.9999C12.4 19.9799 11.59 19.9799 11 20.9999L10.89 21.1899C10.56 21.7499 10.04 22.1499 9.42 22.3099C8.79 22.4799 8.14 22.3899 7.59 22.0599L5.87 21.0699C5.26 20.7199 4.82 20.1499 4.63 19.4599C4.45 18.7699 4.54 18.0599 4.89 17.4499C5.18 16.9399 5.26 16.4799 5.09 16.1899C4.92 15.8999 4.49 15.7299 3.9 15.7299C2.44 15.7299 1.25 14.5399 1.25 13.0799V11.3199C1.25 9.85993 2.44 8.66993 3.9 8.66993C4.49 8.66993 4.92 8.49993 5.09 8.20993C5.26 7.91993 5.19 7.45993 4.89 6.94993C4.54 6.33993 4.45 5.61993 4.63 4.93993C4.81 4.24993 5.25 3.67993 5.87 3.32993L7.6 2.33993C8.73 1.66993 10.22 2.05993 10.9 3.20993L11.02 3.40993C11.61 4.42993 12.42 4.42993 13.01 3.40993L13.12 3.21993C13.8 2.05993 15.29 1.66993 16.43 2.34993L18.15 3.33993C18.76 3.68993 19.2 4.25993 19.39 4.94993C19.57 5.63993 19.48 6.34993 19.13 6.95993C18.84 7.46993 18.76 7.92993 18.93 8.21993C19.1 8.50993 19.53 8.67993 20.12 8.67993C21.58 8.67993 22.77 9.86993 22.77 11.3299V13.0899C22.77 14.5499 21.58 15.7399 20.12 15.7399C19.53 15.7399 19.1 15.9099 18.93 16.1999C18.76 16.4899 18.83 16.9499 19.13 17.4599C19.48 18.0699 19.58 18.7899 19.39 19.4699C19.21 20.1599 18.77 20.7299 18.15 21.0799L16.42 22.0699C16.04 22.2799 15.63 22.3899 15.21 22.3899ZM12 18.6899C12.89 18.6899 13.72 19.2499 14.29 20.2399L14.4 20.4299C14.52 20.6399 14.72 20.7899 14.96 20.8499C15.2 20.9099 15.44 20.8799 15.64 20.7599L17.37 19.7599C17.63 19.6099 17.83 19.3599 17.91 19.0599C17.99 18.7599 17.95 18.4499 17.8 18.1899C17.23 17.2099 17.16 16.1999 17.6 15.4299C18.04 14.6599 18.95 14.2199 20.09 14.2199C20.73 14.2199 21.24 13.7099 21.24 13.0699V11.3099C21.24 10.6799 20.73 10.1599 20.09 10.1599C18.95 10.1599 18.04 9.71993 17.6 8.94993C17.16 8.17993 17.23 7.16993 17.8 6.18993C17.95 5.92993 17.99 5.61993 17.91 5.31993C17.83 5.01993 17.64 4.77993 17.38 4.61993L15.65 3.62993C15.22 3.36993 14.65 3.51993 14.39 3.95993L14.28 4.14993C13.71 5.13993 12.88 5.69993 11.99 5.69993C11.1 5.69993 10.27 5.13993 9.7 4.14993L9.59 3.94993C9.34 3.52993 8.78 3.37993 8.35 3.62993L6.62 4.62993C6.36 4.77993 6.16 5.02993 6.08 5.32993C6 5.62993 6.04 5.93993 6.19 6.19993C6.76 7.17993 6.83 8.18993 6.39 8.95993C5.95 9.72993 5.04 10.1699 3.9 10.1699C3.26 10.1699 2.75 10.6799 2.75 11.3199V13.0799C2.75 13.7099 3.26 14.2299 3.9 14.2299C5.04 14.2299 5.95 14.6699 6.39 15.4399C6.83 16.2099 6.76 17.2199 6.19 18.1999C6.04 18.4599 6 18.7699 6.08 19.0699C6.16 19.3699 6.35 19.6099 6.61 19.7699L8.34 20.7599C8.55 20.8899 8.8 20.9199 9.03 20.8599C9.27 20.7999 9.47 20.6399 9.6 20.4299L9.71 20.2399C10.28 19.2599 11.11 18.6899 12 18.6899Z"
            fill="#222325"
          />
        </svg>
      </>
    ),
  },
];
const SideBar = () => {
  return (
      <div className="bg-white min-w-[236px] py-[24px] px-[16px] flex flex-col gap-[40px] h-[120vh]">
        <Image
          src={
            "https://res.cloudinary.com/freelancer3223/image/upload/v1710695066/thebtalk_images/logo_x9b6tp.svg"
          }
          width={104}
          height={83}
          alt="logo"
          priority
          className="mx-auto"
        />
        <ul className="flex flex-col gap-[16px]">
          {links.map((link) => (
            <li key={link.url}>
              <SideLink data={link} />
            </li>
          ))}
        </ul>
      </div>

  );
};

export default React.memo(SideBar);