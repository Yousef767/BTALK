import PayContainer from "@/components/pages/payment/PayContainer";
import Header from "@/components/ui/Header";

export default function Payment() {
  return (
    <main className="min-h-[100vh] pt-[70px] pb-[120px]">
      <Header bg="bg-white" />
      <PayContainer />
    </main>
  );
}
