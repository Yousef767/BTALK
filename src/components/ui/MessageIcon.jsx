"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./NavLink";
import { useTranslations } from "next-intl";

const MessageIcon = ({ withlabel }) => {
  const [showLabel, setShowLabel] = useState(true);
  const t = useTranslations("home");

  useEffect(() => {
    // Call your function after 2 seconds
    const timeoutId = setTimeout(() => {
      setShowLabel(false);
    }, 4000);

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="fixed bottom-[96px] left-0 w-full z-30">
      <div className="max-w-[450px] w-[100%] mx-auto pl-[16px] flex items-center gap-[8px] lr">
        <NavLink
          href={"/account/chat"}
          className="w-[56px] h-[56px] p-[8px] flex items-center justify-center"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M32 16C32 23.732 24.836 30 16 30C14.4153 30.0021 12.8372 29.7964 11.306 29.388C10.138 29.98 7.456 31.116 2.944 31.856C2.544 31.92 2.24 31.504 2.398 31.132C3.106 29.46 3.746 27.232 3.938 25.2C1.488 22.74 0 19.52 0 16C0 8.268 7.164 2 16 2C24.836 2 32 8.268 32 16ZM10 16C10 15.4696 9.78929 14.9609 9.41421 14.5858C9.03914 14.2107 8.53043 14 8 14C7.46957 14 6.96086 14.2107 6.58579 14.5858C6.21071 14.9609 6 15.4696 6 16C6 16.5304 6.21071 17.0391 6.58579 17.4142C6.96086 17.7893 7.46957 18 8 18C8.53043 18 9.03914 17.7893 9.41421 17.4142C9.78929 17.0391 10 16.5304 10 16ZM18 16C18 15.4696 17.7893 14.9609 17.4142 14.5858C17.0391 14.2107 16.5304 14 16 14C15.4696 14 14.9609 14.2107 14.5858 14.5858C14.2107 14.9609 14 15.4696 14 16C14 16.5304 14.2107 17.0391 14.5858 17.4142C14.9609 17.7893 15.4696 18 16 18C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16ZM24 18C24.5304 18 25.0391 17.7893 25.4142 17.4142C25.7893 17.0391 26 16.5304 26 16C26 15.4696 25.7893 14.9609 25.4142 14.5858C25.0391 14.2107 24.5304 14 24 14C23.4696 14 22.9609 14.2107 22.5858 14.5858C22.2107 14.9609 22 15.4696 22 16C22 16.5304 22.2107 17.0391 22.5858 17.4142C22.9609 17.7893 23.4696 18 24 18Z"
              fill="#EA9967"
            />
          </svg>
        </NavLink>

        <AnimatePresence mode="wait">
          {showLabel && withlabel && (
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              exit={{ opacity: 0, x: -40 }}
              className="p-[8px] rounded-[8px] bg-primary5 text-[14px] text-primary1 font-[400] relative"
            >
              {t("msgLabel")}
              <span className="absolute left-[-15px] top-[50%] translate-y-[-50%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                >
                  <path
                    d="M0.228184 8.30175C-0.0786398 8.22463 -0.0786398 7.77537 0.228184 7.69825C2.38403 7.15644 6.8261 5.98343 9 5C12.5581 3.39038 15 0 15 0V16C15 16 12.5581 12.6096 9 11C6.8261 10.0166 2.38403 8.84356 0.228184 8.30175Z"
                    fill="#EDE7E0"
                  />
                </svg>
              </span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MessageIcon;
