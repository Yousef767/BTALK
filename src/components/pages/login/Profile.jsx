"use client";
import React, { useState } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ChangeProfileImage from "@/components/ui/ChangeProfileImage";
import { useLocale, useTranslations } from "next-intl";

const rules = [
  {
    ar: "يوافق العميل بأن كامل المبالغ المسددة لا تسترد بأي حال من الأحوال وفي أي مرحلة من المراحل ويعتبر السداد اقراراً وموفقة من العميل على ذلك.",
    en: "The customer agrees that the full amounts paid will not be refunded under any circumstances and at any stage, and payment is considered an acknowledgment and agreement by the customer to that effect.",
  },
  {
    ar: "هذا البرنامج لا يشمل اية عمليات أو جراحات أو مستحضرات او أدوية طبية وليس من ضمن اعماله اية اعمال طبية على العميل وغير مسئول عنها.",
    en: "This program does not include any operations, surgeries, medical preparations or medications, and it does not include any medical work performed by the client and he is not responsible for them.",
  },
  {
    ar: "المحافظة على اسرار وخصوصية العمل طبقاً للأصول المهنية وحفاظاً على السرية التامة.",
    en: "Maintaining work secrets and privacy in accordance with professional principles and maintaining complete confidentiality.",
  },
  {
    ar: "البرنامج التجميلي هو برنامج خاص لكل عميل لا يصلح لأي شخص أخر ولا يحق للعميل مشاركته مع أي شخص اخر أو نشره على أي موقع من مواقع التواصل الاجتماعي بما لها من تباعات قانونية.",
    en: "The cosmetic program is a special program for each client and is not suitable for any other person, and the client does not have the right to share it with any other person or publish it on any social networking site due to its legal consequences.",
  },
  {
    ar: "دور شركة ذا بي توك هو العمل على البرنامج التجميلي المتفق عليه بالباقات فقط لا غير دون ادنى مسئولية من اعمال اخرى خارج ارادتنا ودون الرجوع إلينا مسبقاً من قبل العميل.",
    en: "The role of The B Talk Company is to work on the cosmetic program agreed upon in the packages only, without any responsibility for other work outside our control and without consulting us in advance by the client.",
  },
  {
    ar: " في حال رغبة العميل في اجراء عمليات تجميل او استخدام مستحضرات تجميلية او ما يخص اجراء العمليات فإن ذلك يتم تحت اشراف طبي من طبيب مختص او جهة مختصة و مرخص لها بذلك يلجأ لها العميل بناءً على اختياره او يتم ترشيحها من ذا بي توك دون ادنى مسئولية.",
    en: "If the client desires to perform plastic surgery or use cosmetic products or anything related to performing surgeries, this is done under the medical supervision of a specialist doctor or a competent and licensed authority to do so. The client resorts to her based on his choice or she is nominated by The B Talk without any liability.",
  },
  {
    ar: " المبلغ المدفوع مقابل البرنامج المختار فقط غير شامل لأية أتعاب اضافية ناتجة عن خدمات او استشارات تم تقديمها للعميل خارج إطار البرنامج.",
    en: "The amount paid for the selected program only does not include any additional fees resulting from services or consultations provided to the client outside the framework of the program.",
  },
  {
    ar: "مدة هذا العقد تبدأ من تاريخ الاتفاق وتنتهي بانتهاء مدة الباقه المتفق عليه وفي حالة الرغبة في الاستمرار لابد من اتفاق وتعاقد جديد.",
    en: "The duration of this contract begins from the date of the agreement and ends with the end of the agreed upon remaining period. In the event of a desire to continue, a new agreement and contract must be concluded.",
  },
  {
    ar: "يتم العمل على البرنامج التجميلي للعميل بمقابل مادي متفق عليه وهذا البرنامج التجميلي غير شامل القيام بأي عمليات او جراحة او مستحضرات أو أدوية ولا يسترد المبلغ المدفوع بعد تحصيله بأي حال من الأحوال.",
    en: "The cosmetic program is worked on for the client in return for an agreed-upon amount of money. This cosmetic program does not include performing any operations, surgery, preparations or medications, and the amount paid will not be refunded after collecting it under any circumstances.",
  },
  {
    ar: "في حالة تغير أو إلغاء أي موعد يرجى الابلاغ قبل يوم من تاريخه وإذا تم الغاء الموعد في نفس اليوم او إلغائه اكثر من مرة يعتبر العقد لاغي دون الحاجة لاتخاذ اية اجراءات اخرى.",
    en: "In the event that any appointment is changed or cancelled, please notify the day before its date. If the appointment is canceled on the same day or canceled more than once, the contract is considered void without the need to take any other measures.",
  },
  {
    ar: "سيتم شرح النظرة الجمالية لكل عميل والتعرف على ما يلائمه من خلال المقابلة واقتراح الطبيب والعيادات في حال طلب العميل ذلك.",
    en: "Each client's aesthetic outlook will be explained and what suits him will be determined through the interview and the doctor's suggestion and clinics if the client requests it.",
  },
  {
    ar: " ممنوع تذويب الفيلر قبل اسبوع من الجلسة الثانية للخطة التجميلية {مطلوب مراجعة هذا البند}.",
    en: "It is forbidden to dissolve the filler a week before the second session of the cosmetic plan. {Review this item is required}.",
  },
  {
    ar: " يحق لشركة ذا بي توك الغاء العقد في حالة عدم الالتزام بالاحكام والشروط.",
    en: "The B Talk Company has the right to cancel the contract in the event of non-compliance with the terms and conditions.",
  },
  {
    ar: " يتم تنفيذ الخطة التجميلية خلال شهر من تاريخ الاشتراك الا اذا كان التأخير من قبل اطراف اخرى فيكون خارج ارادتنا لذا عليكم الالتزام بالوقت المحدد لتنفيذ الخطة كامله.",
    en: "The cosmetic plan will be implemented within a month from the date of subscription, unless the delay is caused by other parties, in which case it will be beyond our control. Therefore, you must adhere to the specified time to implement the entire plan.",
  },
  {
    ar: " يقر العميل انه أطلع ذا بي توك على كافة المعلومات الطبية وغير الطبيه وانه يقر بأن البيانات المسجلة صحيحة وعلى مسئوليته الخاصة.",
    en: "The customer acknowledges that he has informed The B Talk of all medical and non-medical information and that the recorded data is correct and at his own risk.",
  },
  {
    ar: "في كل الأحوال فإن قرار العميل بإجراء اعمال تجميلية سواء بأحدى الجهات المرشحة من ذا بي توك او المختارة من قبله هو قراره المختار دون ادنى مسئولية على ذا بي توك مستقبلاً.",
    en: "In all cases, the client’s decision to have cosmetic work performed, whether by one of the agencies nominated by The B Talk or chosen by him, is his chosen decision without any responsibility on The B Talk in the future.",
  },
  {
    ar: " يجب الالتزام بنصائح وارشادات ذا بي توك لإنجاح البرنامج المختار والحصول على افضل النتائج.",
    en: "You must adhere to the advice and instructions of The B-Talk to make the chosen program successful and obtain the best results.",
  },
  {
    ar: " تقتصر مسئولية ذا بي توك على القيام ببنود البرنامج ا لمتعاقد عليه وإيضاح الارشادات الفنية للطبيب المختص والذي يكون و حده المسئول طبياً عن الحالة بمجرد قبوله البدء في الخطة المقترحة.",
    en: "The B-Talk's responsibility is limited to implementing the terms of the contracted program and clarifying the technical instructions to the specialist doctor, who is solely medically responsible for the case once he accepts to start the proposed plan.",
  },
  {
    ar: " تؤكد شركة ذا بي توك ليست عيادة طبيه ولا تمارس الأعمال الطبية بأي حال من الأحوال وينحصر دورها في الخدمات المقدمة بالباقات.",
    en: "The B-Talk Company confirms that it is not a medical clinic and does not practice medical work in any way, and its role is limited to the services provided in the packages.",
  },
  {
    ar: " احترام العميل لطاقم ذا بي توك وكل الأطراف التي يتم توجيه العميل لها حفاظا علي سمعه واسم الشركه",
    en: "The client's respect for The B Talk crew and all parties to whom the client is directed in order to preserve his reputation and the name of the company.",
  },
];

