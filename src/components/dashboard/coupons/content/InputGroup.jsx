import Image from "next/image";
import React from "react";

const InputGroup = ({
  placeholder,
  name,
  value,
  changeHandler,
  image,
  isSelect,
  isSelectUser,
  selectValues,
}) => {
  return (
    <div className="flex flex-col gap-[16px] relative">
      <label className="text-secondary1 font-[500]"> {placeholder}</label>
      {isSelect ? (
        <select
          id="dateSelect"
          value={value}
          onChange={changeHandler}
          className="h-[56px] p-[16px] border-[1px] focus:border-primary3 duration-300 text-secondary1 font-[500] outline-none rounded-[16px] bg-transparent  "
          defaultChecked={selectValues[0]}
        >
          {selectValues.map((el, i) => (
            <React.Fragment key={i}>
              {isSelectUser ? (
                <option
                  key={el.name}
                  value={el.id}
                  className=" text-[18px] font-[500]"
                >
                  {el.name}
                </option>
              ) : (
                <option
                  key={el.title}
                  value={el.value}
                  className=" text-[18px] font-[500]"
                >
                  {el.title}
                </option>
              )}
            </React.Fragment>
          ))}
        </select>
      ) : (
        <input
          type="text"
          name={name}
          value={value}
          onChange={changeHandler}
          className="h-[56px] p-[16px] border-[1px] focus:border-primary3 duration-300 text-secondary1 font-[500] outline-none rounded-[16px]"
        />
      )}

      {image && (
        <Image
          src={image}
          width={24}
          height={24}
          priority
          alt={name}
          className="  absolute bottom-[16px] left-[16px] pointer-events-none"
        />
      )}
    </div>
  );
};

export default InputGroup;
