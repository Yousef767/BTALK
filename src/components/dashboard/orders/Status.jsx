import React from "react";

const Status = ({ status }) => {
  return (
    <>
      {status == "done" && (
        <span className="py-[8px] px-[24px] rounded-[16px] bg-secondary8 text-secondary3 font-[500] h-[40px] inline-block">
          تم الانتهاء
        </span>
      )}
      {status == "active" && (
        <span className="py-[8px] px-[24px] rounded-[16px] bg-[#F4FDF8] text-green font-[500] h-[40px] inline-block">
          تم التأكيد{" "}
        </span>
      )}
      {status == "waiting" && (
        <span className="py-[8px] px-[24px] rounded-[16px] bg-red2 text-primary3 font-[500] h-[40px] inline-block">
          {" "}
          فى الانتظار
        </span>
      )}
    </>
  );
};

export default Status;
