'use client';
import Header from "@/components/dashboard/header/Header";
import CouponsContainer from "@/components/dashboard/coupons/CouponsContainer";


export default function Coupons() {
  return (
    <div className="flex flex-col h-[100vh]">
      <Header title={"الكوبونات"} />
      <CouponsContainer />
    </div>
  );
}
