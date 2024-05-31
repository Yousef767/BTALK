"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = ({ title, crumb }) => {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between bg-white p-[8px] rounded-[16px] mt-[16px] ">
      <h3 className="text-primary1 font-[700] leading-[150%] px-[8px] flex">
        {crumb ? (
          <>
            <button
              onClick={() => router.back()}
              className="text-secondary3 font-[500] cursor-pointer"
            >
              {title}
            </button>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M12.4999 16.7248C12.4822 16.7248 12.4667 16.7216 12.4534 16.7162C12.4405 16.711 12.4265 16.7026 12.4118 16.6879L6.97846 11.2546C6.29038 10.5665 6.29038 9.43306 6.97846 8.74499L12.4118 3.31166L12.0616 2.96147L12.4118 3.31166C12.4333 3.29013 12.4641 3.27686 12.4999 3.27686C12.5358 3.27686 12.5665 3.29013 12.588 3.31166C12.6095 3.33319 12.6228 3.36392 12.6228 3.39977C12.6228 3.43562 12.6095 3.46636 12.588 3.48789L7.15468 8.92122C6.55942 9.51648 6.55942 10.4831 7.15468 11.0783L12.588 16.5117C12.6095 16.5332 12.6228 16.5639 12.6228 16.5998C12.6228 16.6327 12.6116 16.6614 12.5931 16.6825C12.5531 16.7168 12.517 16.7248 12.4999 16.7248Z"
                fill="#292D32"
                stroke="#646665"
              />
            </svg>{" "}
            {crumb}
          </>
        ) : (
          title
        )}
      </h3>
      <div className="flex items-center gap-[24px]">
        <button className="relative w-[56px] h-[56px] p-[8px] rounded-[16px] bg-secondary7 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M25.7868 19.32L24.4534 17.1067C24.1734 16.6134 23.9201 15.68 23.9201 15.1334V11.76C23.9201 7.41337 20.3868 3.8667 16.0268 3.8667C11.6668 3.8667 8.13342 7.41337 8.13342 11.76V15.1334C8.13342 15.68 7.88009 16.6134 7.60009 17.0934L6.25342 19.32C5.72009 20.2134 5.60009 21.2 5.93342 22.1067C6.25342 23 7.01342 23.6934 8.00009 24.0267C10.5868 24.9067 13.3068 25.3334 16.0268 25.3334C18.7468 25.3334 21.4668 24.9067 24.0534 24.04C24.9868 23.7334 25.7068 23.0267 26.0534 22.1067C26.4001 21.1867 26.3068 20.1734 25.7868 19.32Z"
              fill="#222325"
            />
            <path
              d="M19 4.42663C18.08 4.06663 17.08 3.86663 16.0267 3.86663C14.9867 3.86663 13.9867 4.05329 13.0667 4.42663C13.64 3.34663 14.7733 2.66663 16.0267 2.66663C17.2933 2.66663 18.4133 3.34663 19 4.42663Z"
              fill="#222325"
            />
            <path
              d="M19.7733 26.68C19.2133 28.2266 17.7333 29.3333 16 29.3333C14.9467 29.3333 13.9067 28.9066 13.1733 28.1466C12.7467 27.7466 12.4267 27.2133 12.24 26.6666C12.4133 26.6933 12.5867 26.7066 12.7733 26.7333C13.08 26.7733 13.4 26.8133 13.72 26.84C14.48 26.9066 15.2533 26.9466 16.0267 26.9466C16.7867 26.9466 17.5467 26.9066 18.2933 26.84C18.5733 26.8133 18.8533 26.8 19.12 26.76C19.3333 26.7333 19.5467 26.7066 19.7733 26.68Z"
              fill="#222325"
            />
          </svg>
          <span className="absolute top-0 right-0 w-[20px] h-[20px] rounded-full flex items-center justify-center pt-[5px] bg-primary3 text-white font-[400] leading-[150%]">
            2
          </span>
        </button>
        <button className="flex items-center gap-[8px] p-[8px] rounded-[16px] bg-secondary7">
          <Image
            src={
              "https://res.cloudinary.com/dachf1ak7/image/upload/v1716213756/Rectangle_1729_1_a1qewp.svg"
            }
            width={40}
            height={40}
            priority
            alt="admin-pic"
            className="rounded-[8px] overflow-hidden"
          />
          <span className="text-primary1 text-[19px] font-[500] leading-[150%] pt-[5px]">
            أهلاً لمياء
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z"
              fill="#222325"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
