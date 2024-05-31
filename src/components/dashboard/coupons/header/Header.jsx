import React from "react";
import Item from "./Item";

const Header = () => {
  return (
    <div className="my-[24px] grid grid-cols-3 gap-[24px] ">
      <Item
        title={"جميع الكوبونات"}
        image={
          "https://res.cloudinary.com/dachf1ak7/image/upload/v1715961615/ticket-2_cgxyqd.svg"
        }
        number={556}
      />
      <Item
        title={"الكوبونات النشطه"}
        image={
          "https://res.cloudinary.com/dachf1ak7/image/upload/v1715961660/ticket-expired_rrue8s.svg"
        }
        number={45}
      />
      <Item
        title={"العملاء المستفيدين"}
        image={
          "https://res.cloudinary.com/dachf1ak7/image/upload/v1715961677/user_qqofrr.svg"
        }
        number={122}
      />
    </div>
  );
};

export default Header;
