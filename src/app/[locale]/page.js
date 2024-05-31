import Packages from "@/components/pages/home/Packages";
import Welcome from "@/components/pages/home/Welcome";
import Header from "@/components/ui/Header";
import MessageIcon from "@/components/ui/MessageIcon";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main className="min-h-[100vh] pb-[140px] pt-[66px] bg-primary4 ">
      <Header lang={true} bg="bg-primary4" />
      <Welcome profile={false} />
      <Packages />
      {/* <MessageIcon withlabel={true} /> */}
      <Navbar />
    </main>
  );
}
