"use client";
import React, { useEffect, useState, useRef } from "react";
import BottomActionsContaienr from "@/components/ui/BottomActionsContaienr";

import Input from "./Input";
import ShowImage from "./ShowImage";
import { AnimatePresence } from "framer-motion";

const initialMessages = [
  {
    sender: "admin",
    time: "9:39 pm",
    message: "مرحبا كيف يمكننى مساعدتك؟",
    seen: true,
  },
  {
    sender: "user",
    time: "9:41 pm",
    message:
      "النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى",
    seen: true,
  },
  {
    sender: "user",
    time: "9:42 pm",
    message:
      "حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً",
    seen: true,
  },
  {
    sender: "admin",
    time: "10:07 pm",
    message:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص",
    seen: true,
  },
  {
    sender: "admin",
    time: "10:05 pm",
    message:
      "أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد",
    seen: false,
  },
  {
    sender: "user",
    time: "10:12 pm",
    message:
      "حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً",
    seen: true,
  },
  {
    sender: "admin",
    time: "10:23 pm",
    message:
      "أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد",
    seen: false,
  },
  {
    sender: "user",
    time: "10:23 pm",
    message:
      "أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد",
    seen: false,
  },
  {
    sender: "admin",
    time: "10:12 pm",
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1711402505/thebtalk_images/Rectangle_91_vvafez.png",
    seen: true,
  },
  {
    sender: "user",
    time: "10:23 pm",
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1711402505/thebtalk_images/Rectangle_91_1_accj3f.png",
    seen: false,
  },
];
const Container = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [selectedImage, setSelectedImage] = useState(false);
  const [message, setMessage] = useState("");
  const [showImage, setShowImage] = useState("");
  const messagesEndRef = useRef(null);
  const btnRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({});
    }
  };

  // Call scrollToBottom whenever messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages, selectedImage]);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([
        ...messages,
        {
          sender: "user",
          time: "10:23 pm",
          message: message,
          seen: true,
        },
      ]);
      setMessage("");
    }
    if (selectedImage) {
      setMessages([
        ...messages,
        {
          sender: "user",
          time: "10:23 pm",
          image: selectedImage,
          seen: true,
        },
      ]);
      setSelectedImage(false);
    }
  };

  const handleKeyPress = (event) => {
    // Check if the key pressed is Enter (key code 13)
    if (event.key === "Enter") {
      // Trigger the button click
      btnRef.current.click();
    }
  };

  return (
    <>
      {" "}
      <div className="mt-[8px] max-w-[100vw] rl">
        <div className="pt-[16px] px-[16px] flex flex-col  overflow-auto h-[77.84vh] relative pb-[30px]">
          {messages.map((el, i) => (
            <div
              key={i}
              className={`break-words w-full flex flex-col h-full  ${
                el.sender == "admin" ? " items-end " : "  items-start"
              }`}
            >
              <div className="max-w-[90%] ">
                <p
                  className={`${
                    el.message ? "py-[16px] px-[12px]" : "p-0"
                  } leading-[150%] font-[500] overflow-hidden ${
                    el.sender == "admin"
                      ? "rounded-[2px_16px_16px_16px]"
                      : "rounded-[16px_2px_16px_16px]"
                  } ${
                    el.sender == "admin"
                      ? el.image
                        ? "bg-white"
                        : "bg-secondary7 text-primary1 "
                      : el.image
                      ? "bg-white"
                      : "bg-primary2 text-white "
                  } ${
                    el.sender == messages[i - 1]?.sender
                      ? "rounded-[16px_16px_16px_16px] mt-[4px]"
                      : "mt-[18px]"
                  }
           
                  `}
                >
                  {el.message ? (
                    <span>{el.message}</span>
                  ) : (
                    <img
                      src={
                        typeof el.image == "string"
                          ? el.image
                          : URL.createObjectURL(el.image)
                      }
                      alt="image"
                      className="max-w-[100%] max-h-[400px]"
                      onClick={() => setShowImage(el.image)}
                    />
                  )}
                </p>
                {el.sender != messages[i + 1]?.sender && (
                  <p
                    className={`flex items-center  px-[16px] mt-[4px] gap-[4px] text-secondary2 text-[14px] font-[400] ${
                      el.sender == "admin" ? "justify-end" : " justify-start"
                    } `}
                  >
                    {el.sender != "admin" && el.seen && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.202 6.35689C14.3393 6.47677 14.4234 6.64627 14.4358 6.82814C14.4482 7.01001 14.3878 7.18935 14.268 7.32672L7.06572 15.5767C7.00119 15.6506 6.92158 15.7099 6.83225 15.7505C6.74292 15.7911 6.64593 15.8121 6.54781 15.8121C6.44968 15.8121 6.35269 15.7911 6.26336 15.7505C6.17403 15.7099 6.09442 15.6506 6.02989 15.5767L3.14881 12.2767C3.03324 12.1388 2.97635 11.961 2.99037 11.7816C3.00439 11.6022 3.08819 11.4355 3.22378 11.3172C3.35936 11.1989 3.53594 11.1384 3.71558 11.1488C3.89523 11.1593 4.06363 11.2397 4.18464 11.3729L6.54781 14.0798L13.2321 6.42289C13.352 6.28556 13.5215 6.20146 13.7034 6.18909C13.8853 6.17671 14.0646 6.23707 14.202 6.35689ZM18.8073 6.43481C19.0823 6.69606 19.0933 7.13147 18.8311 7.40647L10.9744 15.6565C10.9058 15.7285 10.8223 15.7849 10.7298 15.8215C10.6373 15.8582 10.5379 15.8743 10.4386 15.8688C10.3392 15.8633 10.2422 15.8364 10.1543 15.7897C10.0664 15.7431 9.98965 15.6779 9.92939 15.5987L9.53614 15.0826C9.43313 14.9484 9.38327 14.7808 9.39611 14.612C9.40895 14.4433 9.4836 14.2852 9.60574 14.168C9.72789 14.0509 9.88896 13.9829 10.0581 13.9771C10.2273 13.9713 10.3926 14.0281 10.5225 14.1366L17.8356 6.45772C17.9614 6.32577 18.1343 6.24913 18.3165 6.24466C18.4987 6.24019 18.6753 6.30917 18.8073 6.43481Z"
                          fill="#EA9967"
                        />
                      </svg>
                    )}

                    <span className="lr pt-[4px]">{el.time}</span>
                  </p>
                )}
              </div>
              <div ref={messagesEndRef} />
            </div>
          ))}
        </div>
        <BottomActionsContaienr>
          <Input
            message={message}
            setMessage={(e) => setMessage(e.target.value)}
            img={selectedImage}
            handleImageChange={handleImageChange}
            deleteImage={() => setSelectedImage(false)}
            sendHandler={handleSendMessage}
            btnRef={btnRef}
            handleKeyPress={handleKeyPress}
          />
        </BottomActionsContaienr>
      </div>
      <AnimatePresence mode="wait">
        {" "}
        {showImage && (
          <ShowImage src={showImage} close={() => setShowImage("")} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Container;
