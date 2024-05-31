import React from "react";
import Link from "next/link";
const Button = ({ link, text, href, className, clickHandler, disable }) => {
  const style =
    "py-[8px] px-[16px] flex justify-center items-center gap-[8px] rounded-[16px] bg-primary1 text-white font-[700] leading-[150%] h-[56px] w-full transition-all duration-300";
  return (
    <>
      {link ? (
        <Link href={href} className={`${style}`}>
          {text}
        </Link>
      ) : (
        <button
          className={`${style} ${className}`}
          onClick={clickHandler}
          disabled={disable}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