const ProfileComponent = ({}) => {
  const [showAccountCreated, setShowAccoutCreated] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const t = useTranslations("login");
  const lang = useLocale();

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  const saveProfileImageHandler = () => {
    //save user image to database
    console.log(selectedImage);
    setShowAccoutCreated(true);
  };
  return (
    <>
      <div>
        <Image
          src={
            "https://res.cloudinary.com/freelancer3223/image/upload/v1710695066/thebtalk_images/logo_x9b6tp.svg"
          }
          width={110}
          height={88}
          alt="logo"
          priority
          className="max-h-[100%]"
        />
      </div>
      <div className="relative behindShape w-full ">
        <span className="absolute z-[1] w-full h-full "></span>

        <div className="flex flex-col pt-[40px] px-[24px] items-center  rounded-[48px_48px_0px_0px] shadow-[0px_-8px_24px_0px_rgba(0, 0, 0, 0.10)] w-full relative bg-white  z-10 wb-bg min-h-[75vh] pb-[16px] bg_flower">
          <div className="text-center flex flex-col gap-[10px]">
            <h5 className="h5 text-primary2">{t("welcome")} لمياء الأنبعي</h5>
            <p className="font-[500] leading-[150%] text-secondary3 text-center">
              {t("terms-message")}
              <button
                className="text-[#2A89F9]"
                onClick={() => setShowPopup(true)}
              >
                {" "}
                {t("terms-btn")}
              </button>
            </p>
            <p className="font-[500] leading-[150%] text-secondary3 text-center">
              {t("change-image-title")}
            </p>
          </div>

          <ChangeProfileImage
            selectedImage={selectedImage}
            handleImageChange={handleImageChange}
          />

          <div className="w-full flex flex-col gap-[16px]">
            <Button
              link={false}
              text={t("submit")}
              className="disabled:bg-secondary6 disabled:text-secondary4"
              clickHandler={saveProfileImageHandler}
            />
            <Button
              link={false}
              text={t("skip")}
              className="bg-transparent border-[1px] border-secondary4 text-Gray "
              clickHandler={() => setShowAccoutCreated(true)}
            />
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed z-[10000] top-0 left-0 bg-[rgba(0,0,0,.7)] w-full h-full flex justify-center "
          >
            <div className="w-[90%] h-[88%] mt-[6vh] overflow-hidden mx-auto pt-[48px] flex flex-col gap-[16px] rounded-[24px] bg-white">
              <h5 className=" text-primary1 px-[16px] text-[28px] font-[700]">
                {t("terms-btn")}
              </h5>
              <div className=" overflow-y-auto flex flex-col px-[16px] gap-[20px]">
                {rules.map((el, i) => (
                  <p
                    key={i}
                    className="text-[18px] font-[400] tracking-[.38px] text-primary1"
                  >
                    {`(${i + 1})`} {lang == "en" ? el.en : el.ar}
                  </p>
                ))}
              </div>
              <div className="p-[16px] rounded-[24px_24px_0px_0px] shadow-[0px_0px_16px_0px_rgba(0,0,0,.07)]">
                <Button
                  link={false}
                  text={t("agree-terms")}
                  clickHandler={() => setShowPopup(false)}
                />
              </div>
            </div>
          </motion.div>
        )}

        {showAccountCreated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed z-[1000] bottom-0 left-0 bg-[rgba(0,0,0,.7)] w-full h-[100vh] flex justify-center  items-end"
          >
            <div className="flex flex-col gap-[16px] text-center bg-white w-full p-[24px] pt-[48px] rounded-[40px_40px_0px_0px] ">
              <h5 className="h5 text-primary1">
                {t("profile-complated-title")}
              </h5>
              <p className="text-secondary3 font-[500] leading-[150%]">
                {t("profile-complated-description")}
              </p>
              <Button
                link={false}
                text={t("start-now")}
                clickHandler={() => router.push("/")}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfileComponent;
