'use client';
import Header from "@/components/dashboard/header/Header";
import OrdersContainer from "@/components/dashboard/orders/OrdersContainer";
export default function Orders() {
  return (
    <div className="flex flex-col">
      <Header title={"الطلبات"} />
      <OrdersContainer />
    </div>
  );
}
