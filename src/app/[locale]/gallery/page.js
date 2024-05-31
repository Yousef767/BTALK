import React from "react";
import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import MessageIcon from "@/components/ui/MessageIcon";
import Container from "@/components/pages/gallery/Container";
import { useTranslations } from "next-intl";

const Gallery = () => {
  const t = useTranslations("gallery");
  return (
    <main className="min-h-[100vh] pt-[110px] pb-[108px] bg-primary5 ">
      <Header title={t("title")} lang={true} bg="bg-primary5" />
      <Container />
      {/* <MessageIcon withlabel={false} /> */}
      <Navbar />
    </main>
  );
};

export default Gallery;
