import React from "react";
import { Puff } from "react-loader-spinner";

const Loading = () => {
  return (
    <Puff
      visible={true}
      height="80"
      width="80"
      color="#EA9967"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loading;
