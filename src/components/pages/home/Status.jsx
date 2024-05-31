import React from "react";

const Status = ({ process }) => {
  return (
    <>
      {" "}
      {process == "done" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="white"
          className="relative z-[2]"
        >
          <circle cx="10" cy="10" r="8.5" stroke="#AFAFAF" strokeWidth="3" />
        </svg>
      ) : process == "active" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="relative z-10"
        >
          <circle cx="10" cy="10" r="5" stroke="#EA9967" strokeWidth="10" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="#979797"
        >
          <circle
            cx="10"
            cy="10"
            r="5"
            fill="#979797"
            stroke="#979797"
            strokeWidth="10"
          />
        </svg>
      )}
    </>
  );
};

export default Status;
