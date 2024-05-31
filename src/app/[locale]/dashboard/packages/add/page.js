"use client";
import CustomRoute from "@/app/[locale]/CustomRoute/CustomRoute";
import Header from "@/components/dashboard/header/Header";
import DetailsContainer from "@/components/dashboard/packages/details/DetailsContainer";
import Loading from "@/components/dashboard/ui/Loading";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
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
        visit: "fixed",
        times: "weekly",
        doneIn: "2020-11-20T10:36:01.516Z",
        process: "done",
      },
      {
        type: "visit",
        title_ar: "زيارة لتنفيذ المخطط",
        title_en: "Visit to implement the plan",
        visit: "order-time",
        times: "one-time",
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
        visit: "fixed",
        times: "weekly",
        doneIn: "2020-11-20T10:36:01.516Z",
        process: "done",
      },
      {
        type: "visit",
        title_ar: "زيارة لتنفيذ المخطط",
        title_en: "Visit to implement the plan",
        visit: "order-time",
        times: "one-time",
        doneIn: "",
        process: "active",
      },
      {
        type: "visit",
        title_ar: "زيارة مراجعة",
        title_en: "Review visit",
        visit: "manual",
        times: "one-time",
        doneIn: "",
        process: "later",
      },
    ],
  },
];
export default function Packages() {
  const [data, setData] = useState({
    title_ar: " ",
    title_en: " ",
    price: 0,
    bgImage: "",
    title_ar: "",
    title_en: "",
    descriptions_ar: [],
    descriptions_en: [],
    steps: [],
  });
  const [fetching, setFetching] = useState(true);
  const quires = useSearchParams();
  const id = quires.get("id");

  const fetchingData = () => {
    const item = packagesData.find((el) => el.id == id);
    if (item) {
      setData(item);
    }
  };
  useEffect(() => {
    if (id) {
      fetchingData();
    }
    setFetching(false);
  }, []);

  return (
      <div className="flex flex-col h-[100vh]">
        {!fetching ? (
          <>
            <Header title={"الباقات"} crumb={data.title_ar} />
            <DetailsContainer data={data} id={id} />
          </>
        ) : (
          <div className="flex w-full h-full items-center justify-center font-[600] text-2xl text-primary3">
            <Loading />
          </div>
        )}
      </div>
  );
}
