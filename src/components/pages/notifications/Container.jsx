"use client";
import React, { useState } from "react";
import EmptyData from "@/components/ui/EmptyData";
import Notification from "./Notification";
import { useTranslations } from "next-intl";

const notificationData = [
  {
    type: "visit-soon",
    refId: "123",
    title_ar: "اقترب موعد حجز زيارة تنفيذ المخطط",
    title_en: "The time to book a visit to implement the plan is approaching.",
    message_ar:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص",
    message_en:
      "This text is an example of text that can be replaced in the same space. This text was generated from the Arabic text generator, where you can generate such text.",
    seen: true,
    time: "2024-04-08T14:13:32.708Z",
  },
  {
    type: "visit-soon",
    refId: "123",
    title_ar: "اقترب موعد حجز زيارة تنفيذ المخطط",
    title_en: "The time to book a visit to implement the plan is approaching.",
    message_ar:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص",
    message_en:
      "This text is an example of text that can be replaced in the same space. This text was generated from the Arabic text generator, where you can generate such text.",
    seen: false,
    time: "2024-04-08T14:16:27.521Z",
  },

  {
    type: "visit-soon",
    refId: "123",
    title_ar: "اقترب موعد حجز زيارة تنفيذ المخطط",
    title_en: "The time to book a visit to implement the plan is approaching.",
    message_ar:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص",
    message_en:
      "This text is an example of text that can be replaced in the same space. This text has been generated.",
    seen: true,
    time: "2024-04-08T14:13:32.708Z",
  },
  {
    type: "add-bill",
    refId: "",
    title_ar: "اضافة فاتورة العيادة",
    title_en: "Add clinic bill",
    message_ar:
      "مرحباً لمياء نتمنى لكى الشفاء العاجل, من فضلك قومى بالضغط لأضافه فاتورة فاتورة العيادة",
    message_en:
      "Hello Lamia, we wish you a speedy recovery. Please click to add the clinic bill.",
    seen: false,
    time: "2024-04-08T14:16:27.521Z",
  },
  {
    type: "construction-feedback",
    refId: "123",
    title_ar: "تقييم خدمة باقة الاستشارة",
    title_en: "Consultation Package Service Feedback",
    message_ar:
      "مرحبا لمياء, يرجى تقييم الخدمة للمساعدة فى رفع كفائتنا باستمرار",
    message_en:
      "Hello Lamia, please rate the service to help continually improve our efficiency.",
    seen: false,
    time: "2024-04-08T14:13:32.708Z",
  },
];

const reversed = notificationData.reverse();
const Container = () => {
  const [notifications, setNotifications] = useState(reversed);
  const t = useTranslations("notification");

  const notificationRead = (e) => {
    //update database
    const updatedData = [...notifications];
    updatedData[e].seen = true;
    setNotifications(updatedData);
  };

  return (
    <div className="mx-[24px]">
      {notifications.length > 0 ? (
        <div className="flex flex-col notifications-container">
          {notifications.map((noti, i) => (
            <div
              key={i}
              className=" border-b-[2px] border-secondary7"
              onClick={() => notificationRead(i)}
            >
              {" "}
              <Notification data={noti} />
            </div>
          ))}
        </div>
      ) : (
        <EmptyData message={t("empty-data")} />
      )}
    </div>
  );
};

export default Container;
