import React, { Suspense } from "react";
import { useFormatter } from "next-intl";

const TimeCalc = ({ time }) => {
  const format = useFormatter();
  const dateTime = new Date(time);
  // Renders "Nov 20, 2020"
  format.dateTime(dateTime, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Suspense>
      {format.dateTime(dateTime, { hour: "numeric", minute: "numeric" })}
    </Suspense>
  );
};

export default TimeCalc;
