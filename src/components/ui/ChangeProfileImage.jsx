import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ChangeProfileImage = ({
  profileImage,
  selectedImage,
  handleImageChange,
  style,
}) => {
  const t = useTranslations("acc-details");
  return (
    <div
      className={`flex flex-col gap-[16px]  ${!style && "mt-[30px] mb-[40px]"}`}
    >
      <div className="w-[192px] h-[192px] rounded-[32px] overflow-hidden">
        <Image
          src={
            profileImage && !selectedImage
              ? profileImage
              : selectedImage
              ? URL.createObjectURL(selectedImage)
              : "https://res.cloudinary.com/freelancer3223/image/upload/v1711145283/thebtalk_images/Rectangle_1729_cbs8vc.svg"
          }
          width={192}
          height={192}
          priority
          alt="profile image"
          className="max-w-[192]"
        />
      </div>
      <label
        htmlFor="changeImage"
        type="button"
        className="text-[14px] font-[400] text-secondary1
        h-[40px] flex justify-center items-center p-[8px] rounded-[12px] bg-secondary6
        "
      >
        {t("change-image")}
      </label>
      <input
        type="file"
        accept="image/*"
        id="changeImage"
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
};

export default ChangeProfileImage;
