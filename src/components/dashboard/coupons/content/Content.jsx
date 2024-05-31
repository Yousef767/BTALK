"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TimeFormat from "../../ui/TimeFormat";
import { AnimatePresence } from "framer-motion";
import ConfirmDelete from "./ConfirmDelete";
import { toast } from "react-toastify";
import AddNewCoup from "./AddNewCoup";
const demoData = [
  {
    id: 1,
    title: "1عيد الام",
    startDate: "2024-05-18T19:54:35.134Z",
    endDate: "2024-05-19T19:54:35.134Z",
    discount: 20,
    used: 200,
    code: "234taher",
  },
  {
    id: 2,
    title: "2عيد الام",
    startDate: "2024-05-16T19:54:35.134Z",
    endDate: "2024-05-17T19:54:35.134Z",
    discount: 20,
    used: 200,
    code: "234taher",
  },
  {
    id: 3,
    title: "3عيد الام",
    startDate: "2024-05-20T19:54:35.134Z",
    endDate: "2024-05-22T19:54:35.134Z",
    discount: 20,
    used: 200,
    code: "234taher",
  },
  {
    id: 4,
    title: "4عيد الام",
    startDate: "2024-05-18T19:54:35.134Z",
    endDate: "2024-05-19T19:54:35.134Z",
    discount: 20,
    used: 200,
    code: "234taher",
  },
  {
    id: 5,
    title: "5عيد الام",
    startDate: "2024-05-18T19:54:35.134Z",
    endDate: "2024-05-19T19:54:35.134Z",
    discount: 20,
    used: 200,
    code: "234taher",
  },
  {
    id: 6,
    title: "6عيد الام",
    startDate: "2024-05-18T19:54:35.134Z",
    endDate: "2024-05-19T19:54:35.134Z",
    discount: 20,
    used: 200,
    code: "234taher",
  },
  {
    id: 7,
    title: "7عيد الام",
    startDate: "2024-05-18T19:54:35.134Z",
    endDate: "2024-05-19T19:54:35.134Z",
    discount: 20,
    used: 200,
    code: "234taher",
  },
];

