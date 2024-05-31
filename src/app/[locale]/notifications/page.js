import React from "react";
import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import MessageIcon from "@/components/ui/MessageIcon";
import Container from "@/components/pages/notifications/Container";
import { useTranslations } from "next-intl";

const Notifications = () => {
  const t = useTranslations("notification");
  return (
    <main className="min-h-[100vh] pb-[110px] pt-[100px] bg-primary5">
      <Header title={t("pageTitle")} lang={true} bg="bg-primary5" />
      <Container />
      {/* <MessageIcon withlabel={false} /> */}
      <Navbar />
    </main>
  );
};

export default Notifications;
