import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
const Input = ({
  message,
  setMessage,
  img,
  handleImageChange,
  deleteImage,
  sendHandler,
  btnRef,
  handleKeyPress,
}) => {
  const t = useTranslations("chat");
  const lang = useLocale();
  return (
    <div className={`flex items-center justify-between gap-[16px] `}>
      <button
        className={`w-[56px] h-[56px] flex items-center justify-center transition-all duration-300 rounded-[16px] ${
          message.length > 0 || img ? "bg-primary3" : "bg-secondary3"
        }`}
        onClick={sendHandler}
        ref={btnRef}
      >
        <Image
          src={
            "https://res.cloudinary.com/freelancer3223/image/upload/v1711381399/thebtalk_images/send_juciee.svg"
          }
          width={24}
          height={24}
          alt="send"
        />
      </button>
      {img ? (
        <div className="relative">
          <img
            src={URL.createObjectURL(img)}
            alt="send-image"
            className="max-w-[270px] max-h-[300px]"
          />
          <button
            className="absolute top-[4px] left-[4px] p-[8px] bg-red2 rounded-full flex items-center justify-center"
            onClick={deleteImage}
          >
            <Image
              src={
                "https://res.cloudinary.com/freelancer3223/image/upload/v1711330982/thebtalk_images/trash_gebg7b.svg"
              }
              width={24}
              height={24}
              alt="delete"
            />
          </button>
        </div>
      ) : (
        <div className={`relative flex-1 ${lang == "en" ? "lr" : "rl"}`}>
          <input
            placeholder={t("placeholder")}
            type="text"
            name="message"
            id="chat-message"
            value={message}
            className="w-full h-[56px] px-[16px] leading-[56px]  rounded-[16px] border-[2px] border-secondary7 outline-none focus:border-primary3 transition-all"
            onChange={setMessage}
            onKeyDown={handleKeyPress}
          />
          {message.length <= 0 && (
            <div
              className={`absolute z-[25]  top-[16px] ${
                lang == "en" ? "right-[16px]" : "left-[16px]"
              }`}
            >
              <label htmlFor="sendimage" type="button" className="">
                <Image
                  src={
                    "https://res.cloudinary.com/freelancer3223/image/upload/v1711402962/thebtalk_images/gallery-add_rvgjxl.svg"
                  }
                  width={24}
                  height={24}
                  alt="send-image"
                />
              </label>
              <input
                name="image"
                type="file"
                accept="image/*"
                id="sendimage"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
