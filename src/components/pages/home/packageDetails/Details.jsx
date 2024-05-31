import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Link from "next/link";
import { useLocale } from "next-intl";

const Details = ({ data, closeHandler }) => {
  const lang = useLocale();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed max-w-[450px] w-[100%] mx-auto shadow  h-[100vh] left-[50%] translate-x-[-50%] bottom-0 z-[1111111] bg-primary5 flex flex-col items-end justify-end"
    >
      <div
        className={`absolute left-0 top-0  w-full h-[42vh]  bg-top bg-cover bg-no-repeat`}
        style={{
          background: `url('${data.details.bgImage}')`,
        }}
      >
        <Navbar close={closeHandler} />
      </div>
      <div
        className="relative z-[2] w-full min-h-[64.5vh]  bg-white rounded-[48px_48px_0px_0px] p-[24px] pb-[0px] flex flex-col justify-between bg_flower"
        style={{ boxShadow: "none" }}
      >
        <div>
          <h3 className="text-primary3 text-[24px] font-[500]">
            {lang == "en" ? data.details.title_en : data.details.title_ar}
          </h3>
          <ul className="flex flex-col gap-[16px] max-h-[400px] overflow-auto">
            {lang == "en"
              ? data.details.descriptions_en.map((el, i) => (
                  <li key={i} className="flex ">
                    <span className=" px-[8px]">
                      <span className="w-[4px] h-[4px] rounded-full bg-[#222325] inline-block"></span>
                    </span>
                    <span className="font-[500] leading-[150%] text-[#222325]">
                      {el}
                    </span>
                  </li>
                ))
              : data.details.descriptions_ar.map((el, i) => (
                  <li key={i} className="flex ">
                    <span className=" px-[8px]">
                      <span className="w-[4px] h-[4px] rounded-full bg-[#222325] inline-block"></span>
                    </span>
                    <span className="font-[500] leading-[150%] text-[#222325]">
                      {el}
                    </span>
                  </li>
                ))}
          </ul>
        </div>
        <div className="grid grid-cols-2  py-[16px] ">
          <div className="flex items-center gap-[4px]">
            <span className="text-[40px] font-[400] text-primary3 ">
              {data.price}
            </span>
            <span className="text-[24px] font-[500] text-primary2">
              {lang == "en" ? "KWD" : "دينار"}
            </span>
          </div>
          <Link
            href={{ pathname: `/${lang}/payment`, query: { package: data.id } }}
            className=" h-[56px] py-[8px] px-[16px] flex items-center justify-center rounded-[16px] bg-primary1 font-[700] leading-[150%]   text-white"
          >
            {lang == "en" ? "Buy" : "شراء"}
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Details;
