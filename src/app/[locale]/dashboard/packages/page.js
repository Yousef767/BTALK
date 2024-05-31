'use client';
import Header from "@/components/dashboard/header/Header";
import PackagesContainer from "@/components/dashboard/packages/PackagesContainer";
export default function Packages() {
  return (
    <div className="flex flex-col h-[100vh]">
      <Header title={"الباقات"} />
      <PackagesContainer />
    </div>
  );
}
