import React from "react";
import { motion } from "framer-motion";

const ShowImage = ({ src, close }) => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const anchor = document.createElement("a");
    anchor.href = src;
    anchor.download = "image.jpg"; // Specify the desired file name

    // Simulate a click on the anchor element to trigger the download
    anchor.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed z-10 top-0 left-0 bg-[rgba(0,0,0,.8)] w-full h-full flex justify-center items-center "
    >
      <div className="fixed w-full h-full z-10 " onClick={close} />
      <div className="z-[12] relative max-w-[80%] max-h-[80vh] flex flex-col gap-[8px] items-center justify-center ">
        <img
          src={typeof src == "string" ? src : URL.createObjectURL(src)}
          alt="image"
          className=" max-w-[100%] max-h-[100%]"
        />
        <button
          className="h-[56px] rounded-[16px] flex items-center justify-center text-white font-[500] text-[14px] border-[1px] w-full border-[#555]"
          onClick={handleDownload}
        >
          تنزيل الصورة
        </button>
      </div>
    </motion.div>
  );
};

export default ShowImage;
