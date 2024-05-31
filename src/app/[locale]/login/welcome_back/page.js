// import Image from "next/image";
"use client";
import React, { useRef, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MsgPopup from "@/components/ui/MsgPopup";
import Step1 from "@/components/pages/login/Step1";
import Step2 from "@/components/pages/login/Step2";
import { useLocale, useTranslations } from "next-intl";

const initialFormInputs = {
  mobile: "",
  orderNum: "",
  inviteNum: "",
  stayLogged: true,
};

const initialErrors = {
  mobile: false,
  orderNum: {
    required: false,
    msg: false,
  },
};
const initialCounteryData = {
  value: "kw",
  label: "Kuwait",
  prefix: "+965",
  flag: "🇰🇼",
};

export default function WelcomeBack() {
  const [steps, setSteps] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(initialCounteryData);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inputsData, setInputsData] = useState(initialFormInputs);
  const [otpCorrect, setOtpCorrect] = useState(false);
  const [errors, setErrors] = useState(initialErrors);
  const [divHeight, setDivHeight] = useState(0);
  const [screenHeight, setScreenHieght] = useState(0);
  const divRef = useRef(null);

  const searchParams = useSearchParams();
  const otp = searchParams.get("otp");
  const router = useRouter();
  const t = useTranslations("login");
  const lang = useLocale();

  useEffect(() => {
    const screenHeight = window?.innerHeight;
    setScreenHieght(screenHeight);

    if (otp) {
      if (!(phoneNumber.length > 0 && inputsData.orderNum.length > 0)) {
        return router.push(`/${lang}/login/welcome_back`);
      }

      setSteps(2);
    } else {
      setSteps(1);
    }
  }, [otp]);

  // useEffect hook to log the height of the div
  useEffect(() => {
    if (divRef.current) {
      const divHeight = divRef.current.clientHeight;
      setDivHeight(divHeight);
    }
  }, [divRef]);

  //countery selector functionality
  const handleChangeCountry = (countryValue) => {
    setSelectedCountry(countryValue);
  };

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);

    setErrors({
      ...errors,
      mobile: false,
    });
  };

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    setInputsData({
      ...inputsData,
      [name]: value,
    });
    setErrors({
      ...errors,
      orderNum: {
        required: false,
        msg: false,
      },
    });
  };

  const singinHandler = (e) => {
    e.preventDefault();

    //checking validity of the inputs
    if (phoneNumber.length <= 0 || inputsData.orderNum.length <= 0) {
      if (phoneNumber.length <= 0) {
        setErrors((prev) => {
          return { ...prev, mobile: true };
        });
      }
      if (inputsData.orderNum.length <= 0) {
        setErrors((prev) => {
          return { ...prev, orderNum: { required: true } };
        });
      }
    } else {
      //sending the request to backend
      console.log({
        ...inputsData,
        mobile: selectedCountry.prefix + phoneNumber,
      });
    }
  };

  return (
    <>
      <main className=" bg-primary4 h-[100vh] flex flex-col justify-end items-center gap-[65px]">
        <div
          style={{
            maxHeight: screenHeight - (divHeight + 25 + 45),
          }}
        >
          <Image
            src={
              "https://res.cloudinary.com/freelancer3223/image/upload/v1710695066/thebtalk_images/logo_x9b6tp.svg"
            }
            width={204}
            height={163.2}
            alt="logo"
            priority
            className="max-h-[100%]"
          />
        </div>
        <div className="relative behindShape w-full " ref={divRef}>
          <span className="absolute z-[1] w-full h-full "></span>
          {/* log in steps  */}
          {steps == 1 && (
            <Step1
              selectedCountry={selectedCountry}
              phoneNumber={phoneNumber}
              handleChangeCountry={handleChangeCountry}
              handleChangePhoneNumber={handleChangePhoneNumber}
              mobileError={errors.mobile}
              orderNumValue={inputsData.orderNum}
              orderNumError={errors.orderNum}
              inviteNumValue={inputsData.inviteNum}
              inputsChangeHandler={changeInputHandler}
              stayLogged={inputsData.stayLogged}
              stayLoggedHandler={() => {
                setInputsData({
                  ...inputsData,
                  stayLogged: !inputsData.stayLogged,
                });
              }}
              inputInfo={(e) => setShowPopup(e)}
              singinHandler={singinHandler}
              t={t}
            />
          )}
          {steps == 2 && (
            <Step2
              mobileNumber={selectedCountry.prefix + phoneNumber}
              goBack={() => router.back()}
              nextstepHandler={() => setOtpCorrect(true)}
              t={t}
            />
          )}
        </div>
      </main>
      {showPopup && (
        <MsgPopup
          title={showPopup?.title}
          message={showPopup?.message}
          closePopup={() => setShowPopup(false)}
        />
      )}
    </>
  );
}
