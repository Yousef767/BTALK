import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
const packages = [
  {
    packageId: 221,
    title_ar: "باقة استشارة",
    title_en: "construction",
    steps: [
      {
        title_ar: "استشارة بالمكتب",
        title_en: "In-office consultation",
      },
      {
        title_ar: "زيارة لتنفيذ المخطط",
        title_en: "Visit to do the plan",
      },
      {
        title_ar: "زيارة مراجعة",
        title_en: "Visit review",
      },
    ],
  },
  {
    packageId: 23321,
    title_ar: "موعد اسنان",
    title_en: "Dentist appointment",
    steps: [],
  },
  {
    packageId: 2344321,
    title_ar: "موعد عملية",
    title_en: "Operation appointment",
    steps: [],
  },
];
const FilterWithPackage = () => {
  const lang = useLocale();
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute p-[24px] shadow-2xl bg-white rounded-[24px] border-[1px] border-secondary6 top-[120%] w-[324px] max-h-[384px] overflow-auto hideScroll left-[-70%] translate-x-[50%]"
    >
      <div className="flex items-center justify-between mb-[24px]">
        <span className="text-primary1 text-[19px] font-[700]">الباقات</span>
        <button className="py-[8px] px-[16px] outline-none rounded-[8px] border-[1px] border-secondary4 flex items-center justify-center gap-[8px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M7.99997 15.1667C4.5333 15.1667 1.71997 12.3467 1.71997 8.88667C1.71997 5.42667 4.5333 2.6 7.99997 2.6C8.7133 2.6 9.40664 2.7 10.0733 2.90667C10.34 2.98667 10.4866 3.26667 10.4066 3.53333C10.3266 3.8 10.0466 3.94667 9.77997 3.86667C9.2133 3.69333 8.6133 3.6 7.99997 3.6C5.08664 3.6 2.71997 5.96667 2.71997 8.88C2.71997 11.7933 5.08664 14.16 7.99997 14.16C10.9133 14.16 13.28 11.7933 13.28 8.88C13.28 7.82667 12.9733 6.81333 12.3933 5.94667C12.24 5.72 12.3 5.40667 12.5333 5.25333C12.76 5.1 13.0733 5.16 13.2266 5.39333C13.92 6.42667 14.2866 7.63333 14.2866 8.88667C14.28 12.3467 11.4666 15.1667 7.99997 15.1667Z"
              fill="#212121"
            />
            <path
              d="M10.7533 4.04667C10.6133 4.04667 10.4733 3.98667 10.3733 3.87333L8.44666 1.66C8.26666 1.45333 8.28666 1.13333 8.49332 0.953333C8.69999 0.773333 9.01999 0.793333 9.19999 1L11.1267 3.21333C11.3067 3.42 11.2867 3.74 11.08 3.92C10.9933 4.00667 10.8733 4.04667 10.7533 4.04667Z"
              fill="#212121"
            />
            <path
              d="M8.50667 5.68667C8.35333 5.68667 8.2 5.61333 8.1 5.48C7.94 5.26 7.98667 4.94667 8.20667 4.78L10.4533 3.14C10.6733 2.97333 10.9867 3.02667 11.1533 3.24667C11.32 3.46667 11.2667 3.78 11.0467 3.94667L8.8 5.59333C8.71333 5.66 8.61333 5.68667 8.50667 5.68667Z"
              fill="#292D32"
            />
          </svg>
          <span className="text-secondary1 font-[400]">إعادة تعيين</span>
        </button>
      </div>
      <div className="flex flex-col gap-[16px]">
        {packages.map((pack, i) => (
          <React.Fragment key={i}>
            <div
              className="flex items-start gap-[6px] hover:bg-secondary6"
              key={i}
            >
              <button
                className={`min-w-[24px] h-[24px] border-[2px] rounded-[5px] border-solid pointer transition-all duration-300 
              ${
                // stayLogged
                false ? "border-primary3 bg-primary3" : "border-secondary5 "
              }
              `}
                type="button"
                //   onClick={stayLoggedHandler}
              >
                <Image
                  src={
                    "https://res.cloudinary.com/freelancer3223/image/upload/v1710778074/thebtalk_images/Vector_5_twyzdk.svg"
                  }
                  width={18}
                  height={18}
                  alt="checking stay logged"
                  priority
                  className="w-[85%] mx-auto"
                />
              </button>
              <span className="text-primary1 text-[19px] font-[400] ">
                {lang == "en" ? pack.title_en : pack.title_ar}
              </span>
            </div>
            {pack.steps.length > 0 ? (
              <div className="flex flex-col items-start w-full ">
                <p className="flex items-start justify-between w-full cursor-pointer hover:bg-secondary6">
                  <span className="text-primary1 text-[19px] font-[400]">
                    {lang == "en" ? pack.title_en : pack.title_ar}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48C3.26002 9.19 3.26002 8.71 3.55002 8.42C3.84002 8.13 4.32002 8.13 4.61002 8.42L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42C19.68 8.13 20.16 8.13 20.45 8.42C20.74 8.71 20.74 9.19 20.45 9.48L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z"
                      fill="#585158"
                    />
                  </svg>
                </p>

                <ul className="flex flex-col gap-[8px]">
                  {pack.steps.map((step, i) => (
                    <li key={i} className="flex gap-[6px]">
                      <button
                        className={`min-w-[20px] h-[20px] border-[2px] rounded-[5px] border-solid pointer transition-all duration-300 
              ${
                // stayLogged
                false ? "border-primary3 bg-primary3" : "border-secondary5 "
              }
              `}
                        type="button"
                        //   onClick={stayLoggedHandler}
                      >
                        <Image
                          src={
                            "https://res.cloudinary.com/freelancer3223/image/upload/v1710778074/thebtalk_images/Vector_5_twyzdk.svg"
                          }
                          width={18}
                          height={18}
                          alt="checking stay logged"
                          priority
                          className="w-[85%] mx-auto"
                        />
                      </button>
                      <span>
                        {lang == "en" ? step.title_en : step.title_ar}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <span className="text-primary1 text-[19px] font-[400] ">
                {lang == "en" ? pack.title_en : pack.title_ar}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

export default FilterWithPackage;
