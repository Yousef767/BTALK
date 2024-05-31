"use client";
import React, { useState, useRef } from "react";

const OTPInput = ({ length, changeOtpHandler }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    changeOtpHandler(newOtp);

    // Move focus to the next input field
    if (value !== "" && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      // Move focus to the previous input field on Backspace press
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-center gap-[16px]">
      {otp.map((value, index) => (
        <input
          key={index}
          type="tel"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          ref={(ref) => (inputRefs.current[index] = ref)}
          className={`w-[56px] h-[56px] flex items-center justify-center rounded-[16px] bg-white border-[2px] border-solid text-center leading-[200%] text-[28px] font-[400] text-primary3 caret-secondary5 caret-h-[30px] relative font-poppins focus:border-primary3 outline-none ${
            otp[index] === ""
              ? "border-secondary5 empty-otp"
              : "border-primary3 "
          }`}
        />
      ))}
    </div>
  );
};

export default OTPInput;
