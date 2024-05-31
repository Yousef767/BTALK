import { useLocale } from "next-intl";
import React from "react";

const Date = ({ valid, value, handleDateChange, placeholder }) => {
  const lang = useLocale();
  const handleCardNumberChange = (e) => {
    let input = e.target.value;
    // Remove non-numeric characters
    input = input.replace(/\D/g, "");
    // Add a slash after the second digit (MM/YY format)
    if (input.length > 2) {
      input = input.slice(0, 2) + "/" + input.slice(2);
    }
    // Limit input to 5 characters (MM/YY)
    input = input.slice(0, 5);
    handleDateChange(input);
  };
  return (
    <div className={`relative  form-input ${valid && "valid"} `}>
      <div className="relative">
        <input
          id="cardDate"
          name="cardDate"
          value={value}
          type={"tel"}
          onChange={handleCardNumberChange}
          maxLength="5" // Maximum length of a Visa card number
          pattern="[0-9]*" // Only allow numeric characters
          className={`p-[16px] h-[56px]  text-secondary1  rounded-[16px] bg-white outline-none border-[2px] border-secondary7 border-solid w-full font-[500]  flex items-center text-[16px]  focus:border-primary3   focus:bg-white transition-all duration-300 font-poppins   ${
            lang == "en" ? "pr-[48px] text-left" : "pl-[48px] text-right"
          }`}
        />
        <label
          className={`text-secondary4 absolute  top-[50%] translate-y-[-50%] px-[8px] pointer-events-none  transition-all duration-500 font-[400] ${
            lang == "en" ? "left-[16px]" : "right-[16px]"
          }`}
          htmlFor={"cardNumber"}
        >
          {placeholder}
        </label>
      </div>
    </div>
  );
};

export default Date;
