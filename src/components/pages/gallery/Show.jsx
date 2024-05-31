import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Show = ({ video, image, close }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed  z-[1000] top-0 left-0 bg-[rgba(0,0,0,.7)] w-full h-full flex justify-center items-center"
    >
      <div className="absolute w-full h-full bg-transparent" onClick={close} />
      <div className="w-[95%] max-h-[80vh] relative z-40">
        {video && (
          <video controls autoPlay>
            <source src={video} type="video/mp4" />
          </video>
        )}
        {image && (
          <Image
            src={image}
            width={400}
            height={600}
            priority
            alt="image"
            className="mx-auto"
          />
        )}
      </div>
    </motion.div>
  );
};

export default Show;
