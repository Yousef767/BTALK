"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";

const Tostify = ({ message, type, active, setClose }) => {
  useEffect(() => {
    const close = setTimeout(() => {
      setClose(false);
      return () => clearTimeout(close);
    }, 2000);
  }, [active]);
  return (
    <AnimatePresence mode="wait">
      {active && (
        <motion.p
          initial={{ y: -80, opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed w-[80%]  text-center z-[50] top-[2vh] left-[10%]  p-[16px] rounded-[16px]  shadow-lg text-white font-[600] lg:w-[50%] lg:left-[25%]  ${
            type == "success" ? "bg-green" : "bg-red2 text-black"
          }`}
          onClick={() => setClose(false)}
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
};

export default Tostify;
