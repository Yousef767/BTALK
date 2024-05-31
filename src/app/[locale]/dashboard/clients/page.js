"use client";
import ClientsContainer from "@/components/dashboard/clients/ClientsContainer";
import Header from "@/components/dashboard/header/Header";

function Clients() {
  return (
      <div className="flex flex-col h-[100vh]">
        <Header title={"العملاء"} />
        <ClientsContainer />
      </div>
  );
}

export default Clients;
