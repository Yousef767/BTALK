import React from "react";
import DashLink from "../../ui/DashLink";
import Image from "next/image";
import Time from "../../ui/Time";

const ChatItem = ({ data }) => {
  return (
    <DashLink
      href={`chats/${data.userId}`}
      className={"py-[16px] flex items-center justify-between"}
    >
      <div className="flex items-center gap-[8px]">
        <Image
          src={data.image}
          width={56}
          height={56}
          alt="user image"
          className="w-[56px] h-[56px] rounded-[8px] overflow-hidden"
          priority
        />
        <div className="flex flex-col gap-[4px]">
          <h6 className="text-secondary2 font-[500]">{data.name}</h6>
          <p className="text-secondary3 text-[14px] font-[400]">
            {data?.messages[data.messages.length - 1].image
              ? "تم ارسال صورة"
              : data.messages[data.messages.length - 1].message}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-[6px]">
        <Time time={data.date} />
        <span className="w-[20px] h-[20px] bg-primary3 text-white rounded-[4px] leading-[24px] text-[14px] font-[400] text-center">
          {data.messages.length}
        </span>
      </div>
    </DashLink>
  );
};

export default ChatItem;
