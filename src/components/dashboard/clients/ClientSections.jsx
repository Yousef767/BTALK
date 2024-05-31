"use client";
import React, { useEffect, useState } from "react";
function ClientSections({ClientId}) {
  const [lang, setLang] = useState(document.querySelector("html").lang);
  useEffect(() => {
    let htmllang = document.querySelector("html").lang;
    setLang(htmllang);
  }, [lang]);
  return (
    <>
    {lang === "ar" ? (
          <div className="secLinks">
            <a
              href={`/ar/dashboard/clients/${ClientId}`}
              label="profile"
            >
              الملف الشخصى
            </a>
            <a
              href={`/ar/dashboard/clients/${ClientId}/gallery`}
              label="gallery"
            >
              المعرض
            </a>
            <a
              href={`/ar/dashboard/clients/${ClientId}/invoices`}
              label="invoices"
            >
              الفواتير
            </a>
            <a
              href={`/ar/dashboard/clients/${ClientId}/ordershistory`}
              label="ordershistory"
            >
              سجل الطلبات
            </a>
            <a
              href={`/ar/dashboard/clients/${ClientId}/invites`}
              label="invites"
            >
              الدعوات
            </a>
          </div>
        ) : (
          <div className="secLinks">
            <a
              href={`/en/dashboard/clients/${ClientId}`}
              label="profile"
            >
              {" "}
              Profile{" "}
            </a>
            <a
              href={`/en/dashboard/clients/${ClientId}/gallery`}
              label="gallery"
            >
              Gallery
            </a>
            <a
              href={`/en/dashboard/clients/${ClientId}/invoices`}
              label="invoices"
            >
              Invoices
            </a>
            <a
              href={`/en/dashboard/clients/${ClientId}/ordershistory`}
              label="ordershistory"
            >
              {" "}
              Orders history
            </a>
            <a
              href={`/en/dashboard/clients/${ClientId}/invites`}
              label="invites"
            >
              Invites
            </a>
          </div>
        )}
    </>
  )
}

export default ClientSections