"use client";
import Header from "@/components/dashboard/header/Header";
import React, { useEffect, useRef, useState } from "react";
import ClientSections from "@/components/dashboard/clients/ClientSections";
function page({ params }) {
  const [lang, setLang] = useState(document.querySelector("html").lang);

  useEffect(() => {
    let htmllang = document.querySelector("html").lang;
    setLang(htmllang);
  }, [lang]);

  useEffect(() => {
    let navLst = window.location.href.split("/");
    let links = document.querySelectorAll(".secLinks a");
    links.forEach((e) => {
      e.getAttribute("label") === navLst[7]
        ? e.classList.add("active")
        : e.classList.remove("active");
    });
    if (navLst[7] === undefined) {
      links[0].classList.add("active");
    }
  }, []);

  const ref = useRef([]);

  const showImages = (i) => {
    const button = ref.current[i];
    ref.current.forEach((e)=>{e === button ? button.parentElement.parentElement.classList.toggle('active'):e.parentElement.parentElement.classList.remove('active')})


  };
  const [gallery, setgallery] = useState([
    {
      id:12,
      title:'بعد تنفيذ المخطط',
      images:['/media/img1.png','/media/img2.png','/media/img3.png']
    },
    {
      id:34,
      title:'نتائج موعد الاستشارة',
      images:['/media/img1.png','/media/img2.png','/media/img3.png']
    },
    {
      id:56,
      title:'قبل تنفيذ المخطط',
      images:['/media/img1.png','/media/img2.png','/media/img3.png']
    },
  ]);
  return (
    <div className="flex flex-col h-[100vh]">
      <Header title={"العملاء"} crumb={"ايلا ياسر"} />
      <div className="setcNav">
        <ClientSections ClientId={params.clientId} />
        <div className="clientContainer">
          <h1 className="hd1">
            {lang === "ar" ? "معرض الصور" : "Gallery"}
            <div className="btn">
              <i className="fa-regular fa-plus"></i> اضافة البوم
            </div>
          </h1>
          <div className="rowImages">

            {gallery.map((e,i)=>(
              <div className="iRow" key={i}>
              <div className="Top">
                <div className="arrow" ref={(element) => (ref.current[i] = element)} onClick={()=>{showImages(i)}}>
                  <p><i className="fa-regular fa-angle-down"></i></p>
                  <span>{e.title}</span>
                </div>
                <div className="btn btn2">
                  <i className="fa-regular fa-plus"></i> اضافة
                </div>
              </div>
              <div className="Bottom">
                {e.images.map((e,i)=>(
                  <div className="image" key={i}>
                  <img src={e} alt="" />
                  <a
                    href={e}
                    download
                    className="fa-regular fa-arrow-down-to-arc"
                  ></a>
                  <i className="fa-regular fa-trash"></i>
                </div>
                ))}
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
