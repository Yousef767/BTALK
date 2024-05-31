import React from "react";
import Image from "next/image";
import { useLocale } from "next-intl";

const Input2 = ({
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  valid,
  fildInfoHandler,
  infoData,
  error,
  phoneError,
  className,
  t,
}) => {
  const lang = useLocale();
  return (
    <div
      className={`relative ${lang == "en" ? "lr" : "rl"} form-input ${
        valid && "valid"
      } ${(error?.required || error?.msg || phoneError) && "error"}`}
    >
      <div className="relative">
        {fildInfoHandler && (
          <button
            className={`absolute  top-[50%] -translate-y-[50%]  ${
              lang == "en" ? "right-[16px]" : "left-[16px]"
            }`}
            type="button"
            onClick={() => fildInfoHandler(infoData)}
          >
            <Image
              src={
                "https://res.cloudinary.com/freelancer3223/image/upload/v1710715961/thebtalk_images/info-circle_dbxf63.svg"
              }
              width={22}
              height={22}
              alt="info"
              priority
            />
          </button>
        )}

        <input
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          type={type}
          className={`p-[16px] h-[56px] ${
            lang == "en" ? "pr-[48px]" : "pl-[48px]"
          }  text-primary1  rounded-[16px] bg-secondary7 outline-none border-[2px] border-secondary7 border-solid w-full font-[500]  flex items-center text-[16px]  focus:border-primary3   focus:bg-white transition-all duration-300 font-poppins `}
          style={{
            paddingLeft: className && className + "px",
          }}
        />
        <label
          className={`text-secondary5 absolute  top-[50%] translate-y-[-50%] px-[8px] pointer-events-none  transition-all duration-500
          
          ${
            name == "mobile"
              ? lang == "en"
                ? "left-[110px]"
                : " right-[16px]"
              : lang == "en"
              ? "left-[16px]"
              : " right-[16px]"
          }
        `}
          htmlFor={name}
        >
          {placeholder}
        </label>
      </div>

      {error?.required && (
        <p className="mt-[8px] text-[14px] px-[8px] font-[400] text-red1">
          {t("required-field")}
        </p>
      )}
      {error?.msg && (
        <p className="mt-[8px] text-[14px] px-[8px] font-[400] text-red1">
          {error?.msg}
        </p>
      )}
    </div>
  );
};

export default Input2;
