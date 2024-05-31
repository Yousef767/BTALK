import Header from "@/components/ui/Header";
import BookingContainer from "@/components/pages/home/booking/BookingContainer";

export default function Booking() {
  return (
    <main className="min-h-[100vh] pt-[70px] pb-[120px]">
      <Header bg={"bg-white"} />
      <BookingContainer />
    </main>
  );
}
