"use client";
import ChatItem from "./ChatItem";
import Header from "./Header";
import React, { useEffect, useState } from "react";

const data = [
  {
    userId: "1",
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_obvhly.png",
    name: "جورى حمدان",
    date: "2024-04-15T21:13:32.443Z",
    messages: [
      { id: "1", message: "not real message", image: false },
      { id: "12", message: "not real message", image: false },
      { id: "133", message: "image", image: true },
    ],
  },
  {
    userId: "1",
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_1_x4xurr.png",
    name: "ايمان احمد صلاح",
    date: "2024-04-15T21:13:32.443Z",
    messages: [
      { id: "1", message: "not real message", image: false },
      { id: "12", message: "not real message", image: false },
    ],
  },
  {
    userId: "1",
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201787/thebtalk_images/Face_1_2_k9orvh.png",
    name: "كاميليا مسعود",
    date: "2024-04-15T21:13:32.443Z",
    messages: [
      { id: "1", message: "not real message", image: false },
      { id: "12", message: "not real message", image: false },
      { id: "12", message: "not real message", image: false },
      { id: "12", message: "not real message", image: false },
    ],
  },
  {
    userId: "1",
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201786/thebtalk_images/Face_1_3_f0ix2m.png",
    name: "صوفيا جرجس",
    date: "2024-04-15T21:13:32.443Z",
    messages: [
      { id: "1", message: "not real message", image: false },
      { id: "12", message: "not real message", image: false },
      { id: "133", message: "image", image: true },
    ],
  },
  {
    userId: "1",
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201786/thebtalk_images/Face_1_6_hqrpcl.png",
    name: "ايلا ياسر",
    date: "2024-04-15T21:13:32.443Z",
    messages: [
      { id: "1", message: "not real message", image: false },
      { id: "12", message: "not real message", image: false },
      { id: "12", message: "not real message", image: false },
    ],
  },
  {
    userId: "1",
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201786/thebtalk_images/Face_1_7_pqabgc.png",
    name: "",
    date: "2024-04-15T21:13:32.443Z",
    messages: [
      { id: "1", message: "not real message", image: false },
      { id: "12", message: "not real message", image: false },
      { id: "133", message: "image", image: true },
    ],
  },
  {
    userId: "1",
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_obvhly.png",
    name: "جورى حمدان",
    date: "2024-04-15T21:13:32.443Z",
    messages: [
      { id: "1", message: "not real message", image: false },
      { id: "12", message: "not real message", image: false },
      { id: "133", message: "image", image: true },
    ],
  },
  {
    userId: "1",
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_obvhly.png",
    name: "جورى حمدان",
    date: "2024-04-15T21:13:32.443Z",
    messages: [
      { id: "1", message: "not real message", image: false },
      { id: "12", message: "not real message", image: false },
      { id: "12", message: "not real message", image: false },
      { id: "12", message: "not real message", image: false },
    ],
  },
  {
    userId: "1",
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_obvhly.png",
    name: "جورى حمدان",
    date: "2024-04-15T21:13:32.443Z",
    messages: [
      { id: "1", message: "not real message", image: false },
      { id: "12", message: "not real message", image: false },
    ],
  },
  {
    userId: "1",
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_obvhly.png",
    name: "جورى حمدان",
    date: "2024-04-15T21:13:32.443Z",
    messages: [
      { id: "1", message: "not real message", image: false },
      { id: "12", message: "not real message", image: false },
    ],
  },
];
const Chats = () => {
  const [filterdData, setFilterdData] = useState(data);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue.length > 0) {
      const filter = filterdData.filter((el) =>
        el.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilterdData(filter);
    } else {
      setFilterdData(data);
    }
  }, [searchValue]);

  return (
    <div className="pt-[24px]  flex flex-col  rounded-[24px_24px_0px_0px] bg-white w-[430px] overflow-auto h-full">
      <Header />
      <div className=" relative h-[56px] px-[16px] mt-[24px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          className="absolute top-0 h-full right-[32px] pointer-events-none"
        >
          <path
            d="M15.3334 29.7713C7.80008 29.7713 1.66675 23.6379 1.66675 16.1046C1.66675 8.57126 7.80008 2.43793 15.3334 2.43793C22.8667 2.43793 29.0001 8.57126 29.0001 16.1046C29.0001 23.6379 22.8667 29.7713 15.3334 29.7713ZM15.3334 4.43793C8.89341 4.43793 3.66675 9.67793 3.66675 16.1046C3.66675 22.5313 8.89341 27.7713 15.3334 27.7713C21.7734 27.7713 27.0001 22.5313 27.0001 16.1046C27.0001 9.67793 21.7734 4.43793 15.3334 4.43793Z"
            fill="#D3D3D9"
          />
          <path
            d="M29.3333 31.1046C29.0799 31.1046 28.8266 31.0112 28.6266 30.8112L25.9599 28.1446C25.5733 27.7579 25.5733 27.1179 25.9599 26.7312C26.3466 26.3446 26.9866 26.3446 27.3733 26.7312L30.0399 29.3979C30.4266 29.7846 30.4266 30.4246 30.0399 30.8112C29.8399 31.0112 29.5866 31.1046 29.3333 31.1046Z"
            fill="#D3D3D9"
          />
        </svg>
        <input
          type="text"
          className={`outline-none w-full h-[56px] rounded-[16px] border-[1px] border-secondary6 leading-[56px] pr-[56px] pl-[128px] placeholder:text-secondary3 placeholder:text-[19px] placeholder:font-[500]
          text-primary1 text-[19px] font-[500]  focus:border-primary3 transition-all ${
            searchValue.length > 0 ? "bg-white" : " bg-secondary7"
          }`}
          placeholder="ابحث هنا.............."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className={`w-[120px] h-full flex items-center justify-center disabled:text-secondary4 font-[700] absolute top-0 left-[16px] disabled:bg-transparent bg-primary3 text-white rounded-[16px]`}
          disabled={searchValue.length < 1}
        >
          ابحث
        </button>
      </div>
      <div className="px-[16px] overflow-auto hideScroll pb-[20px]">
        {filterdData.map((el, i) => (
          <ChatItem key={i} data={el} />
        ))}
      </div>
    </div>
  );
};

export default Chats;