const tableTitlesStyle = " font-[500] leading-[150%] flex px-[16px]";
const Content = () => {
  const [couponsData, setCouponsData] = useState(demoData);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const maxNumberForPage = 5;
  const [deleteCoup, setDeleteCoup] = useState(null);
  const [addCoup, setAddCoup] = useState(false);

  useEffect(() => {
    const min = (page - 1) * maxNumberForPage;
    const max = page * maxNumberForPage;
    const d = couponsData.slice(min, max);
    setData(d);
  }, [page, couponsData]);

  const deleteCoupHandler = () => {
    //after delete coup from db and deleted succeed
    const newData = couponsData.filter((el) => el.id != deleteCoup.id);
    setCouponsData(newData);
    toast.success("تم مسح الكوبون بنجاخ");
    setDeleteCoup(null);
  };
  return (
    <>
      <div className="bg-white rounded-[24px_24px_0px_0px] flex flex-col flex-1">
        <div className="flex items-center justify-between m-[24px] ">
          <span className="text-secondary2 text-[24px] font-[500]">
            الكوبونات
          </span>
          <button
            className="flex items-center justify-center gap-[8px] text-white font-[700] py-[8px] px-[16px] rounded-[16px] bg-primary1 "
            onClick={() => setAddCoup(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
                fill="white"
              />
              <path
                d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
                fill="white"
              />
            </svg>
            <span className="pt-[3px]"> اضافة كوبون</span>
          </button>
        </div>

        {/* coupons data header */}
        <div className="flex items-center justify-between h-[64px] bg-secondary8 px-[16px] text-secondary3">
          <span className={`${tableTitlesStyle} w-[48px]`}>م</span>
          <span className={`${tableTitlesStyle} w-[180px] `}>اسم الكوبون</span>
          <span className={`${tableTitlesStyle} w-[184px]`}>تاريخ البدأ</span>
          <span className={`${tableTitlesStyle} w-[184px]`}>
            تاريخ الانتهاء
          </span>
          <span className={`${tableTitlesStyle} w-[120px] justify-center`}>
            الخصم
          </span>
          <span className={`${tableTitlesStyle} w-[160px]`}>
            عدد المستخدمين
          </span>
          <span className={`${tableTitlesStyle} w-[160px] justify-center`}>
            الحالة
          </span>
          <span className={`${tableTitlesStyle} w-[88px] justify-center`}>
            خيارات
          </span>
        </div>

        {/* coupons data  */}
        <ul className="h-[55%] overflow-auto">
          {data.map((coup, i) => (
            <li
              key={i}
              className="flex items-center justify-between h-[64px] px-[16px] text-secondary1"
            >
              <span className={`${tableTitlesStyle} w-[48px]`}>{i + 1}</span>
              <span className={`${tableTitlesStyle} w-[180px] `}>
                {coup.title}{" "}
              </span>
              <span className={`${tableTitlesStyle} w-[184px]`}>
                <TimeFormat date={coup.startDate} />
              </span>
              <span className={`${tableTitlesStyle} w-[184px]`}>
                <TimeFormat date={coup.endDate} />
              </span>
              <span className={`${tableTitlesStyle} w-[120px] justify-center`}>
                {coup.discount}%
              </span>
              <span className={`${tableTitlesStyle} w-[160px]`}>
                {coup.used}{" "}
              </span>
              <span className={`${tableTitlesStyle} w-[160px] justify-center`}>
                {new Date(coup.startDate) < new Date() ? (
                  <>
                    {new Date(coup.endDate) >= new Date() ? (
                      <span className="text-green font-[500] bg-[#F4FDF8] px-[24px] py-[8px] rounded-[16px]">
                        قيد العمل
                      </span>
                    ) : (
                      <span className="text-secondary3 font-[500] bg-secondary8 px-[24px] py-[8px] rounded-[16px]">
                        تم الانتهاء
                      </span>
                    )}
                  </>
                ) : (
                  <span className="text-primary3 font-[500] bg-red2 px-[24px] py-[8px] rounded-[16px]">
                    فى الانتظار
                  </span>
                )}
              </span>
              <span className={`${tableTitlesStyle} w-[88px] justify-center`}>
                <button onClick={() => setDeleteCoup(coup)}>
                  {" "}
                  <Image
                    src={
                      "https://res.cloudinary.com/dachf1ak7/image/upload/v1716059210/trash_mirs5k.svg"
                    }
                    width={24}
                    height={24}
                    priority
                    alt="delete"
                  />
                </button>
              </span>
            </li>
          ))}
        </ul>

        {/* pagination  */}
        <div className="flex items-center justify-between my-[32px] mx-[24px]">
          <button
            className="flex items-center justify-center gap-[8px] w-[144px] h-[48px] rounded-[8px] bg-secondary6 
           text-secondary4  disabled:text-secondary5 text-[19px] font-[500] "
            disabled={page == 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.9101 20.67C8.7201 20.67 8.5301 20.6 8.3801 20.45C8.0901 20.16 8.0901 19.68 8.3801 19.39L14.9001 12.87C15.3801 12.39 15.3801 11.61 14.9001 11.13L8.3801 4.61002C8.0901 4.32002 8.0901 3.84002 8.3801 3.55002C8.6701 3.26002 9.1501 3.26002 9.4401 3.55002L15.9601 10.07C16.4701 10.58 16.7601 11.27 16.7601 12C16.7601 12.73 16.4801 13.42 15.9601 13.93L9.4401 20.45C9.2901 20.59 9.1001 20.67 8.9101 20.67Z"
                fill={`${page == 1 ? "#D3D3D9" : "#AFAFAF"}`}
              />
            </svg>
            <span className="pt-[5px]">السابق</span>
          </button>
          <span className="w-[40px] h-[40px] flex items-center justify-center rounded-[8px] text-secondary4 text-[19px] font-[700] bg-secondary6 pt-2">
            {page}
          </span>
          <button
            className="flex items-center justify-center gap-[8px] w-[144px] h-[48px] rounded-[8px] bg-secondary6 text-secondary4 disabled:text-secondary5 text-[19px] font-[500]"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={maxNumberForPage * page >= couponsData.length}
          >
            <span className="pt-[5px]">التالى</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.0003 20.67C14.8103 20.67 14.6203 20.6 14.4703 20.45L7.95027 13.93C6.89027 12.87 6.89027 11.13 7.95027 10.07L14.4703 3.55002C14.7603 3.26002 15.2403 3.26002 15.5303 3.55002C15.8203 3.84002 15.8203 4.32002 15.5303 4.61002L9.01027 11.13C8.53027 11.61 8.53027 12.39 9.01027 12.87L15.5303 19.39C15.8203 19.68 15.8203 20.16 15.5303 20.45C15.3803 20.59 15.1903 20.67 15.0003 20.67Z"
                fill={`${
                  maxNumberForPage * page >= couponsData.length
                    ? "#D3D3D9"
                    : "#AFAFAF"
                }`}
              />
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {deleteCoup && (
          <ConfirmDelete
            key={1}
            onClose={() => setDeleteCoup(false)}
            title={deleteCoup?.title}
            deleteHandler={deleteCoupHandler}
          />
        )}
        {addCoup && <AddNewCoup key={2} onClose={() => setAddCoup(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Content;
