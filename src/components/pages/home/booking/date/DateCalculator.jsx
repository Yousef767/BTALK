import React, { Suspense } from "react";
import { useFormatter } from "next-intl";

const DateCalculator = ({ date }) => {
  const format = useFormatter();
  const dateTimeA = new Date(date);

  return (
    <Suspense>
      {format.dateTime(dateTimeA, {
        day: "2-digit",
      })}
    </Suspense>
  );
};

export default DateCalculator;
