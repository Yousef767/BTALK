import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";

const DashLink = ({ children, href, className }) => {
  const lang = useLocale();
  return (
    <Link href={`/${lang}/dashboard/${href}`} className={className}>
      {children}
    </Link>
  );
};

export default DashLink;
