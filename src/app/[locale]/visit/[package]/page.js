import Container from "@/components/pages/visit/Container";
import Fetching from "@/components/ui/Fetching";
import Header from "@/components/ui/Header";
import { Suspense } from "react";

async function PackageData({ pack }) {
  const packages = [
    {
      id: "123",
      title_ar: "موعد زيارة عيادة الاسنان",
      title_en: "Dental clinic visit time",
      date: {
        time: "2024-04-11T18:00:00.193Z",
        day: "2024-04-11T11:47:54.193Z",
      },
      message_ar:
        "موعد زيارة المراجعة فى نفس العيادة بعد اسبوعين من موعد زيارة تنفذ المخطط",
      message_en:
        "The date of the review visit in the same clinic is two weeks after the date of the visit to implement the plan.",
    },
    {
      id: "12365",
      title_ar: "موعد زيارة لاجراء عملية",
      title_en: "A visit date for an operation",
      date: false,
      message_ar:
        "موعد زيارة المراجعة فى نفس العيادة بعد اسبوعين من موعد زيارة تنفذ المخطط",
      message_en:
        "The date of the review visit in the same clinic is two weeks after the date of the visit to implement the plan.",
    },
  ];
  // Fetch product data based on the productId parameter
  const data = packages.filter((el) => el.id == pack);

  return (
    <>
      <Container data={data[0]} />
    </>
  );
}

export default async function Visit({ params }) {
  return (
    <main className="min-h-[100vh] py-[100px] pt-[70px]">
      <Header bg={"bg-white"} goHome={true} />
      <Suspense fallback={<Fetching />}>
        <PackageData pack={params.package} />
      </Suspense>
    </main>
  );
}
