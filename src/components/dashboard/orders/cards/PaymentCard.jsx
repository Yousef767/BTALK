import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

const PaymentCard = ({ data }) => {
  const lang = useLocale();
  const handlenumber = (number)=>{
    var numberStr = number.toString();
    
    // Determine the length of the string
    var length = numberStr.length;
    
    // If the length is less than or equal to 3, return the number as is
    if (length <= 3) {
        return numberStr;
    }
  
    var parts = [];
    
    var numParts = Math.floor(length / 3);
    var remainder = length % 3;
    
    if (remainder > 0) {
        parts.push(numberStr.substr(0, remainder));
    }
    
    for (var i = 0; i < numParts; i++) {
        parts.push(numberStr.substr(remainder + i * 3, 3));
    }
    
    return parts.join(',');
  }
  return (
    <div className="p-[16px] rounded-[16px] border-[1px] border-secondary6 bg-white w-[362px] h-[117px] flex flex-col justify-between">
      <p className="text-secondary3 text-[19px] font-[500]">
        {lang == "en" ? data.title_en : data.title_ar}
      </p>
      <div className="flex justify-between items-center ">
        <div className="text-primary3 text-[40px] font-[400] flex items-end justify-end leading-[0]">
          <span id="pt40" className={data.title_en === 'Paymant Failed' ? 'redColor' : ''}>{handlenumber(data.number)} <span className="colorGray">دينار</span></span>
        </div>
        <Image
          src={data.image}
          width={57}
          height={57}
          alt="order-details"
          priority
          className=""
        />
      </div>
    </div>
  );
};

export default PaymentCard;
