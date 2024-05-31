"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import InputGroup from "./InputGroup";
import TimeFormat from "../../ui/TimeFormat";
import Image from "next/image";
import Calender from "./Calender";
import { toast } from "react-toastify";

const clientsData = [
  {
    id: 1,
    name: "لمياء الالمعى",
  },
  {
    id: 2,
    name: "كاميليا مسعود",
  },
  {
    id: 3,
    name: "ايلا ياسر",
  },
];

const AddNewCoup = ({ onClose }) => {
  const [inputsData, setInputsData] = useState({
    name: "",
    code: "",
    type: "all",
    discount: 15,
    client: "",
    notes: "",
  });
  const [startDate, setStartDate] = useState(new Date().toISOString());
  const [endDate, setEndDate] = useState(new Date().toISOString());
  const [editStart, setEditStart] = useState(false);
  const [editEnd, setEditEnd] = useState(false);

  const addNewCoupHandler = () => {
    if (
      inputsData.name.length > 0 &&
      inputsData.code.length > 0 &&
      inputsData.discount > 0
    ) {
      console.log({ ...inputsData, startDate, endDate });
    } else {
      toast.error("please add all coupon data");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed z-10 left-0 top-0 w-[100vw] h-screen bg-[rgba(0,0,0,.5)] flex items-center justify-center"
    >
      <div
        className="w-full h-full fixed left-0 top-0 z-0 "
        onClick={onClose}
      ></div>
      <div className="w-[80%]  max-w-[720px] h-[673px] bg-white z-10 p-[24px] rounded-[20px] flex flex-col justify-between relative">
        {/* header  */}
        <div className="flex items-center justify-between pb-[26px]">
          <p className="text-primary2 text-[28px] font-[400]">انشاء كوبون</p>
          <button onClick={onClose}>
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
          <div className=" border-b-[1px] border-secondary5 pb-[32px] flex flex-col gap-[16px]">
            <div className="grid grid-cols-2 gap-[16px]">
              <InputGroup
                placeholder={"اسم الكوبون"}
                name={"name"}
                value={inputsData.name}
                changeHandler={(e) =>
                  setInputsData({ ...inputsData, name: e.target.value })
                }
              />
              <InputGroup
                placeholder={"كود الكوبون"}
                name={"code"}
                value={inputsData.code}
                changeHandler={(e) =>
                  setInputsData({ ...inputsData, code: e.target.value })
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-[16px]">
              <InputGroup
                placeholder={"نوع الكوبون"}
                name={"type"}
                isSelect={true}
                selectValues={[
                  { title: "كوبون لجميع العملاء", value: "all" },
                  { title: "كوبون لعميل مخصص", value: "client" },
                ]}
                value={inputsData.type}
                changeHandler={(e) =>
                  setInputsData({ ...inputsData, type: e.target.value })
                }
              />
              <InputGroup
                placeholder={"نسبة الخصم"}
                name={"discount"}
                value={inputsData.discount}
                changeHandler={(e) =>
                  setInputsData({ ...inputsData, discount: e.target.value })
                }
                image={
                  "https://res.cloudinary.com/dachf1ak7/image/upload/v1716117721/ticket-discount_cbndtx.svg"
                }
              />
            </div>
            {inputsData.type === "client" && (
              <div>
                <InputGroup
                  placeholder={" اسم العميل"}
                  name={"client"}
                  isSelect={true}
                  isSelectUser={true}
                  selectValues={clientsData}
                  value={inputsData.client}
                  changeHandler={(e) =>
                    setInputsData({ ...inputsData, client: e.target.value })
                  }
                />
              </div>
            )}
          </div>
          {/* choose time  */}
          <div className=" border-b-[1px] border-secondary5 pb-[32px] flex flex-col gap-[16px] relative">
            <div className="grid  grid-cols-2 gap-[16px]">
              <div className="flex flex-col gap-[16px]">
                <span className="font-[500] text-secondary1">من تاريخ</span>
                <button
                  className="h-[56px] p-[16px] border-[1px] focus:border-primary3 duration-300 text-secondary1 font-[500] outline-none rounded-[16px] bg-transparent text-right    relative"
                  onClick={() => setEditStart((prev) => !prev)}
                >
                  <span>
                    {" "}
                    <TimeFormat date={startDate} />
                  </span>

                  <Image
                    src={
                      "https://res.cloudinary.com/dachf1ak7/image/upload/v1716124661/calendar_dlimqh.svg"
                    }
                    width={24}
                    height={24}
                    priority
                    alt="calender"
                    className="absolute bottom-[16px] left-[16px]"
                  />
                </button>
                <AnimatePresence mode="wait">
                  {editStart && (
                    <div className="absolute right-0 top-[100%]  ">
                      <Calender value={startDate} setValue={setStartDate} />
                    </div>
                  )}
                </AnimatePresence>
              </div>
              <div className="flex flex-col gap-[16px]">
                <span className="font-[500] text-secondary1"> الى تاريخ</span>
                <button
                  className="h-[56px] p-[16px] border-[1px] focus:border-primary3 duration-300 text-secondary1 font-[500] outline-none rounded-[16px] bg-transparent text-right    relative"
                  onClick={() => setEditEnd((prev) => !prev)}
                >
                  <span>
                    {" "}
                    <TimeFormat date={endDate} />
                  </span>

                  <Image
                    src={
                      "https://res.cloudinary.com/dachf1ak7/image/upload/v1716124661/calendar_dlimqh.svg"
                    }
                    width={24}
                    height={24}
                    priority
                    alt="calender"
                    className="absolute bottom-[16px] left-[16px]"
                  />
                </button>
                <AnimatePresence mode="wait">
                  {editEnd && (
                    <div className="absolute left-0 top-[100%]  ">
                      <Calender value={endDate} setValue={setEndDate} />
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <span className="text-secondary3 font-[500]">ملاحظة</span>
            <textarea
              name=""
              id=""
              value={inputsData.notes}
              onChange={(e) =>
                setInputsData({ ...inputsData, notes: e.target.value })
              }
              className="w-full outline-none border rounded-lg py-[24px] px-[16px] font-[500]"
              placeholder="اكتب ملاحظاتك هنا....."
            ></textarea>
          </div>
        </div>

        {/* actions buttons  */}
        <div className={`w-full pt-[32px] grid grid-cols-2  gap-[24px]`}>
          <button
            onClick={onClose}
            className="h-[56px] p-[8px] flex items-center justify-center rounded-[16px] bg-[#F46C6C] text-white font-[700] leading-[150%] gap-[8px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M12.5 22.75C6.57 22.75 1.75 17.93 1.75 12C1.75 6.07 6.57 1.25 12.5 1.25C18.43 1.25 23.25 6.07 23.25 12C23.25 17.93 18.43 22.75 12.5 22.75ZM12.5 2.75C7.4 2.75 3.25 6.9 3.25 12C3.25 17.1 7.4 21.25 12.5 21.25C17.6 21.25 21.75 17.1 21.75 12C21.75 6.9 17.6 2.75 12.5 2.75Z"
                fill="white"
              />
              <path
                d="M9.67035 15.58C9.48035 15.58 9.29035 15.51 9.14035 15.36C8.85035 15.07 8.85035 14.59 9.14035 14.3L14.8004 8.63999C15.0904 8.34999 15.5704 8.34999 15.8604 8.63999C16.1504 8.92999 16.1504 9.40998 15.8604 9.69998L10.2004 15.36C10.0604 15.51 9.86035 15.58 9.67035 15.58Z"
                fill="white"
              />
              <path
                d="M15.3304 15.58C15.1404 15.58 14.9504 15.51 14.8004 15.36L9.14035 9.69998C8.85035 9.40998 8.85035 8.92999 9.14035 8.63999C9.43035 8.34999 9.91035 8.34999 10.2004 8.63999L15.8604 14.3C16.1504 14.59 16.1504 15.07 15.8604 15.36C15.7104 15.51 15.5204 15.58 15.3304 15.58Z"
                fill="white"
              />
            </svg>
            <span className="pt-[4px] text-white font-[700] leading-[150%]">
              الغاء الكوبون
            </span>
          </button>

          <button
            onClick={addNewCoupHandler}
            className="h-[56px] p-[8px] flex items-center justify-center rounded-[16px] gap-[8px] bg-primary3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M12.5 22.75C6.57 22.75 1.75 17.93 1.75 12C1.75 6.07 6.57 1.25 12.5 1.25C18.43 1.25 23.25 6.07 23.25 12C23.25 17.93 18.43 22.75 12.5 22.75ZM12.5 2.75C7.4 2.75 3.25 6.9 3.25 12C3.25 17.1 7.4 21.25 12.5 21.25C17.6 21.25 21.75 17.1 21.75 12C21.75 6.9 17.6 2.75 12.5 2.75Z"
                fill="white"
              />
              <path
                d="M11.0804 15.58C10.8804 15.58 10.6904 15.5 10.5504 15.36L7.72043 12.53C7.43043 12.24 7.43043 11.76 7.72043 11.47C8.01043 11.18 8.49043 11.18 8.78043 11.47L11.0804 13.77L16.2204 8.62998C16.5104 8.33998 16.9904 8.33998 17.2804 8.62998C17.5704 8.91998 17.5704 9.39998 17.2804 9.68998L11.6104 15.36C11.4704 15.5 11.2804 15.58 11.0804 15.58Z"
                fill="white"
              />
            </svg>
            <span className="pt-[4px] text-white font-[700] leading-[150%]">
              انشاء الكوبون
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AddNewCoup;
