import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Items = ({ data, deleteHandler }) => {
  return (
    <div className="flex flex-col gap-[16px]">
      {" "}
      {data.map((el, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative rounded-[16px] overflow-hidden w-full h-[190px]"
        >
          {el.type.startsWith("image/") ? (
            <img
              src={URL.createObjectURL(el)}
              alt="image"
              className="w-[100%] "
            />
          ) : (
            <video controls width={"100%"} className="w-full">
              <source src={URL.createObjectURL(el)} type="video/mp4" />
            </video>
          )}
          <button
            className="w-[32px] h-[32px] flex items-center justify-center rounded-[8px] bg-red2 absolute top-[16px] left-[16px]"
            onClick={() => deleteHandler(el)}
          >
            <Image
              src={
                "https://res.cloudinary.com/freelancer3223/image/upload/v1711330982/thebtalk_images/trash_gebg7b.svg"
              }
              width={24}
              height={24}
              priority
              alt="delete-image"
            />
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default Items;
