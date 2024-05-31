"use client";
import React, { useState } from "react";

import EmptyData from "@/components/ui/EmptyData";

import AddButton from "../account/bills/AddButton";
import Item from "./Item";
import { useLocale, useTranslations } from "next-intl";

const galleryData = [
  {
    title: "بعد تنفيذ المخطط",
    images: [
      "https://res.cloudinary.com/freelancer3223/image/upload/v1711671865/thebtalk_images/Video_1_rf71kx.svg",
    ],
    videos: [],
  },
  {
    title: "بعد تنفيذ المخطط",
    images: [],
    videos: [
      "https://res.cloudinary.com/freelancer3223/video/upload/v1711674660/thebtalk_images/Dental_Ad_Video_Template_Editable_2_f0wekb.mp4",
    ],
  },
  {
    title: "قبل تنفيذ المخطط",
    images: [
      "https://res.cloudinary.com/freelancer3223/image/upload/v1711671865/thebtalk_images/Video_1_rf71kx.svg",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1711671868/thebtalk_images/3ad7e02619d258cb6ddc4459bc1a3126_edtuxt.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1711716896/thebtalk_images/b127551e9f2b8e3351b18124e16ecc67_pweaiw.png",
    ],
    videos: [],
  },
  {
    title: "بعد تنفيذ المخطط",
    images: [
      "https://res.cloudinary.com/freelancer3223/image/upload/v1711671865/thebtalk_images/Video_1_rf71kx.svg",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1711671868/thebtalk_images/3ad7e02619d258cb6ddc4459bc1a3126_edtuxt.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1711716896/thebtalk_images/b127551e9f2b8e3351b18124e16ecc67_pweaiw.png",
    ],
    videos: [
      "https://res.cloudinary.com/freelancer3223/video/upload/v1711674660/thebtalk_images/Dental_Ad_Video_Template_Editable_2_f0wekb.mp4",
    ],
  },
];
const reversed = galleryData.reverse();
const Container = () => {
  const [gallery, setGallery] = useState(reversed);
  const t = useTranslations("gallery");
  const lang = useLocale();
  return (
    <div className="mx-[24px] mt-[16px]">
      <AddButton href={`/${lang}/gallery/add`} text={t("add-image")} />
      {gallery.length > 0 ? (
        <div className="flex flex-col gap-[16px] mt-[16px]">
          {gallery.map((el, i) => (
            <Item key={i} data={el} />
          ))}
        </div>
      ) : (
        <EmptyData message={t("empty")} className="pt-[3vh]" />
      )}
    </div>
  );
};

export default Container;
