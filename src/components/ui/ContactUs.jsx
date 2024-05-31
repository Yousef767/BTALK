import React from "react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    url: "https://facebook.com/",
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1710686253/thebtalk_images/logos_facebook_ikrf2r.svg",
  },
  {
    url: "https://twitter.com/",
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1710686253/thebtalk_images/icon_yhvpdn.svg",
  },
  {
    url: "https://t.me/Taher_Abozeid1",
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1710686253/thebtalk_images/logos_telegram_g5zdp6.svg",
  },
  {
    url: "https://wa.me/+201026877608",
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1710686253/thebtalk_images/logos_whatsapp-icon_bhsltx.svg",
  },
];

const ContactUs = () => {
  return (
    <ul className="flex items-center gap-[24px]">
      {socialLinks.map((el) => (
        <li key={el.image}>
          <Link href={el.url} target="_blank">
            <Image
              src={el.image}
              width={40}
              height={40}
              alt="socila media connection"
              className=""
              priority
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ContactUs;
