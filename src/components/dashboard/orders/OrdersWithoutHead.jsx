"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Cards from "./cards/Cards";
import Filter from "./Filter";
import OrderPopup from "../ui/orderPopup/OrderPopup";
import Order2 from "./Order2";

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
    status: "active",
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
const OrdersContainer = () => {
  const [ordersData, setOrdersData] = useState(initOrdersData);

  const [orderData, setOrderData] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = () => {
    const filtered = initOrdersData.filter(
      (el) =>
        el.order_number.toLowerCase().includes(searchValue) ||
        el.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setOrdersData([...filtered]);
  };
  useEffect(() => {
    if (searchValue.length < 1) {
      setOrdersData(initOrdersData);
    }
    document.querySelector(".text-secondary2").style.display = "none";
  }, [searchValue]);

  const submitOrderHandler = (data) => {
    const oldData = ordersData;
    const index = oldData.findIndex(
      (el) => el.order_number == data.order_number
    );
    oldData[index] = { ...data, status: "active" };

    setOrdersData([...oldData]);
    setOrderData("");
  };
  const [status, setStatus] = useState(0);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [itempackage, setPackage] = useState("");

  useEffect(() => {
    if (itempackage) {
      const filtered = initOrdersData.filter((order) => {
        return order.package === itempackage;
      });
      setOrdersData(filtered);
    } else {
      setOrdersData(initOrdersData);
    }
  }, [itempackage]);

  useEffect(() => {
    if (dateFrom && dateTo) {
      const filtered = initOrdersData.filter((order) => {
        const orderDate = new Date(order.date);
        return orderDate >= new Date(dateFrom) && orderDate <= new Date(dateTo);
      });
      setOrdersData(filtered);
    } else {
      setOrdersData(initOrdersData);
    }
  }, [dateFrom, dateTo]);

  useEffect(() => {
    if (+status === 0) {
      setOrdersData(initOrdersData);
    } else {
      const filtered = initOrdersData.filter(
        (el) => el.status.toLowerCase() === status
      );
      setOrdersData([...filtered]);
    }
  }, [status]);
  return (
    <>
      <div className="pt-[24px] flex flex-col gap-[24px] rounded-[24px_24px_0px_0px] bg-white">
        <Filter
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setStatus={setStatus}
          setDateFrom={setDateFrom}
          setDateTo={setDateTo}
          setPackage={setPackage}
          cleckHandler={searchHandler}
        />
        <div>
          <div className="flex items-center min-h-[64px] bg-secondary8 px-[16px] text-secondary3 font-[500]">
            <span className="w-[48px] flex  justify-center">م</span>
            <span className="px-[16px] w-[112px]">رقم الطلب</span>
            <span className="px-[16px] w-[136px]">الباقة</span>
            <span className="px-[16px] w-[168px]">الخطوه</span>
            <span className="px-[16px] w-[160px] text-center">الحالة</span>
            <span className="px-[16px] w-[184px]">التاريخ</span>
            <span className="px-[16px] w-[160px] text-center">الدفع</span>
            <span className="w-[88px] flex  justify-center">خيارات</span>
          </div>
          <div className="overflow-auto h-[48vh] hideScroll pb-[20px]">
            {ordersData.map((order, i) => (
              <Order2
                key={i}
                number={i}
                data={order}
                clickHandler={() => setOrderData(order)}
              />
            ))}
            {ordersData.length == 0 && (
              <p className="text-center text-primary3 font-[700] mt-8">
                No Orders Found.
              </p>
            )}
          </div>
        </div>
      </div>

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

export default OrdersContainer;
