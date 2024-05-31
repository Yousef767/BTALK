import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

const CardNumberInput = ({ placeholder, value, valid, onChange, error }) => {
  const lang = useLocale();
  const handleCardNumberChange = (e) => {
    // Remove non-numeric characters from input
    const input = e.target.value.replace(/\D/g, "");

    // Add space after every 4 characters
    const formattedInput = input.replace(/(\d{4})/g, "$1 ");
    onChange(formattedInput.trim());
  };
  return (
    <div
      className={`relative  form-input ${valid && "valid"} ${error && "error"}`}
    >
      <div className="relative">
        <input
          id="cardNumber"
          name="cardNumber"
          value={value}
          type={"tel"}
          onChange={handleCardNumberChange}
          maxLength="19" // Maximum length of a Visa card number
          pattern="[0-9]*" // Only allow numeric characters
          className={`p-[16px] h-[56px] ${
            lang == "en" ? "pr-[48px] text-left " : "pl-[48px] text-right"
          }  text-primary1  rounded-[16px] bg-white outline-none border-[2px] border-secondary7 border-solid w-full font-[500]  flex items-center text-[16px]  focus:border-primary3   focus:bg-white transition-all duration-300 font-poppins lr `}
        />
        <label
          className={`text-secondary4 absolute ${
            lang == "en" ? "left-[16px] " : "right-[16px] "
          } top-[50%] translate-y-[-50%] px-[8px] pointer-events-none  transition-all duration-500 font-[400] `}
          htmlFor={"cardNumber"}
        >
          {placeholder}
        </label>

        <Image
          src={
            "https://res.cloudinary.com/freelancer3223/image/upload/v1712232036/thebtalk_images/card_fwbzzt.svg"
          }
          width={24}
          height={24}
          priority
          alt="image"
          className={`absolute top-[50%] translate-y-[-50%] ${
            lang == "en" ? "right-[16px] " : "left-[16px] "
          }`}
        />
      </div>
    </div>
  );
};

export default CardNumberInput;
