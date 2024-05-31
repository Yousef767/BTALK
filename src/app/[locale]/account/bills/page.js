import BillsHome from "@/components/pages/account/bills/BillsHome";
import Header from "@/components/ui/Header";
import { useTranslations } from "next-intl";
import React from "react";
export default function Bills() {
  const t = useTranslations("bills");
  return (
    <main className="min-h-[100vh] pt-[110px]">
      <Header title={t("title")} bg="bg-white" />
      <BillsHome />
    </main>
  );
}
