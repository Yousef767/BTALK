import React from "react";
import Image from "next/image";
const Navbar = ({ close }) => {
  return (
    <div className="rl">
      <div
        className={`relative max-w-[450px] w-[100%] mx-auto  px-[24px] pt-[2vh] 
          "pb-[8px]"
          `}
      >
        <div className={` flex justify-between items-center  `}>
          <button
            className="w-[56px] h-[56px] flex items-center justify-center rounded-[16px] border-[1px] border-solid border-primary1"
            onClick={close}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.9101 20.67C8.7201 20.67 8.5301 20.6 8.3801 20.45C8.0901 20.16 8.0901 19.68 8.3801 19.39L14.9001 12.87C15.3801 12.39 15.3801 11.61 14.9001 11.13L8.3801 4.61C8.0901 4.32 8.0901 3.84 8.3801 3.55C8.6701 3.26 9.1501 3.26 9.4401 3.55L15.9601 10.07C16.4701 10.58 16.7601 11.27 16.7601 12C16.7601 12.73 16.4801 13.42 15.9601 13.93L9.4401 20.45C9.2901 20.59 9.1001 20.67 8.9101 20.67Z"
                fill="#585158"
              />
            </svg>
          </button>

          <Image
            src={
              "https://res.cloudinary.com/freelancer3223/image/upload/v1710695066/thebtalk_images/logo_x9b6tp.svg"
            }
            width={70}
            height={56}
            priority
            alt="logo"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
