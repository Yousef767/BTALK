"use client";
import React, { useRef, useEffect, useState } from "react";
import Card from "./Card";
// Import Swiper React components

import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import Details from "./packageDetails/Details";
import { AnimatePresence } from "framer-motion";

const initPackages = [
  {
    id: "123",
    type: "dentist",
    title_ar: "موعد اسنان",
    title_en: "dentist visit",
    description_ar:
      "إستشارة شخصية مدتها من ٢٠ الي ٣٠ دقيقه في مكتب شركة thebtalk لرسم مخطط تجميلي حسب نظرية الخطوط والدوائر لكامل الوجه ومتابعة تنفيذه.",
    description_en:
      "A personal consultation lasting 20 to 30 minutes at thebtalk company’s office to draw a cosmetic plan according to the theory of lines and circles for the entire face and follow up on its implementation.",
    price: 150,
    details: {
      bgImage:
        "https://res.cloudinary.com/freelancer3223/image/upload/v1711848049/thebtalk_images/img_1_j8pvvd.svg",
      title_ar: "موعد اسنان",
      title_en: "dentist visit",
      descriptions_ar: [
        "إستشارة شخصية مدتها من ٢٠ الي ٣٠ دقيقه في مكتب شركة thebtalk لرسم مخطط تجميلي حسب نظرية الخطوط والدوائر لكامل الوجه ومتابعة تنفيذه.",
        "زيارتين مجانيتين مع العميلة للعيادة المقترحة لتطبيق الخطة ومتابعتها أول شهرين في حال الموافقة علي تطبيق الخطة.",
        "في حال تطبيق الخطة التجميلية قبل انتهاء فتره صلاحيتها يتم تفعيل مواعيد الصيانه لمده سنه من تاريخ الاستشارة (سعر موعد الصيانه 150 دك يمكنكم حجزه عن طريق باقة خطه متابعة )",
        "مرافقه شخصية الي عياده خاصة ملائمة لتطبيق المخطط.",
      ],
      descriptions_en: [
        "A personal consultation lasting 20 to 30 minutes at thebtalk company’s office to draw a cosmetic plan according to the theory of lines and circles for the entire face and follow up on its implementation.",
        "Two free visits with the client to the proposed clinic to implement the plan and follow up on it for the first two months if the plan is approved.",
        "If the cosmetic plan is applied before the expiration of its validity period, maintenance appointments will be activated for one year from the date of the consultation (the price of the maintenance appointment is 150 KD. You can book it through a follow-up plan package).",
        "Personal accompaniment to a private clinic suitable for applying the plan.",
      ],
    },
  },
  {
    id: "12344",
    type: "construction",
    title_ar: "بـــــاقة الاستشـــــارة",
    title_en: "Consultation Package",
    steps: [
      {
        type: "consultation",
        title_ar: "استشارة بالمكتب",
        title_en: "In-office consultation",
        doneIn: "2020-11-20T10:36:01.516Z",
        process: "done",
      },
      {
        type: "visit",
        title_ar: "زيارة لتنفيذ المخطط",
        title_en: "Visit to implement the plan",
        doneIn: "",
        process: "active",
      },
      {
        type: "visit",
        title_ar: "زيارة مراجعة",
        title_en: "Review visit",
        doneIn: "",
        process: "later",
      },
    ],
  },
  {
    id: "12365",
    type: "operation",
    title_ar: "موعد عملية",
    title_en: "Operation visit",
    description_ar:
      "إستشارة شخصية مدتها من ٢٠ الي ٣٠ دقيقه في مكتب شركة thebtalk لرسم مخطط تجميلي حسب نظرية الخطوط والدوائر لكامل الوجه ومتابعة تنفيذه.",
    description_en:
      "A personal consultation lasting 20 to 30 minutes at thebtalk company’s office to draw a cosmetic plan according to the theory of lines and circles for the entire face and follow up on its implementation.",
    price: 150,
    details: {
      bgImage: "",
      title_ar: "موعد عملية ",
      title_en: "Operation visit",
      descriptions_ar: [
        "إستشارة شخصية مدتها من ٢٠ الي ٣٠ دقيقه في مكتب شركة thebtalk لرسم مخطط تجميلي حسب نظرية الخطوط والدوائر لكامل الوجه ومتابعة تنفيذه.",
        "زيارتين مجانيتين مع العميلة للعيادة المقترحة لتطبيق الخطة ومتابعتها أول شهرين في حال الموافقة علي تطبيق الخطة.",
        "في حال تطبيق الخطة التجميلية قبل انتهاء فتره صلاحيتها يتم تفعيل مواعيد الصيانه لمده سنه من تاريخ الاستشارة (سعر موعد الصيانه 150 دك يمكنكم حجزه عن طريق باقة خطه متابعة )",
        "مرافقه شخصية الي عياده خاصة ملائمة لتطبيق المخطط.",
      ],
      descriptions_en: [
        "A personal consultation lasting 20 to 30 minutes at thebtalk company’s office to draw a cosmetic plan according to the theory of lines and circles for the entire face and follow up on its implementation.",
        "Two free visits with the client to the proposed clinic to implement the plan and follow up on it for the first two months if the plan is approved.",
        "If the cosmetic plan is applied before the expiration of its validity period, maintenance appointments will be activated for one year from the date of the consultation (the price of the maintenance appointment is 150 KD. You can book it through a follow-up plan package).",
        "Personal accompaniment to a private clinic suitable for applying the plan.",
      ],
    },
  },
];
const Packages = () => {
  const [packageDetails, setPackageDetails] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = new Swiper(swiperRef.current, {
      slidesPerView: "auto", // Initial slides per view
      centeredSlides: true,
      spaceBetween: 16,
      initialSlide: 1,
      speed: 1000,
      breakpoints: {
        360: {
          slidesPerView: 1.25,
        },
        375: {
          slidesPerView: 1.31,
        },

        390: {
          slidesPerView: 1.35,
        },
        414: {
          slidesPerView: 1.435,
        },
        430: {
          slidesPerView: 1.49,
        },
        450: {
          slidesPerView: 1.55,
        },
      },

      // Add more options as needed
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      <div className="">
        <div
          className="swiper-container h-[432px] swiper swiper-initialized swiper-horizontal swiper-rtl swiper-ios swiper-backface homeSwiper"
          ref={swiperRef}
        >
          <div className="swiper-wrapper h-full">
            {initPackages.map((pack, i) => (
              <div key={i} className="swiper-slide">
                {" "}
                <Card data={pack} clickHandler={(e) => setPackageDetails(e)} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {packageDetails && (
          <Details
            data={packageDetails}
            closeHandler={() => setPackageDetails(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Packages;
