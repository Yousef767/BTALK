import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Welcome = ({ profile }) => {
  const t = useTranslations("home");
  return (
    <div
      className={`relative flex items-center justify-center translate-y-[-8px] ${
        profile ? "mb-[12px]" : "mb-[16px]"
      } `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="168"
        height="167"
        viewBox="0 0 168 167"
        fill="none"
        className="rotateAnimation"
      >
        <path
          opacity="0.2"
          d="M0.212182 63.703L4.75836 101.758C5.35347 106.74 7.1884 111.492 10.0952 115.581L37.3366 153.902C44.3117 163.714 56.4768 168.406 68.2342 165.819L103.988 157.953C109.338 156.776 114.264 154.156 118.231 150.377L145.439 124.464C147.664 122.345 149.55 119.897 151.032 117.205L164.192 93.2929C168.481 85.4985 169.09 76.2021 165.854 67.9148L153.654 36.6767C151.666 31.5862 148.325 27.1355 143.992 23.805L121.108 6.21502C113.946 0.709651 104.685 -1.2752 95.8953 0.811656L45.1876 12.8513C40.7627 13.9019 36.6346 15.9448 33.1154 18.8255L10.9979 36.9301C3.06363 43.4248 -1.00408 53.5219 0.212182 63.703Z"
          fill="white"
        />
        <path
          opacity="0.3"
          d="M25.1798 114.313L43.9255 132.851C47.4928 136.379 51.8878 138.956 56.7084 140.346L88.1662 149.417C99.7335 152.752 112.174 148.85 119.764 139.506L135.013 120.732C138.467 116.48 140.691 111.362 141.443 105.936L145.27 78.3177C145.691 75.2743 145.643 72.1841 145.127 69.1553L142.018 50.9317C140.522 42.1615 135.21 34.5078 127.518 30.0377L107.787 18.5721C103.062 15.8264 97.6764 14.4235 92.2122 14.5149L73.2178 14.8326C64.1854 14.9837 55.7021 19.1969 50.1234 26.3022L26.612 56.2477C23.8035 59.8248 21.8451 63.9936 20.8847 68.4389L16.951 86.6473C14.7858 96.6696 17.8892 107.104 25.1798 114.313Z"
          fill="white"
        />
        <path
          opacity="0.5"
          d="M40.7143 49.1414L34.3995 64.0217C32.4564 68.6005 31.6822 73.5906 32.1467 78.5428L34.0799 99.1531C35.2023 111.119 43.358 121.261 54.8049 124.924L67.4051 128.956C72.6699 130.641 78.2978 130.839 83.6677 129.527L102.363 124.96C105.367 124.227 108.24 123.033 110.88 121.421L120.11 115.784C127.678 111.163 132.814 103.429 134.138 94.6607L136.203 80.99C137.012 75.6333 136.355 70.1575 134.303 65.1439L130.278 55.3118C126.852 46.9447 119.836 40.5687 111.18 37.957L86.6255 30.5478C82.2321 29.2222 77.5932 28.9221 73.0656 29.6707L63.4368 31.2627C53.301 32.9385 44.7276 39.6843 40.7143 49.1414Z"
          fill="white"
        />
      </svg>
      {!profile && (
        <p className="absolute z-[2] w-full text-primary2 font-[500] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center">
          {t("welcome")}
        </p>
      )}

      <Image
        src={
          "https://res.cloudinary.com/freelancer3223/image/upload/v1710686795/thebtalk_images/7a18e779d4e9d91553759a443127e422_zkq1gx.jpg"
        }
        width={85}
        height={85}
        priority
        alt="profile image"
        className="rounded-[24px] w-[85px] h-[85px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-[3] "
      />
      <h5
        className={`h5 text-primary1 absolute bottom-[-4px] left-[50%] translate-x-[-50%] text-center w-full`}
        style={{
          fontWeight: profile && "700",
        }}
      >
        لمياء الأنبعي
      </h5>
    </div>
  );
};

export default Welcome;