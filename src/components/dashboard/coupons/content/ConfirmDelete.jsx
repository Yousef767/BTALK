"use client";
import React from "react";
import { motion } from "framer-motion";

const ConfirmDelete = ({ onClose, title, deleteHandler }) => {
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
      <div className="w-[500px] min-h-[200px] rounded-lg bg-white p-[24px] flex flex-col justify-between z-[20]">
        <p className="text-center text-[1.1vw] font-[500] text-secondary">
          <span className="font-[600] text-interactiveColor">
            هل تريد حذف هذا الكوبون :{title}
          </span>{" "}
        </p>
        <div className="grid grid-cols-2 gap-4 mt-[4vh] ">
          <button
            className=" bg-secondary1 text-white rounded-lg p-[16px] cursor-pointer duration-300 hover:opacity-75"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className=" bg-red-400 text-white p-[16px] rounded-lg  cursor-pointer duration-300 hover:opacity-75"
            onClick={deleteHandler}
          >
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ConfirmDelete;
