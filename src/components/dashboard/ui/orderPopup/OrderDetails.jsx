import React from "react";

const OrderDetails = ({ title, description, className }) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <p className="text-secondary3 font-[500] leading-[150%]">{title}</p>
      <div
        className={`p-[16px] h-[56px] rounded-[16px] font-[500] leading-[150%] ${className}`}
      >
        {description}
      </div>
    </div>
  );
};

export default OrderDetails;
