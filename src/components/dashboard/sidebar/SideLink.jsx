import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
const SideLink = ({ data }) => {
  const pathname = usePathname();
  const lang = useLocale();
  return (
    <Link
      className={`w-full h-[48px] flex items-center gap-[8px] rounded-[8px] px-[16px] text-[19px] font-[500]  transition-all border-b-[2px] border-transparent hover:border-b-[2px] hover:border-primary1 ${
        pathname.endsWith(data.url_tag)
          ? "bg-primary1 text-white border-primary1"
          : "text-primary1"
      }`}
      href={`/${lang}/dashboard${data.url}`}
    >
      {pathname.endsWith(data.url_tag) ? data.svg_white : data.svg_black}

      <span className="pt-[6px]">
        {lang == "en" ? data.title_en : data.title_ar}
      </span>
    </Link>
  );
};

export default SideLink;
