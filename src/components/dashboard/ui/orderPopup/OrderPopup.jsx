import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DashLink from "../DashLink";
import OrderDetails from "./OrderDetails";
import DateAndTime from "./DateAndTime";
import Time from "../Time";
import Date from "../Date";
const OrderPopup = ({ data, closeHandler, submitOrderHandler }) => {
  const [orderData, setOrderData] = useState(data);
  const [stepDate, setStepDate] = useState(data.step_date);
  const [stepTime, setStepTime] = useState(data.step_time);
  const [edit, setEdit] = useState(false);
  const [mobileCopied, setMobileCopied] = useState(false);

  const changeValueHandler = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  useEffect(() => {
    const deleteMsg = setTimeout(() => {
      setMobileCopied(false);
      return () => clearTimeout(deleteMsg);
    }, 2000);
    return () => clearTimeout(deleteMsg);
  }, [mobileCopied]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 z-[2000] w-full h-full bg-[rgba(0,0,0,.5)] flex items-center justify-center"
    >
      <div
        className="fixed top-0 left-0 w-full h-full z-[0]"
        onClick={closeHandler}
      />

      <div className="w-[80%]  max-w-[720px] h-[673px] bg-white z-10 p-[24px] rounded-[20px] flex flex-col justify-between relative">
        {/* header  */}
        <div className="flex items-center justify-between pb-[26px]">
          <p className="text-primary2 text-[28px] font-[400]">
            تفاصيل الطلب <span>#{orderData.order_number}</span>
          </p>
          <button onClick={closeHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M12.2271 20.7733C11.9738 20.7733 11.7205 20.68 11.5205 20.48C11.1338 20.0933 11.1338 19.4533 11.5205 19.0666L19.0671 11.52C19.4538 11.1333 20.0938 11.1333 20.4805 11.52C20.8671 11.9066 20.8671 12.5466 20.4805 12.9333L12.9338 20.48C12.7471 20.68 12.4805 20.7733 12.2271 20.7733Z"
                fill="#222325"
              />
              <path
                d="M19.7738 20.7733C19.5205 20.7733 19.2671 20.68 19.0671 20.48L11.5205 12.9333C11.1338 12.5466 11.1338 11.9066 11.5205 11.52C11.9071 11.1333 12.5471 11.1333 12.9338 11.52L20.4805 19.0666C20.8671 19.4533 20.8671 20.0933 20.4805 20.48C20.2805 20.68 20.0271 20.7733 19.7738 20.7733Z"
                fill="#222325"
              />
              <path
                d="M20.0003 30.3333H12.0003C4.76033 30.3333 1.66699 27.24 1.66699 20V12C1.66699 4.75996 4.76033 1.66663 12.0003 1.66663H20.0003C27.2403 1.66663 30.3337 4.75996 30.3337 12V20C30.3337 27.24 27.2403 30.3333 20.0003 30.3333ZM12.0003 3.66663C5.85366 3.66663 3.66699 5.85329 3.66699 12V20C3.66699 26.1466 5.85366 28.3333 12.0003 28.3333H20.0003C26.147 28.3333 28.3337 26.1466 28.3337 20V12C28.3337 5.85329 26.147 3.66663 20.0003 3.66663H12.0003Z"
                fill="#222325"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-[32px] h-[86%] hideScroll overflow-auto ">
          {/* user details  */}
          <div className="flex flex-col gap-[32px]">
            <div className="flex gap-[16px] w-full">
              <Image
                src={orderData.image}
                width={120}
                height={120}
                alt="user-image"
                priority
                className="min-w-[120px] h-[120px] rounded-[16px] overflow-hidden"
              />
              <div className="flex flex-col gap-[8px] w-full">
                <div className="flex gap-[8px] w-full">
                  <p className="h-[56px] p-[16px] rounded-[16px] bg-secondary7 text-secondary1 font-[500] leading-[150%] flex-1">
                    {orderData.name}
                  </p>
                  {/* <DashLink
                    className={
                      "h-[56px] w-[112px] p-[8px] bg-secondary6 flex items-center justify-center gap-[8px] rounded-[16px]"
                    }
                    href={`chats/123`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M8 11C8 11.2652 7.89464 11.5196 7.70711 11.7071C7.51957 11.8946 7.26522 12 7 12C6.73478 12 6.48043 11.8946 6.29289 11.7071C6.10536 11.5196 6 11.2652 6 11C6 10.7348 6.10536 10.4804 6.29289 10.2929C6.48043 10.1054 6.73478 10 7 10C7.26522 10 7.51957 10.1054 7.70711 10.2929C7.89464 10.4804 8 10.7348 8 11ZM12 11C12 11.2652 11.8946 11.5196 11.7071 11.7071C11.5196 11.8946 11.2652 12 11 12C10.7348 12 10.4804 11.8946 10.2929 11.7071C10.1054 11.5196 10 11.2652 10 11C10 10.7348 10.1054 10.4804 10.2929 10.2929C10.4804 10.1054 10.7348 10 11 10C11.2652 10 11.5196 10.1054 11.7071 10.2929C11.8946 10.4804 12 10.7348 12 11ZM16 11C16 11.2652 15.8946 11.5196 15.7071 11.7071C15.5196 11.8946 15.2652 12 15 12C14.7348 12 14.4804 11.8946 14.2929 11.7071C14.1054 11.5196 14 11.2652 14 11C14 10.7348 14.1054 10.4804 14.2929 10.2929C14.4804 10.1054 14.7348 10 15 10C15.2652 10 15.5196 10.1054 15.7071 10.2929C15.8946 10.4804 16 10.7348 16 11Z"
                        fill="#212121"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.75 11C21.75 5.063 16.937 0.25 11 0.25C5.063 0.25 0.25 5.063 0.25 11C0.25 12.718 0.654 14.345 1.372 15.787C1.479 16.002 1.502 16.222 1.452 16.407L0.857 18.633C0.449 20.157 1.843 21.551 3.367 21.143L5.593 20.547C5.80252 20.4974 6.02295 20.5258 6.213 20.627C7.69997 21.3675 9.33883 21.752 11 21.75C16.937 21.75 21.75 16.937 21.75 11ZM11 1.75C13.4533 1.75 15.806 2.72455 17.5407 4.45926C19.2754 6.19397 20.25 8.54675 20.25 11C20.25 13.4533 19.2754 15.806 17.5407 17.5407C15.806 19.2754 13.4533 20.25 11 20.25C9.57105 20.2522 8.16119 19.9218 6.882 19.285C6.3648 19.0205 5.76878 18.954 5.206 19.098L2.979 19.694C2.88574 19.7189 2.78758 19.7188 2.69437 19.6937C2.60117 19.6687 2.51619 19.6195 2.448 19.5512C2.3798 19.4829 2.33077 19.3979 2.30585 19.3046C2.28092 19.2114 2.28098 19.1132 2.306 19.02L2.902 16.794C3.04604 16.2312 2.97954 15.6352 2.715 15.118C2.0782 13.8388 1.74782 12.4289 1.75 11C1.75 8.54675 2.72455 6.19397 4.45926 4.45926C6.19397 2.72455 8.54675 1.75 11 1.75Z"
                        fill="#212121"
                      />
                    </svg>{" "}
                    <span className="text-secondary1 font-[700] leading-[150%] pt-[5px]">
                      محادثة
                    </span>
                  </DashLink> */}
                </div>
                <div className="flex gap-[8px]">
                  <p className="h-[56px] p-[16px] rounded-[16px] bg-secondary7 text-secondary1 font-[500] leading-[150%] flex-1 lr text-right pt-[20px]">
                    {orderData.mobile}
                  </p>
                  <button
                    className={
                      "h-[56px] w-[112px] p-[8px] border-[1px] border-secondary5 flex items-center justify-center gap-[8px] rounded-[16px]"
                    }
                    onClick={() => {
                      navigator.clipboard.writeText(orderData.mobile);
                      setMobileCopied(true);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M11.6 22.75H7.4C3.49 22.75 1.75 21.01 1.75 17.1V12.9C1.75 8.99 3.49 7.25 7.4 7.25H11.6C15.51 7.25 17.25 8.99 17.25 12.9V17.1C17.25 21.01 15.51 22.75 11.6 22.75ZM7.4 8.75C4.3 8.75 3.25 9.8 3.25 12.9V17.1C3.25 20.2 4.3 21.25 7.4 21.25H11.6C14.7 21.25 15.75 20.2 15.75 17.1V12.9C15.75 9.8 14.7 8.75 11.6 8.75H7.4Z"
                        fill="#979797"
                      />
                      <path
                        d="M17.6 16.75H16.5C16.09 16.75 15.75 16.41 15.75 16V12.9C15.75 9.8 14.7 8.75 11.6 8.75H8.5C8.09 8.75 7.75 8.41 7.75 8V6.9C7.75 2.99 9.49 1.25 13.4 1.25H17.6C21.51 1.25 23.25 2.99 23.25 6.9V11.1C23.25 15.01 21.51 16.75 17.6 16.75ZM17.25 15.25H17.6C20.7 15.25 21.75 14.2 21.75 11.1V6.9C21.75 3.8 20.7 2.75 17.6 2.75H13.4C10.3 2.75 9.25 3.8 9.25 6.9V7.25H11.6C15.51 7.25 17.25 8.99 17.25 12.9V15.25Z"
                        fill="#979797"
                      />
                    </svg>{" "}
                    <span className="text-secondary3 font-[700] leading-[150%] pt-[5px]">
                      نسخ
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {mobileCopied && (
              <p className="text-center text-primary1 text-[14px]">
                تم نسخ رقم الهاتف
              </p>
            )}
            <hr className="h-[1px] w-full bg-secondary5" />
            <div className="grid grid-cols-2 gap-x-[16px] gap-y-[24px]">
              <OrderDetails
                title={"الحالة"}
                description={
                  orderData.status == "waiting"
                    ? "فى الانتظار"
                    : orderData.status == "done"
                    ? "تم الانتهاء"
                    : "تم التأكيد"
                }
                className={
                  orderData.status == "waiting"
                    ? "bg-red2 text-primary3"
                    : orderData.status == "done"
                    ? "bg-secondary7 text-secondary1"
                    : "bg-[#F4FDF8] text-green"
                }
              />
              <OrderDetails
                title={"التاريخ"}
                description={
                  <div className="flex items-center gap-[4px]">
                    <span>
                      <Date date={orderData.date} />
                    </span>
                    ,
                    <span>
                      <Time time={orderData.date} />
                    </span>
                  </div>
                }
                className={"bg-secondary7 text-secondary1"}
              />
              <OrderDetails
                title={"الباقة"}
                description={orderData.package}
                className={"bg-secondary7 text-secondary1"}
              />
              <OrderDetails
                title={"الخطوة"}
                description={orderData.step}
                className={"bg-secondary7 text-secondary1"}
              />
            </div>
          </div>
          <hr className="h-[1px] w-full bg-secondary5" />

          {/* order time and services */}
          <div>
            <DateAndTime
              date={stepDate}
              time={stepTime}
              onChangeDate={(e) => setStepDate(e)}
              onChangeTime={(e) => setStepTime(e)}
              edit={edit}
              setEdit={setEdit}
            />
            {/* location  */}
            <div className="flex flex-col gap-[8px] my-[24px]">
              <p className="text-secondary1 font-[500] leading-[150%]">
                رابط الموقع
              </p>
              <input
                type="text"
                className="p-[16px] h-[56px] w-full rounded-[16px] border-[1px] bordre-secondary5 text-secondary1 font-[500] outline-none  focus:border-primary3 focus:border-[2px] transition-all"
                name="location"
                id="location"
                value={orderData.location}
                onChange={changeValueHandler}
              />
            </div>
            {/* extra services  */}
            <div className="flex flex-col gap-[8px]">
              <p className="text-secondary3 font-[500] leading-[150%]">
                الخدمات الاضافية
              </p>
              <div className="flex gap-[8px] flex-wrap p-[16px] rounded-[16px] bg-secondary7">
                {orderData.extra.map((el, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-[8px] pl-[4px] pr-[16px] bg-secondary1 rounded-[8px] gap-[8px] h-[32px]"
                  >
                    <span className="text-white font-[700] pt-[4px]">
                      {el.title}
                    </span>
                    <span className="px-[8px] rounded-[8px] bg-white text-secondary1 font-[400] text-[14px] h-[24px] leading-[30px] lr">
                      +{el.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* notes  */}
          <div className="flex flex-col gap-[8px] mb-[16px]">
            <p className="text-secondary3 font-[500] leading-[150%]">ملاحظة</p>
            <textarea
              name="note"
              id="note"
              className="py-[24px] px-[16px] rounded-[16px] bg-secondary7 outline-none border-[2px] border-secondary7 transition-all focus:border-primary3 resize-none h-[156px]"
              placeholder="اكتب ملاحظاتك هنا....."
              value={orderData.note}
              onChange={changeValueHandler}
            ></textarea>
          </div>
        </div>
        {/* actions buttons  */}
        <div
          className={`w-full pt-[32px] grid gap-[24px] ${
            orderData.status == "done" ? "grid-cols-1" : "grid-cols-2 "
          }`}
        >
          <button
            onClick={closeHandler}
            className="h-[56px] p-[8px] flex items-center justify-center rounded-[16px] bg-secondary6 text-primary3 font-[700] leading-[150%]"
          >
            اغلاق النافذه
          </button>
          {orderData.status != "done" && (
            <button
              onClick={() =>
                submitOrderHandler({
                  ...orderData,
                  step_date: stepDate,
                  step_time: stepTime,
                })
              }
              className="h-[56px] p-[8px] flex items-center justify-center rounded-[16px] gap-[8px] bg-primary3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                  fill="white"
                />
                <path
                  d="M10.5804 15.58C10.3804 15.58 10.1904 15.5 10.0504 15.36L7.22043 12.53C6.93043 12.24 6.93043 11.76 7.22043 11.47C7.51043 11.18 7.99043 11.18 8.28043 11.47L10.5804 13.77L15.7204 8.62998C16.0104 8.33998 16.4904 8.33998 16.7804 8.62998C17.0704 8.91998 17.0704 9.39998 16.7804 9.68998L11.1104 15.36C10.9704 15.5 10.7804 15.58 10.5804 15.58Z"
                  fill="white"
                />
              </svg>
              <span className="pt-[4px] text-white font-[700] leading-[150%]">
                تأكيد
              </span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default OrderPopup;
