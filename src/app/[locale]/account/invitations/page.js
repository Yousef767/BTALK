import Container from "@/components/pages/account/invitations/Container";
import Header from "@/components/ui/Header";
import Image from "next/image";
import React from "react";
export default function Invitation() {
  return (
    <main className="relative min-h-[100vh] linearbg pt-[70px]">
      <Header bg="bg-[#ebc1a7]" />
      {/* <div className="absolute z-0 h-[310px] w-full invitation_bg"></div> */}
      <Image
        src={
          "https://res.cloudinary.com/freelancer3223/image/upload/v1711291742/thebtalk_images/bggggggggg_zqa23z.svg"
        }
        width={390}
        height={310}
        priority
        className="w-full mt-[8px]"
        alt="invitation-bg"
      />
      <Container />
    </main>
  );
}
