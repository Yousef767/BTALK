import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

const NavLink = ({ children, href, className }) => {
  const lang = useLocale();
  return (
    <Link href={`/${lang}${href}`} className={className}>
      {children}
    </Link>
  );
};

export default NavLink;
