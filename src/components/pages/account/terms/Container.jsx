"use client";
import React from "react";
import { useRouter } from "next/navigation";
import BottomActionsContaienr from "@/components/ui/BottomActionsContaienr";
import { useTranslations } from "next-intl";

const Container = () => {
  const router = useRouter();
  const t = useTranslations("terms");
  return (
    <>
      <div className="mt-[24px] mx-[16px]">
        <div className="mb-[40px]">
          <h6 className="text-secondary2 text-[24px] font-[500] mb-[10px]">
            {t("cond_title")}
          </h6>
          <p className="text-primary1 text-[19px] font-[400] tracking-[.38px]">
            {t("cond_description")}
          </p>
        </div>
        <div>
          <h6 className="text-secondary2 text-[24px] font-[500] mb-[10px]">
            {t("term_title")}
          </h6>
          <p className="text-primary1 text-[19px] font-[400] tracking-[.38px]">
            {t("term_description")}
          </p>
        </div>
      </div>
      <BottomActionsContaienr className={{ padding: "16px" }}>
        <button
          onClick={() => router.back()}
          className="h-[56px] w-full py-[8px] px-[16px] flex items-center justify-center rounded-[16px] bg-primary1 text-white font-[700] leading-[150%]"
        >
          {t("back")}
        </button>
      </BottomActionsContaienr>
    </>
  );
};

export default Container;
