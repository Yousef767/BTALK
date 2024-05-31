import DetailsContainer from "@/components/pages/account/bills/details/DetailsContainer";
import Header from "@/components/ui/Header";
import { useLocale } from "next-intl";
import { Suspense } from "react";

async function BillDetails({ id }) {
  console.log(new Date().toISOString());
  const bills = [
    {
      id: "234uiiojioj3j",
      toPay: false,
      image:
        "https://res.cloudinary.com/freelancer3223/image/upload/v1711538339/thebtalk_images/Rectangle_1734_avhmxi.png",
      title: "عيادة الاسنان دكتور محمد العارف",
      discount: 0,
    },
    {
      id: "n2jb234234",
      toPay: true,
      number: "12345",
      date: "2024-04-09T14:18:04.241Z",
      isPaid: true,
      billType: "عيادة الاسنان ",
      price: "150",
      discount: 20,
    },

    {
      id: "23454321345",
      toPay: true,
      number: "55342",
      date: "2024-04-09T14:18:04.241Z",
      isPaid: false,
      billType: "استشارة تجميل",
      price: "350",
      discount: 0,
    },
  ];
  // Fetch product data based on the productId parameter
  const details = bills.filter((el) => el.id == id);

  return (
    <>
      <DetailsContainer billData={details[0]} />
    </>
  );
}

export default async function Detials({ params }) {
  const lang = useLocale();
  return (
    <main className="min-h-[100vh] pt-[110px]">
      <Header
        bg="bg-white"
        title={lang == "en" ? "Bill details" : "تفاصيل الفاتورة"}
      />

      <Suspense fallback={<p>Loading...</p>}>
        <BillDetails id={params.id} />
      </Suspense>
    </main>
  );
}
