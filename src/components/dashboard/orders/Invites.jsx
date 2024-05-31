"use client";
import React, { useEffect, useState } from "react";
import Client2 from "../clients/Client2";


const usersData = [
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_obvhly.png",
    name: "جورى حمدان",
    client_number: "12345",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الكويت",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_1_x4xurr.png",
    name: " ايمان احمد صلاح",
    client_number: "12300",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الاردن",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201787/thebtalk_images/Face_1_2_k9orvh.png",
    name: " كاميليا مسعود",
    client_number: "12045",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الكويت",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201786/thebtalk_images/Face_1_3_f0ix2m.png",
    name: " صوفيا جرجس",
    client_number: "12395",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الامارات",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_1_x4xurr.png",
    name: " ايلا ياسر",
    client_number: "12345",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الكويت",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201786/thebtalk_images/Face_1_6_hqrpcl.png",
    name: "جورى حمدان",
    client_number: "12345",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الامارات",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201786/thebtalk_images/Face_1_7_pqabgc.png",
    name: "جورى حمدان",
    client_number: "12345",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الكويت",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_obvhly.png",
    name: "جورى حمدان",
    client_number: "13345",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok3@gmail.com",
    country: "الكويت",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_1_x4xurr.png",
    name: " ايمان احمد صلاح",
    client_number: "11345",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الكويت",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201787/thebtalk_images/Face_1_2_k9orvh.png",
    name: " كاميليا مسعود",
    client_number: "12315",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الكويت",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201786/thebtalk_images/Face_1_3_f0ix2m.png",
    name: " صوفيا جرجس",
    client_number: "12325",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الكويت",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201790/thebtalk_images/Face_1_1_x4xurr.png",
    name: " ايلا ياسر",
    client_number: "12322",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الامارات",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201786/thebtalk_images/Face_1_6_hqrpcl.png",
    name: "جورى حمدان",
    client_number: "12234",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الكويت",
  },
  {
    image:
      "https://res.cloudinary.com/freelancer3223/image/upload/v1713201786/thebtalk_images/Face_1_7_pqabgc.png",
    name: "جورى حمدان",
    client_number: "14431",
    mobile: "+96522325000",
    last_seen: "2024-04-15T21:13:32.443Z",
    email: "a7medmabrok0@gmail.com",
    country: "الكويت",
  },
];

const Invites = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    document.querySelector('.text-secondary2').style.display = "none";
    setUsers(usersData);
  }, []);
  return (
    <>
      <div className="pt-[24px] flex flex-col gap-[24px] rounded-[24px_24px_0px_0px] bg-white"> 
      <div className="flex flex-col  flex-1 ">
          <div className="flex items-center h-[64px] bg-secondary8 px-[16px] text-secondary3 font-[500]">
            <span className="w-[48px] flex  justify-center">م</span>
            <span className="px-[16px] w-[228px]">العميلة</span>
            <span className="px-[16px] w-[112px]">رقم العميل </span>
            <span className="px-[16px] w-[146px]">رقم الهاتف</span>
            <span className="px-[16px] w-[140px]">الدولة</span>
            <span className="px-[16px] w-[226px] ">الايميل</span>
            <span className="px-[16px] w-[136px]">تاريخ الانضمام </span>
          </div>
          <div className=" overflow-auto pb-[20px] mx-[16px] flex-1 ">
            {users.map((client, i) => (
              <Client2 key={i} data={client} />
            ))}
            {users.length == 0 && (
              <p className="text-center text-primary3 font-[700] mt-8">
                لا يوجد عملاء{" "}
              </p>
            )}
          </div>
        </div>
      </div>


    </>
  );
};

export default Invites;
