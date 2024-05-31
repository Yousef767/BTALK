import React from "react";
import PackageItem from "./PackageItem";
import Link from "next/link";

const packagesData = [
  {
    id: "123",
    title_ar: "موعد اسنان",
    title_en: "dentist visit",
    description_ar:
      "إستشارة شخصية مدتها من ٢٠ الي ٣٠ دقيقه في مكتب شركة thebtalk لرسم مخطط تجميلي حسب نظرية الخطوط والدوائر لكامل الوجه ومتابعة تنفيذه.",
    description_en:
      "A personal consultation lasting 20 to 30 minutes at thebtalk company’s office to draw a cosmetic plan according to the theory of lines and circles for the entire face and follow up on its implementation.",
    price: 150,

    bgImage:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1711848049/thebtalk_images/img_1_j8pvvd.svg",
    title_ar: "موعد اسنان",
    title_en: "dentist visit",
    descriptions_ar: [
      "إستشارة شخصية مدتها من ٢٠ الي ٣٠ دقيقه في مكتب شركة thebtalk لرسم مخطط تجميلي حسب نظرية الخطوط والدوائر لكامل الوجه ومتابعة تنفيذه.",
      "زيارتين مجانيتين مع العميلة للعيادة المقترحة لتطبيق الخطة ومتابعتها أول شهرين في حال الموافقة علي تطبيق الخطة.",
      "في حال تطبيق الخطة التجميلية قبل انتهاء فتره صلاحيتها يتم تفعيل مواعيد الصيانه لمده سنه من تاريخ الاستشارة (سعر موعد الصيانه 150 دك يمكنكم حجزه عن طريق باقة خطه متابعة )",
      "مرافقه شخصية الي عياده خاصة ملائمة لتطبيق المخطط.",
    ],
    descriptions_en: [
      "A personal consultation lasting 20 to 30 minutes at thebtalk company’s office to draw a cosmetic plan according to the theory of lines and circles for the entire face and follow up on its implementation.",
      "Two free visits with the client to the proposed clinic to implement the plan and follow up on it for the first two months if the plan is approved.",
      "If the cosmetic plan is applied before the expiration of its validity period, maintenance appointments will be activated for one year from the date of the consultation (the price of the maintenance appointment is 150 KD. You can book it through a follow-up plan package).",
      "Personal accompaniment to a private clinic suitable for applying the plan.",
    ],
    steps: [
      {
        type: "consultation",
        title_ar: "استشارة بالمكتب",
        title_en: "In-office consultation",
        doneIn: "2020-11-20T10:36:01.516Z",
        process: "done",
      },
      {
        type: "visit",
        title_ar: "زيارة لتنفيذ المخطط",
        title_en: "Visit to implement the plan",
        doneIn: "",
        process: "active",
      },
    ],
  },
  {
    id: "12344",
    title_ar: "بـــــاقة الاستشـــــارة",
    title_en: "Consultation Package",
    price: 350,
    bgImage:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1711848049/thebtalk_images/img_1_j8pvvd.svg",
    descriptions_ar: [
      "إستشارة شخصية مدتها من ٢٠ الي ٣٠ دقيقه في مكتب شركة thebtalk لرسم مخطط تجميلي حسب نظرية الخطوط والدوائر لكامل الوجه ومتابعة تنفيذه.",
      "زيارتين مجانيتين مع العميلة للعيادة المقترحة لتطبيق الخطة ومتابعتها أول شهرين في حال الموافقة علي تطبيق الخطة.",
      "في حال تطبيق الخطة التجميلية قبل انتهاء فتره صلاحيتها يتم تفعيل مواعيد الصيانه لمده سنه من تاريخ الاستشارة (سعر موعد الصيانه 150 دك يمكنكم حجزه عن طريق باقة خطه متابعة )",
      "مرافقه شخصية الي عياده خاصة ملائمة لتطبيق المخطط.",
    ],
    descriptions_en: [
      "A personal consultation lasting 20 to 30 minutes at thebtalk company’s office to draw a cosmetic plan according to the theory of lines and circles for the entire face and follow up on its implementation.",
      "Two free visits with the client to the proposed clinic to implement the plan and follow up on it for the first two months if the plan is approved.",
      "If the cosmetic plan is applied before the expiration of its validity period, maintenance appointments will be activated for one year from the date of the consultation (the price of the maintenance appointment is 150 KD. You can book it through a follow-up plan package).",
      "Personal accompaniment to a private clinic suitable for applying the plan.",
    ],
    steps: [
      {
        type: "consultation",
        title_ar: "استشارة بالمكتب",
        title_en: "In-office consultation",
        doneIn: "2020-11-20T10:36:01.516Z",
        process: "done",
      },
      {
        type: "visit",
        title_ar: "زيارة لتنفيذ المخطط",
        title_en: "Visit to implement the plan",
        doneIn: "",
        process: "active",
      },
      {
        type: "visit",
        title_ar: "زيارة مراجعة",
        title_en: "Review visit",
        doneIn: "",
        process: "later",
      },
    ],
  },
];
const Packages = ({ setAdd }) => {
  return (
    <div>
      <div className="flex items-center justify-between ">
        <span className="text-secondary2 text-[24px] font-[500]">الباقات</span>
        <Link
          href={"packages/add"}
          className="flex items-center justify-center gap-[8px] text-white font-[700] py-[8px] px-[16px] rounded-[16px] bg-primary1 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
              fill="white"
            />
            <path
              d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
              fill="white"
            />
          </svg>
          <span className="pt-[3px]"> اضافة باقة </span>
        </Link>
      </div>
      <div className="mt-[24px]">
        {packagesData.length > 0 ? (
          <div className="grid grid-cols-2 gap-[24px]">
            {packagesData.map((packg, i) => (
              <PackageItem key={i} data={packg} />
            ))}
          </div>
        ) : (
          <p className="font-[600] text-center text-primary3 mt-8 text-[24px]">
            لا يوجد باقات
          </p>
        )}
      </div>
    </div>
  );
};

export default Packages;
