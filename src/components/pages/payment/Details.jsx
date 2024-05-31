"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
const Details = ({ data, coupounHandler, coup, setCoup, translate }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="py-[10px] pb-[16px] px-[16px] flex flex-col gap-[8px]  rounded-[24px] bg-secondary7">
      <div className="flex items-center justify-between">
        <p className="text-primary1 text-[28px] font-[400]">
          {translate("total")}
        </p>
        <p className="text-primary3 text-[40px] font-[400]">
          {data.promo
            ? (data.price - (data.price / 100) * data.promo.discount).toFixed(2)
            : data.price.toFixed(2)}
        </p>
      </div>
      <div>
        <AnimatePresence mode="wait">
          {showDetails && (
            <motion.div
              className="flex flex-col  gap-[16px] "
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {/* copoun  */}

              <div className="flex items-center justify-between gap-[8px] ">
                <div className="relative flex-1 ">
                  <input
                    type="text"
                    placeholder={translate("coup")}
                    className="p-[16px] pr-[48px] rounded-[16px] border-[1px] border-secondary5 bg-white outline-none focus:border-primary3 transition-all duration-300 placeholder:text-secondary4 placeholder:font-[500] placeholder:leading-[150%] w-full"
                    value={coup}
                    onChange={(e) => setCoup(e.target.value)}
                  />
                  <Image
                    src={
                      "https://res.cloudinary.com/freelancer3223/image/upload/v1711549889/thebtalk_images/discount-shape_zcxz0a.svg"
                    }
                    width={24}
                    height={24}
                    priority
                    alt="percentage"
                    className=" pointer-events-none absolute top-[47%] translate-y-[-50%] right-[16px]"
                  />
                </div>
                <button
                  className="bg-primary1 rounded-[16px] h-[56px] min-w-[77px] text-white font-[700] leading-[150%]"
                  onClick={() => coupounHandler(coup)}
                >
                  {translate("apply-coup")}
                </button>
              </div>

              {/* about the package  */}
              <div className="py-[8px] px-[16px] rounded-[24px] border-[1px] border-secondary7 bg-white">
                <div className="flex items-center justify-between h-[44px] gap-[8px] ">
                  <span className=" text-secondary3 font-[500] leading-[150%]">
                    {translate("total")}
                  </span>
                  <span className="font-[500] text-[19px]  text-primary3 ">
                    {data.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between h-[44px] gap-[8px] ">
                  <span className=" text-secondary3 font-[500] leading-[150%]">
                    {translate("discount")}
                  </span>
                  <span className="font-[500] text-[19px]  text-primary3 ">
                    {data.promo
                      ? ((data.price / 100) * data.promo.discount).toFixed(2)
                      : ` 00:00`}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          className={`flex items-center justify-center rounded-[16px] border-[1px] border-primary1 gap-[8px] p-[8px] h-[48px] font-[700] leading-[150%] text-primary1 w-full transition-all duration-300 ${
            showDetails && "mt-[16px]"
          } `}
          onClick={() => setShowDetails((prev) => !prev)}
        >
          <span className="pt-[4px]">{translate("show-more")} </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            className={`${
              showDetails && "rotate-180"
            } transition-all duration-300`}
          >
            <path
              d="M12.5 16.8C11.8 16.8 11.1 16.53 10.57 16L4.05002 9.48C3.76002 9.19 3.76002 8.71 4.05002 8.42C4.34002 8.13 4.82002 8.13 5.11002 8.42L11.63 14.94C12.11 15.42 12.89 15.42 13.37 14.94L19.89 8.42C20.18 8.13 20.66 8.13 20.95 8.42C21.24 8.71 21.24 9.19 20.95 9.48L14.43 16C13.9 16.53 13.2 16.8 12.5 16.8Z"
              fill="#585158"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Details;
