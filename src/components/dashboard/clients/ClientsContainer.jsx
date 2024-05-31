"use client";
import React, { useState, useEffect } from "react";
import Item from "../coupons/header/Item";
import Client from "./Client";

const usersData = [
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_obvhly.png",
    name: "جورى حمدان",
    client_number: "12345",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الكويت",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_1_x4xurr.png",
    name: " ايمان احمد صلاح",
    client_number: "12300",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الاردن",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201787/thebtalk_images/Face_1_2_k9orvh.png",
    name: " كاميليا مسعود",
    client_number: "12045",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الكويت",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201786/thebtalk_images/Face_1_3_f0ix2m.png",
    name: " صوفيا جرجس",
    client_number: "12395",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الامارات",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_1_x4xurr.png",
    name: " ايلا ياسر",
    client_number: "12345",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الكويت",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201786/thebtalk_images/Face_1_6_hqrpcl.png",
    name: "جورى حمدان",
    client_number: "12345",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الامارات",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201786/thebtalk_images/Face_1_7_pqabgc.png",
    name: "جورى حمدان",
    client_number: "12345",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الكويت",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_obvhly.png",
    name: "جورى حمدان",
    client_number: "13345",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok3@gmail.com",
    country: "الكويت",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_1_x4xurr.png",
    name: " ايمان احمد صلاح",
    client_number: "11345",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الكويت",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201787/thebtalk_images/Face_1_2_k9orvh.png",
    name: " كاميليا مسعود",
    client_number: "12315",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الكويت",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201786/thebtalk_images/Face_1_3_f0ix2m.png",
    name: " صوفيا جرجس",
    client_number: "12325",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الكويت",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_1_x4xurr.png",
    name: " ايلا ياسر",
    client_number: "12322",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الامارات",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201786/thebtalk_images/Face_1_6_hqrpcl.png",
    name: "جورى حمدان",
    client_number: "12234",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الكويت",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201786/thebtalk_images/Face_1_7_pqabgc.png",
    name: "جورى حمدان",
    client_number: "14431",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الكويت",
  },
];

const ClientsContainer = () => {
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([]);

  const clickHandler = () => {
    const filtered = usersData.filter(
      (el) =>
        el.client_number.toLowerCase().includes(searchValue) ||
        el.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        el.email.toLowerCase().includes(searchValue.toLowerCase()) ||
        el.mobile.includes(searchValue) ||
        el.country.toLowerCase().includes(searchValue.toLowerCase())
    );
    setUsers([...filtered]);
  };
  useEffect(() => {
    if (searchValue.length < 1) {
      setUsers(usersData);
    }
  }, [searchValue]);
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <div className="grid grid-cols-3 gap-[24px] my-[24px]">
        <Item
          title={"العملاء"}
          number={1522}
          image={
            "https://res.cloudinary.com/dachf1ak7/image/upload/v1716216313/user_cq2ba0.svg"
          }
        />
        <Item
          title={"العملاء النشطين"}
          number={25}
          image={
            "https://res.cloudinary.com/dachf1ak7/image/upload/v1716216413/user-tick_qihjd7.svg"
          }
        />
        <Item
          title={"عملاء غير نشيطين"}
          number={500}
          image={
            "https://res.cloudinary.com/dachf1ak7/image/upload/v1716216436/user-remove_ncfdsr.svg"
          }
        />
      </div>
      <div className="flex flex-col gap-[24px] flex-1 bg-white rounded-[24px_24px_0px_0px] py-[24px]  overflow-auto hideScroll">
        <p className="text-secondary2 text-[24px] font-[500] mx-[24px] ">
          العملاء
        </p>
        {/* search  */}
        <div className=" relative h-[56px] mx-[16px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            className="absolute top-0 h-full right-[16px] pointer-events-none"
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
            className={`outline-none w-full h-[56px] rounded-[16px] border-[1px] border-secondary6 leading-[56px] pr-[56px] pl-[128px] placeholder:text-secondary3 placeholder:text-[16px] placeholder:font-[400]
          text-primary1 text-[19px] font-[500]  focus:border-primary3 transition-all ${
            searchValue.length > 0
              ? "bg-white border-primary3 "
              : " bg-secondary8 "
          }`}
            placeholder=" ابحث برقم العميلة /اسم العميلة / الايميل / رقم الهاتف /الدولة .............."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className={`w-[120px] h-full flex items-center justify-center disabled:text-secondary4 font-[700] absolute top-0 left-0 disabled:bg-transparent bg-primary3 text-white rounded-[16px]`}
            disabled={searchValue.length < 1}
            onClick={clickHandler}
          >
            ابحث
          </button>
        </div>
        {/* clients  */}
        <div className="flex flex-col  flex-1 ">
          <div className="flex items-center h-[64px] bg-secondary8 px-[16px] text-secondary3 font-[500]">
            <span className="w-[48px] flex  justify-center">م</span>
            <span className="px-[16px] w-[228px]">العميلة</span>
            <span className="px-[16px] w-[112px]">رقم العميل </span>
            <span className="px-[16px] w-[136px]">رقم الهاتف</span>
            <span className="px-[16px] w-[168px]">الدولة</span>
            <span className="px-[16px] w-[226px] ">الايميل</span>
            <span className="px-[16px] w-[120px]">اخر ظهور</span>
            <span className="w-[88px] ">خيارات</span>
          </div>
          <div className=" overflow-auto pb-[20px] mx-[16px] flex-1 ">
            {users.map((client, i) => (
              <Client key={i} data={client} />
            ))}
            {users.length == 0 && (
              <p className="text-center text-primary3 font-[700] mt-8">
                لا يوجد عملاء{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsContainer;
