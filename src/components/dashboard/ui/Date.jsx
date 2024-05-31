import React, { Suspense } from "react";
import { useFormatter } from "next-intl";

const DateComponent = ({ date }) => {
  const format = useFormatter();
  const dateTimeA = new Date(date);

  return (
    <Suspense>
      {format.dateTime(dateTimeA, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </Suspense>
  );
};

export default DateComponent;
