import React from "react";

const BottomActionsContaienr = ({ children, className }) => {
  return (
    <div
      className={`fixed bg-white z-[2] bottom-0 left-0 w-full px-[24px] py-[16px] rounded-[24px_24px_0px_0px] shadow-[0px_0px_16px_0px_rgba(0,0,0,.07)] `}
      style={className}
    >
      {children}
    </div>
  );
};

export default BottomActionsContaienr;
