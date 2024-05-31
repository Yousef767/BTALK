'use client';
import Header from "@/components/dashboard/header/Header";
import PaymentsContainer from "@/components/dashboard/orders/PaymentsContainer";
export default function Payments() {
  return (
    <div className="flex flex-col h-[100vh]">
      <Header title={"الدفع"} />
      <PaymentsContainer/>
    </div>
  );
}
