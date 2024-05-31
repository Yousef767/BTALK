"use client";
import Image from "next/image";
import React, { useState } from "react";

const DetailsContainer = ({ data, id }) => {
  const [packData, setPackData] = useState(data);
  const [preview, setPreview] = useState(null);
  const [description, setDescription] = useState({ ar: "", en: "" });
  const [showSteps, setShowSteps] = useState(true);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPreview(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPackData({ ...packData, bgImage: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const deleteImage = () => {
    setPackData({ ...packData, bgImage: "" });
    setPreview(null);
  };
  console.log(data);
  return (
    <div className="flex-1 bg-white mt-[24px] p-[24px] rounded-[24px_24px_0px_0px] flex flex-col gap-[24px] overflow-auto hideScroll ">
      <div className="flex justify-between items-center">
        <span className="text-secondary2 text-[24px] font-[500]">
          {id ? data.title_ar : "اضافة باقة"}
        </span>
        <div className="flex gap-[16px] items-center text-white font-[700]">
          <button className=" bg-red1 px-[16px] h-[44px] rounded-[16px]">
            حذف
          </button>
          <button className="bg-secondary1 flex px-[16px] h-[44px] rounded-[16px] items-center gap-[8px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.9999 11.7502C12.8099 11.7502 12.6199 11.6802 12.4699 11.5302C12.1799 11.2402 12.1799 10.7602 12.4699 10.4702L20.6699 2.27023C20.9599 1.98023 21.4399 1.98023 21.7299 2.27023C22.0199 2.56023 22.0199 3.04023 21.7299 3.33023L13.5299 11.5302C13.3799 11.6802 13.1899 11.7502 12.9999 11.7502Z"
                fill="white"
              />
              <path
                d="M22.0002 7.55C21.5902 7.55 21.2502 7.21 21.2502 6.8V2.75H17.2002C16.7902 2.75 16.4502 2.41 16.4502 2C16.4502 1.59 16.7902 1.25 17.2002 1.25H22.0002C22.4102 1.25 22.7502 1.59 22.7502 2V6.8C22.7502 7.21 22.4102 7.55 22.0002 7.55Z"
                fill="white"
              />
              <path
                d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H11C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 12.59 21.59 12.25 22 12.25C22.41 12.25 22.75 12.59 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75Z"
                fill="white"
              />
            </svg>
            <span className="pt-[4px]">نشر</span>
          </button>
        </div>
      </div>
      {/* image and pakage title and price  */}
      <div className="flex gap-[16px]">
        <div className="w-[190px] h-[190px] roudned-[16px] overflow-hidden ">
          {packData.bgImage.length < 1 && (
            <label
              htmlFor="packImage"
              className="w-full h-full flex items-center justify-center cursor-pointer border rounded-xl"
            >
              Upload image
            </label>
          )}

          <input
            type="file"
            accept="image/*"
            name="packImage"
            id="packImage"
            className="hidden"
            onChange={handleFileChange}
          />
          {(preview || packData.bgImage.length > 0) && (
            <div className="relative w-full h-full">
              {" "}
              <img
                src={packData.bgImage}
                alt="Preview"
                className="preview rounded-[16px] object-cover h-full"
              />
              <button
                className="absolute top-[16px] left-[16px] bg-red2 p-1 rounded-lg"
                onClick={deleteImage}
              >
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
            </div>
          )}
        </div>
        <div className="flex flex-col gap-[16px] flex-1">
          <div className="grid grid-cols-2 gap-[24px] flex-1 ">
            <div className="flex flex-col gap-[8px]">
              <span className="text-secondary1 font-[500]">اسم الباقة</span>
              <input
                type="text"
                value={packData.title_ar}
                onChange={(e) =>
                  setPackData({ ...packData, title_ar: e.target.value })
                }
                className="p-[16px] rounded-[16px] outline-none border-[1px] border-secondary5 bg-transparent focus:border-primary3 "
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <span className="text-secondary1 font-[500]">Translate </span>
              <input
                type="text"
                value={packData.title_en}
                onChange={(e) =>
                  setPackData({ ...packData, title_en: e.target.value })
                }
                className="p-[16px] rounded-[16px] outline-none border-[1px] border-secondary5 bg-transparent focus:border-primary3 lr "
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <span className="text-secondary1 font-[500]">سعر الباقة </span>
            <input
              type="text"
              value={packData.price}
              onChange={(e) =>
                setPackData({ ...packData, price: e.target.value })
              }
              className="p-[16px] rounded-[16px] outline-none border-[1px] border-secondary5 bg-transparent focus:border-primary3 "
            />
          </div>
        </div>
      </div>
      {/* descripitons  */}
      <div className="flex flex-col gap-[16px]">
        {packData.descriptions_ar.length > 0 && (
          <div className="grid grid-cols-2 gap-[16px] ">
            <div className="flex flex-col gap-2">
              <span className="text-secondary1 font-[500]">الوصف</span>
              <ul className="rounded-[16px] p-[24px_16px_16px] border-secondary5 border-[1px] bg-transparent flex flex-col gap-4 flex-1">
                {packData.descriptions_ar.map((el, i) => (
                  <li
                    key={i}
                    className="text-secondary1 font-[500] leading-[150%] flex justify-between items-start gap-4"
                  >
                    <span>
                      {" "}
                      <span className="text-3xl mx-1">.</span> {el}
                    </span>
                    <button
                      className="mt-[8px]"
                      onClick={() => {
                        const new_ar = packData.descriptions_ar;
                        const new_en = packData.descriptions_en;
                        new_ar.splice(i, 1);
                        new_en.splice(i, 1);
                        setPackData({
                          ...packData,
                          descriptions_ar: new_ar,
                          descriptions_en: new_en,
                        });
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21.0002 6.72998C20.9802 6.72998 20.9502 6.72998 20.9202 6.72998C15.6302 6.19998 10.3502 5.99998 5.12016 6.52998L3.08016 6.72998C2.66016 6.76998 2.29016 6.46998 2.25016 6.04998C2.21016 5.62998 2.51016 5.26998 2.92016 5.22998L4.96016 5.02998C10.2802 4.48998 15.6702 4.69998 21.0702 5.22998C21.4802 5.26998 21.7802 5.63998 21.7402 6.04998C21.7102 6.43998 21.3802 6.72998 21.0002 6.72998Z"
                          fill="#F46C6C"
                        />
                        <path
                          d="M8.49977 5.72C8.45977 5.72 8.41977 5.72 8.36977 5.71C7.96977 5.64 7.68977 5.25 7.75977 4.85L7.97977 3.54C8.13977 2.58 8.35977 1.25 10.6898 1.25H13.3098C15.6498 1.25 15.8698 2.63 16.0198 3.55L16.2398 4.85C16.3098 5.26 16.0298 5.65 15.6298 5.71C15.2198 5.78 14.8298 5.5 14.7698 5.1L14.5498 3.8C14.4098 2.93 14.3798 2.76 13.3198 2.76H10.6998C9.63977 2.76 9.61977 2.9 9.46977 3.79L9.23977 5.09C9.17977 5.46 8.85977 5.72 8.49977 5.72Z"
                          fill="#F46C6C"
                        />
                        <path
                          d="M15.2099 22.7501H8.7899C5.2999 22.7501 5.1599 20.8201 5.0499 19.2601L4.3999 9.19007C4.3699 8.78007 4.6899 8.42008 5.0999 8.39008C5.5199 8.37008 5.8699 8.68008 5.8999 9.09008L6.5499 19.1601C6.6599 20.6801 6.6999 21.2501 8.7899 21.2501H15.2099C17.3099 21.2501 17.3499 20.6801 17.4499 19.1601L18.0999 9.09008C18.1299 8.68008 18.4899 8.37008 18.8999 8.39008C19.3099 8.42008 19.6299 8.77007 19.5999 9.19007L18.9499 19.2601C18.8399 20.8201 18.6999 22.7501 15.2099 22.7501Z"
                          fill="#F46C6C"
                        />
                        <path
                          d="M13.6601 17.25H10.3301C9.92008 17.25 9.58008 16.91 9.58008 16.5C9.58008 16.09 9.92008 15.75 10.3301 15.75H13.6601C14.0701 15.75 14.4101 16.09 14.4101 16.5C14.4101 16.91 14.0701 17.25 13.6601 17.25Z"
                          fill="#F46C6C"
                        />
                        <path
                          d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z"
                          fill="#F46C6C"
                        />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lr flex flex-col gap-2">
              <span className="text-secondary1 font-[500]">Description</span>
              <ul className="rounded-[16px] p-[24px_16px_16px] border-secondary5 border-[1px] bg-transparent flex flex-col gap-4">
                {packData.descriptions_en.map((el, i) => (
                  <li
                    key={i}
                    className="text-secondary1 font-[500] leading-[150%]"
                  >
                    <span className="text-3xl mx-1">.</span> {el}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="flex gap-[16px]">
          <button
            className="bg-secondary1 py-[0px] font-[500] px-[32px] text-white rounded-[24px] "
            onClick={() => {
              if (description.ar.length > 0 && description.en.length > 0) {
                setPackData({
                  ...packData,
                  descriptions_ar: [
                    ...packData.descriptions_ar,
                    description.ar,
                  ],
                  descriptions_en: [
                    ...packData.descriptions_en,
                    description.en,
                  ],
                });
                setDescription({ en: "", ar: "" });
              }
            }}
          >
            اضافة
          </button>
          <input
            type="text"
            className="p-[16px] rounded-[24px] border-[1px] border-secondary5 focus:border-primary3 flex-1 outline-none"
            placeholder="اضافة وصف"
            value={description.ar}
            onChange={(e) =>
              setDescription({ ...description, ar: e.target.value })
            }
          />
          <input
            type="text"
            className="p-[16px] rounded-[24px] border-[1px] border-secondary5 focus:border-primary3 flex-1 lr outline-none"
            placeholder="Description"
            value={description.en}
            onChange={(e) =>
              setDescription({ ...description, en: e.target.value })
            }
          />
        </div>
      </div>
      {/* steps  */}
      <div className="flex flex-col gap-[24px] rounded-[24px] border-[2px] border-secondary7 mb-[64px]">
        <div className="flex items-center justify-between p-[16px] bg-secondary7 rounded-[24px_24px_0px_0px] cursor-pointer">
          <div
            className="flex items-center gap-[8px] flex-1"
            onClick={() => setShowSteps((prev) => !prev)}
          >
            <span className="w-[32px] h-[32px] rounded-[12px] bg-primary5 flex justify-center items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={`${!showSteps && "rotate-180"}`}
              >
                <path
                  d="M19.92 15.8001C19.73 15.8001 19.54 15.7301 19.39 15.5801L12.87 9.06008C12.39 8.58008 11.61 8.58008 11.13 9.06008L4.61002 15.5801C4.32002 15.8701 3.84002 15.8701 3.55002 15.5801C3.26002 15.2901 3.26002 14.8101 3.55002 14.5201L10.07 8.00008C11.13 6.94008 12.86 6.94008 13.93 8.00008L20.45 14.5201C20.74 14.8101 20.74 15.2901 20.45 15.5801C20.3 15.7201 20.11 15.8001 19.92 15.8001Z"
                  fill="#585158"
                />
              </svg>
            </span>
            <span className="text-secondary3 text-[19px] font-[500]">
              الخطوات
            </span>
          </div>
          <button className="flex justify-center items-center gap-[8px] bg-primary5 rounded-[12px] px-[16px] py-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
                fill="#EA9967"
              />
              <path
                d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
                fill="#EA9967"
              />
            </svg>
            <span className="pt-[4px] text-primary3 font-[700]">اضافة </span>
          </button>
        </div>
        {showSteps && (
          <ul className=" flex flex-col gap-[16px] p-[24px] pt-0">
            {packData.steps.map((step, i) => (
              <li
                key={i}
                className="p-[16px] bg-secondary7 rounded-[16px] flex justify-between items-center gap-[8px]"
              >
                <span className="w-[40px] h-[40px] p-[8px] flex items-center justify-center rounded-[8px] border-[1px] border-primary1 text-[19px] font-[700] pt-[16px]">
                  {i + 1}
                </span>
                <span className="text-secondary1 text-[19px] font-[500] w-[30%]">
                  {step.title_ar}
                </span>
                <span className="text-secondary1 text-[19px] font-[500] w-[25%]">
                  {step.visit == "fixed" && "ميعاد ثابت"}
                  {step.visit == "order-time" && " طلب ميعاد"}
                  {step.visit == "manual" && " تلقائى"}
                </span>
                <span className="text-secondary1 text-[19px] font-[500] w-[25%]">
                  {step.times == "monthly" && "شهرياً"}
                  {step.times == "weekly" && "  اسبوعياً"}
                  {step.times == "one-time" && " مرة واحدة"}
                </span>
                <button
                  onClick={() => console.log("delete")}
                  className="ml-[16px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21.0002 6.72998C20.9802 6.72998 20.9502 6.72998 20.9202 6.72998C15.6302 6.19998 10.3502 5.99998 5.12016 6.52998L3.08016 6.72998C2.66016 6.76998 2.29016 6.46998 2.25016 6.04998C2.21016 5.62998 2.51016 5.26998 2.92016 5.22998L4.96016 5.02998C10.2802 4.48998 15.6702 4.69998 21.0702 5.22998C21.4802 5.26998 21.7802 5.63998 21.7402 6.04998C21.7102 6.43998 21.3802 6.72998 21.0002 6.72998Z"
                      fill="#F46C6C"
                    />
                    <path
                      d="M8.49977 5.72C8.45977 5.72 8.41977 5.72 8.36977 5.71C7.96977 5.64 7.68977 5.25 7.75977 4.85L7.97977 3.54C8.13977 2.58 8.35977 1.25 10.6898 1.25H13.3098C15.6498 1.25 15.8698 2.63 16.0198 3.55L16.2398 4.85C16.3098 5.26 16.0298 5.65 15.6298 5.71C15.2198 5.78 14.8298 5.5 14.7698 5.1L14.5498 3.8C14.4098 2.93 14.3798 2.76 13.3198 2.76H10.6998C9.63977 2.76 9.61977 2.9 9.46977 3.79L9.23977 5.09C9.17977 5.46 8.85977 5.72 8.49977 5.72Z"
                      fill="#F46C6C"
                    />
                    <path
                      d="M15.2099 22.7501H8.7899C5.2999 22.7501 5.1599 20.8201 5.0499 19.2601L4.3999 9.19007C4.3699 8.78007 4.6899 8.42008 5.0999 8.39008C5.5199 8.37008 5.8699 8.68008 5.8999 9.09008L6.5499 19.1601C6.6599 20.6801 6.6999 21.2501 8.7899 21.2501H15.2099C17.3099 21.2501 17.3499 20.6801 17.4499 19.1601L18.0999 9.09008C18.1299 8.68008 18.4899 8.37008 18.8999 8.39008C19.3099 8.42008 19.6299 8.77007 19.5999 9.19007L18.9499 19.2601C18.8399 20.8201 18.6999 22.7501 15.2099 22.7501Z"
                      fill="#F46C6C"
                    />
                    <path
                      d="M13.6601 17.25H10.3301C9.92008 17.25 9.58008 16.91 9.58008 16.5C9.58008 16.09 9.92008 15.75 10.3301 15.75H13.6601C14.0701 15.75 14.4101 16.09 14.4101 16.5C14.4101 16.91 14.0701 17.25 13.6601 17.25Z"
                      fill="#F46C6C"
                    />
                    <path
                      d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z"
                      fill="#F46C6C"
                    />
                  </svg>
                </button>
                <button className=" bg-primary1 rounded-[8px] flex items-center justify-center gap-[8px] px-[16px] py-[4px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.9999 16.3299C9.60992 16.3299 7.66992 14.3899 7.66992 11.9999C7.66992 9.60992 9.60992 7.66992 11.9999 7.66992C14.3899 7.66992 16.3299 9.60992 16.3299 11.9999C16.3299 14.3899 14.3899 16.3299 11.9999 16.3299ZM11.9999 9.16992C10.4399 9.16992 9.16992 10.4399 9.16992 11.9999C9.16992 13.5599 10.4399 14.8299 11.9999 14.8299C13.5599 14.8299 14.8299 13.5599 14.8299 11.9999C14.8299 10.4399 13.5599 9.16992 11.9999 9.16992Z"
                      fill="white"
                    />
                    <path
                      d="M12.0001 21.02C8.24008 21.02 4.69008 18.82 2.25008 15C1.19008 13.35 1.19008 10.66 2.25008 8.99998C4.70008 5.17998 8.25008 2.97998 12.0001 2.97998C15.7501 2.97998 19.3001 5.17998 21.7401 8.99998C22.8001 10.65 22.8001 13.34 21.7401 15C19.3001 18.82 15.7501 21.02 12.0001 21.02ZM12.0001 4.47998C8.77008 4.47998 5.68008 6.41998 3.52008 9.80998C2.77008 10.98 2.77008 13.02 3.52008 14.19C5.68008 17.58 8.77008 19.52 12.0001 19.52C15.2301 19.52 18.3201 17.58 20.4801 14.19C21.2301 13.02 21.2301 10.98 20.4801 9.80998C18.3201 6.41998 15.2301 4.47998 12.0001 4.47998Z"
                      fill="white"
                    />
                  </svg>
                  <span className="pt-[4px] text-white font-[700] text-[19px]">
                    التفاصيل
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DetailsContainer;
