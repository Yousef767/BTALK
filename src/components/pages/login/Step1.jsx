import React from "react";
import Image from "next/image";

import Button from "@/components/ui/Button";
import Input2 from "@/components/pages/login/Input2";
import CountrySelector from "@/components/ui/CountrySelector";
import { useLocale } from "next-intl";

const Step1 = ({
  selectedCountry,
  phoneNumber,
  handleChangeCountry,
  handleChangePhoneNumber,
  mobileError,
  orderNumValue,
  inviteNumValue,
  inputsChangeHandler,
  orderNumError,
  inputInfo,
  stayLogged,
  stayLoggedHandler,
  singinHandler,
  t,
}) => {
  const lang = useLocale();
  return (
    <div className="flex flex-col pt-[40px] px-[24px] items-center gap-[40px] rounded-[48px_48px_0px_0px] shadow-[0px_-8px_24px_0px_rgba(0, 0, 0, 0.10)] w-full relative bg-white  z-10 gap-[40px] wb-bg min-h-[61vh] pb-[16px] bg_flower">
      <h5 className="h5 text-primary2"> {t("welcome-back")}</h5>
      <form className="w-full flex flex-col gap-[40px]">
        <div className="w-full flex flex-col gap-[16px]">
          <div>
            {" "}
            <CountrySelector
              selectedCountry={selectedCountry}
              mobileNumber={phoneNumber}
              onChangeCountry={handleChangeCountry}
              onChangePhoneNumber={handleChangePhoneNumber}
              error={mobileError}
              t={t}
            />
          </div>
          <Input2
            placeholder={t("order-number")}
            name="orderNum"
            value={orderNumValue}
            onChange={inputsChangeHandler}
            valid={orderNumValue.length > 0}
            fildInfoHandler={inputInfo}
            error={orderNumError}
            infoData={{
              title: t("order-number-info-title"),
              message: t("order-number-info-description"),
            }}
            t={t}
          />
          <Input2
            placeholder={t("invite-number")}
            name="inviteNum"
            value={inviteNumValue}
            onChange={inputsChangeHandler}
            valid={inviteNumValue.length > 0}
            fildInfoHandler={inputInfo}
            infoData={{
              title: t("invite-number-info-title"),
              message: t("invite-number-info-description"),
            }}
          />
          <div className="flex items-center gap-[8px] ">
            <button
              className={`w-[20px] h-[20px] border-[2px] rounded-[5px] border-solid pointer transition-all duration-300 ${
                stayLogged
                  ? "border-primary3 bg-primary3"
                  : "border-secondary6 "
              }`}
              type="button"
              onClick={stayLoggedHandler}
            >
              <Image
                src={
                  "https://res.cloudinary.com/freelancer3223/image/upload/v1710778074/thebtalk_images/Vector_5_twyzdk.svg"
                }
                width={18}
                height={18}
                alt="checking stay logged"
                priority
                className="w-[85%] mx-auto"
              />
            </button>
            <p className="text-secondary3 font-[500] ">{t("stay-login")} </p>
          </div>
        </div>
        <Button
          link={phoneNumber.length > 0 && orderNumValue.length > 0}
          href={{
            pathname: `/${lang}/login/welcome_back`,
            query: { otp: "true" },
          }}
          text={t("signin")}
          clickHandler={singinHandler}
        />
      </form>
    </div>
  );
};

export default Step1;
