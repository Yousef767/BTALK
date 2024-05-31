import React, { useState } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Show from "./Show";
import { AnimatePresence } from "framer-motion";

const Item = ({ data, activeImage }) => {
  const [activeVid, setActiveVid] = useState("");
  const [activeImg, setActiveImg] = useState("");
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="px-[8px] pt-[12px] pb-[4px] flex flex-col gap-[4px] bg-white rounded-[24px] ">
        <div className="flex items-center justify-between gap-[8px]  px-[8px] ">
          <p className="text-primary1 font-[500] leading-[150%] ">
            {data.title}
          </p>

          <a href={activeImage} download="true">
            <Image
              src={
                "https://res.cloudinary.com/freelancer3223/image/upload/v1711538788/thebtalk_images/import_as0tfl.svg"
              }
              width={20}
              height={20}
              priority
              alt="download"
            />
          </a>
        </div>

        {/* slider  */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          spaceBetween={10}
          slidesPerView={1}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          loop
          className="w-full rounded-[16px] pb-[28px] h-[215px]"
        >
          {data.videos.map((vid, i) => (
            <SwiperSlide key={i}>
              <div
                className={`w-full h-[197px] bg-center bg-no-repeat bg-cover rounded-[16px] overflow-hidden `}
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/freelancer3223/image/upload/v1711676025/thebtalk_images/Video_2_jpren7.svg)`,
                }}
                onClick={() => {
                  setActiveVid(vid);
                  setActive(true);
                }}
              />
            </SwiperSlide>
          ))}
          {data.images.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className={`w-full h-[197px] bg-center bg-no-repeat bg-cover rounded-[16px] overflow-hidden`}
                style={{
                  backgroundImage: `url(${img})`,
                }}
                onClick={() => {
                  setActiveImg(img);
                  setActive(true);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <AnimatePresence mode="wait">
        {active && (
          <Show
            video={activeVid}
            image={activeImg}
            close={() => {
              setActiveImg("");
              setActiveVid("");
              setActive(false);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Item;
