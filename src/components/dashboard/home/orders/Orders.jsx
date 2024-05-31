"use client";
import React, { useState } from "react";
import Header from "./Header";
import Order from "./Order";
import OrderPopup from "../../ui/orderPopup/OrderPopup";
import { AnimatePresence } from "framer-motion";
import Tostify from "@/components/ui/Tostify";

const initOrdersData = [
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_obvhly.png",
    name: "جورى حمدان",
    order_number: "12345",
    package: "باقة استشارة",
    mobile: "+96522325000",
    status: "waiting",
    date: "2024-04-15T21:13:32.443Z",
    step: "زيارة لتنفيذ المخطط",
    step_date: "2024-04-26T02:00:00.000Z",
    step_time: { time: "09:00", available: true, dayTime: "am" },
    location: "https://www.google.com/maps",
    extra: [
      {
        title: "موعد خاص",
        price: 150,
      },
      {
        title: "استلام مخطط",
        price: 150,
      },
    ],
    note: "",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_1_x4xurr.png",
    name: " ايمان احمد صلاح",
    order_number: "113455",
    package: "باقة استشارة",
    mobile: "+96522325000",
    status: "done",
    date: "2024-04-15T21:13:32.443Z",
    step: "زيارة لتنفيذ المخطط",
    step_date: "2024-04-26T02:00:00.000Z",
    step_time: { time: "09:00", available: true, dayTime: "am" },
    location: "https://www.google.com/maps",
    extra: [
      {
        title: "موعد خاص",
        price: 150,
      },
      {
        title: "استلام مخطط",
        price: 150,
      },
    ],
    note: "",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201787/thebtalk_images/Face_1_2_k9orvh.png",
    name: " كاميليا مسعود",
    order_number: "54321",
    package: "باقة استشارة",
    mobile: "+96522325000",
    status: "waiting",
    date: "2024-04-15T21:13:32.443Z",
    step: "زيارة لتنفيذ المخطط",
    step_date: "2024-04-26T02:00:00.000Z",
    step_time: { time: "09:00", available: true, dayTime: "am" },
    location: "https://www.google.com/maps",
    extra: [
      {
        title: "موعد خاص",
        price: 150,
      },
      {
        title: "استلام مخطط",
        price: 150,
      },
    ],
    note: "",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201786/thebtalk_images/Face_1_3_f0ix2m.png",
    name: " صوفيا جرجس",
    order_number: "45321",
    package: "باقة استشارة",
    mobile: "+96522325000",
    status: "waiting",
    date: "2024-04-15T21:13:32.443Z",
    step: "زيارة لتنفيذ المخطط",
    step_date: "2024-04-26T02:00:00.000Z",
    step_time: { time: "09:00", available: true, dayTime: "am" },
    location: "https://www.google.com/maps",
    extra: [
      {
        title: "موعد خاص",
        price: 150,
      },
      {
        title: "استلام مخطط",
        price: 150,
      },
    ],
    note: "",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_1_x4xurr.png",
    name: " ايلا ياسر",
    order_number: "23451",
    package: "باقة استشارة",
    mobile: "+96522325000",
    status: "submitted",
    date: "2024-04-26T02:00:00.000Z",
    step: "زيارة لتنفيذ المخطط",
    step_date: "2024-04-26T02:00:00.000Z",
    step_time: { time: "09:00", available: true, dayTime: "am" },
    location: "https://www.google.com/maps",
    extra: [
      {
        title: "موعد خاص",
        price: 150,
      },
      {
        title: "استلام مخطط",
        price: 150,
      },
    ],
    note: "",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201786/thebtalk_images/Face_1_6_hqrpcl.png",
    name: "جورى حمدان",
    order_number: "13245",
    package: "باقة استشارة",
    mobile: "+96522325000",
    status: "waiting",
    date: "2024-04-26T02:00:00.000Z",
    step: "زيارة لتنفيذ المخطط",
    step_date: "2024-04-26T02:00:00.000Z",
    step_time: { time: "09:00", available: true, dayTime: "am" },
    location: "https://www.google.com/maps",
    extra: [
      {
        title: "موعد خاص",
        price: 150,
      },
      {
        title: "استلام مخطط",
        price: 150,
      },
    ],
    note: "",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201786/thebtalk_images/Face_1_7_pqabgc.png",
    name: "جورى حمدان",
    order_number: "44223",
    package: "باقة استشارة",
    mobile: "+96522325000",
    status: "waiting",
    date: "2024-04-26T02:00:00.000Z",
    step: "زيارة لتنفيذ المخطط",
    step_date: "2024-04-26T02:00:00.000Z",
    step_time: { time: "09:00", available: true, dayTime: "am" },
    location: "https://www.google.com/maps",
    extra: [
      {
        title: "موعد خاص",
        price: 150,
      },
      {
        title: "استلام مخطط",
        price: 150,
      },
    ],
    note: "",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_obvhly.png",
    name: "جورى حمدان",
    order_number: "51123",
    package: "باقة استشارة",
    mobile: "+96522325000",
    status: "waiting",
    date: "2024-04-26T02:00:00.000Z",
    step: "زيارة لتنفيذ المخطط",
    step_date: "2024-04-26T02:00:00.000Z",
    step_time: { time: "09:00", available: true, dayTime: "am" },
    location: "https://www.google.com/maps",
    extra: [
      {
        title: "موعد خاص",
        price: 150,
      },
      {
        title: "استلام مخطط",
        price: 150,
      },
    ],
    note: "",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_1_x4xurr.png",
    name: " ايمان احمد صلاح",
    order_number: "23444",
    package: "باقة استشارة",
    mobile: "+96522325000",
    status: "waiting",
    date: "2024-04-26T02:00:00.000Z",
    step: "زيارة لتنفيذ المخطط",
    step_date: "2024-04-26T02:00:00.000Z",
    step_time: { time: "09:00", available: true, dayTime: "am" },
    location: "https://www.google.com/maps",
    extra: [
      {
        title: "موعد خاص",
        price: 150,
      },
      {
        title: "استلام مخطط",
        price: 150,
      },
    ],
    note: "",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201787/thebtalk_images/Face_1_2_k9orvh.png",
    name: " كاميليا مسعود",
    order_number: "51115",
    package: "باقة استشارة",
    mobile: "+96522325000",
    status: "waiting",
    date: "2024-04-26T02:00:00.000Z",
    step: "زيارة لتنفيذ المخطط",
    step_date: "2024-04-26T02:00:00.000Z",
    step_time: { time: "09:00", available: true, dayTime: "am" },
    location: "https://www.google.com/maps",
    extra: [
      {
        title: "موعد خاص",
        price: 150,
      },
      {
        title: "استلام مخطط",
        price: 150,
      },
    ],
    note: "",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201786/thebtalk_images/Face_1_3_f0ix2m.png",
    name: " صوفيا جرجس",
    order_number: "33334",
    package: "باقة استشارة",
    mobile: "+96522325000",
    status: "waiting",
    date: "2024-04-26T02:00:00.000Z",
    step: "زيارة لتنفيذ المخطط",
    step_date: "2024-04-26T02:00:00.000Z",
    step_time: { time: "09:00", available: true, dayTime: "am" },
    location: "https://www.google.com/maps",
    extra: [
      {
        title: "موعد خاص",
        price: 150,
      },
      {
        title: "استلام مخطط",
        price: 150,
      },
    ],
    note: "",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_1_x4xurr.png",
    name: " ايلا ياسر",
    order_number: "55555",
    package: "باقة استشارة",
    mobile: "+96522325000",
    status: "waiting",
    date: "2024-04-26T02:00:00.000Z",
    step: "زيارة لتنفيذ المخطط",
    step_date: "2024-04-26T02:00:00.000Z",
    step_time: { time: "09:00", available: true, dayTime: "am" },
    location: "https://www.google.com/maps",
    extra: [
      {
        title: "موعد خاص",
        price: 150,
      },
      {
        title: "استلام مخطط",
        price: 150,
      },
    ],
    note: "",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201786/thebtalk_images/Face_1_6_hqrpcl.png",
    name: "جورى حمدان",
    order_number: "11223",
    package: "باقة استشارة",
    mobile: "+96522325000",
    status: "waiting",
    date: "2024-04-26T02:00:00.000Z",
    step: "زيارة لتنفيذ المخطط",
    step_date: "2024-04-26T02:00:00.000Z",
    step_time: { time: "09:00", available: true, dayTime: "am" },
    location: "https://www.google.com/maps",
    extra: [
      {
        title: "موعد خاص",
        price: 150,
      },
      {
        title: "استلام مخطط",
        price: 150,
      },
    ],
    note: "",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201786/thebtalk_images/Face_1_7_pqabgc.png",
    name: "جورى حمدان",
    order_number: "22334",
    package: "باقة استشارة",
    mobile: "+96522325000",
    status: "waiting",
    date: "2024-04-26T02:00:00.000Z",
    step: "زيارة لتنفيذ المخطط",
    step_date: "2024-04-26T02:00:00.000Z",
    step_time: { time: "09:00", available: true, dayTime: "am" },
    location: "https://www.google.com/maps",
    extra: [
      {
        title: "موعد خاص",
        price: 150,
      },
      {
        title: "استلام مخطط",
        price: 150,
      },
    ],
    note: "",
  },
];
const Orders = () => {
  const [ordersData, setOrdersData] = useState(initOrdersData);
  const [orderData, setOrderData] = useState("");
  const [activeNotify, setActiveNotify] = useState(false);

  const submitOrderHandler = (data) => {
    //make the order sured
    console.log(data);
    const oldData = ordersData;
    const index = oldData.findIndex(
      (el) => el.order_number == data.order_number
    );
    oldData[index] = { ...data, status: "active" };

    setOrdersData([...oldData]);
    setOrderData("");
    setActiveNotify(true);
  };

  return (
    <>
      <div className="pt-[24px] flex flex-col gap-[24px] rounded-[24px_24px_0px_0px] bg-white w-[702px] h-full">
        <Header />
        <div className="flex items-center min-h-[64px] bg-[#FCFCFC] px-[16px]">
          <span className="w-[48px] flex  justify-center">م</span>
          <span className="px-[16px] w-[222px]">العميلة</span>
          <span className="px-[16px] w-[112px]">رقم الطلب</span>
          <span className="px-[16px] w-[200px]">الباقة</span>
          <span className="w-[88px] flex  justify-center">خيارات</span>
        </div>
        <div className="overflow-auto hideScroll pb-[20px] ">
          {ordersData.map((order, i) => (
            <Order
              key={i}
              data={order}
              number={i}
              clickHandler={() => setOrderData(order)}
            />
          ))}
        </div>
      </div>
      <Tostify
        type={"success"}
        message={`تم تاكيد الطلب بنجاح`}
        active={activeNotify}
        setClose={() => setActiveNotify(false)}
      />
      <AnimatePresence mode="wait">
        {orderData && (
          <OrderPopup
            closeHandler={() => setOrderData("")}
            data={orderData}
            submitOrderHandler={(data) => submitOrderHandler(data)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Orders;