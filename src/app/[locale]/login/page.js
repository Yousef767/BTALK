import Button from "@/components/ui/Button";
import ContactUs from "@/components/ui/ContactUs";
import { useLocale, useTranslations } from "next-intl";

export default function Login() {
  const lang = useLocale();
  const t = useTranslations("login");
  return (
    <main className={`${lang == "en" ? "lr" : "rl"}`}>
      <div className="login1bg h-[43.7vh] "></div>
      <div className="absolute top-0 left-0 z-10 flex flex-col justify-end w-full h-screen">
        <div className="  bg-primary5 flex flex-col py-[32px] pb-[0px]  rounded-[48px_48px_0px_0px]">
          <div className="flex flex-col gap-[47px] mb-[40px] px-[24px]">
            <div>
              <h6 className="h6 text-secondary1 mb-[12px] ">
                {" "}
                {t("who-we-are")}
              </h6>
              <p className="b1">{t("who-we-are-description")}</p>
            </div>
            <div>
              <h6 className="h6 mb-[20px] text-secondary2">
                {t("contact-us")}
              </h6>
              <ContactUs />
            </div>
          </div>
          <div className="py-[16px] px-[24px] rounded-[24px_24px_0px_0px] bg-primary5 shadow-[0px_0px_16px_0px_rgba(0,0,0,.07)]">
            {" "}
            <Button
              link={true}
              text={t("signin")}
              href={`/${lang}/login/welcome_back`}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
