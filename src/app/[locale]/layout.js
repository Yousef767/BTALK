import { NextIntlClientProvider, useMessages } from "next-intl";
import "./globals.css";
import LayoutContent from "./LayoutContent";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.4.2/css/all.css"
        />
      </head>
      <body className={`${locale == "en" ? "lr" : "rl"}`}>
        <LayoutContent>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </LayoutContent>
      </body>
    </html>
  );
}
