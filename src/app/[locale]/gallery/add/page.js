import Container from "@/components/pages/gallery/add/Container";
import Header from "@/components/ui/Header";
import { useTranslations } from "next-intl";

export default function AddGallery() {
  const t = useTranslations("gallery");
  return (
    <main className="min-h-[100vh] pt-[110px] pb-[98px]">
      <Header title={t("add-image")} bg="bg-white" />
      <Container />
    </main>
  );
}
