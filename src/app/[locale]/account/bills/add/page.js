import React from "react";
import Header from "@/components/ui/Header";
import AddContainer from "@/components/pages/account/bills/add/AddContainer";
import { useTranslations } from "next-intl";
export default function AddBills() {
  const t = useTranslations("bills");
  return (
    <main className="min-h-[100vh] pt-[110px] pb-[94px]">
      <Header title={t("add-bill")} bg="bg-white" />
      <AddContainer />
    </main>
  );
}
