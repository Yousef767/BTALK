import React from "react";
import Navbar from "@/components/ui/Navbar";
import Header from "@/components/ui/Header";
import Container from "@/components/pages/account/Container";

const Account = () => {
  return (
    <main className="min-h-[100vh] pb-[110px] pt-[70px] bg-primary5">
      <Header lang={true} bg="bg-primary5" />

      <Container />

      <Navbar />
    </main>
  );
};

export default Account;
