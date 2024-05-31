import React, { Suspense } from "react";
import { useFormatter } from "next-intl";

const TimeFormat = ({ date }) => {
  const format = useFormatter();
  const dateTimeA = new Date(date);

  return (
    <Suspense fallback={<p>loading</p>}>
      {format.dateTime(dateTimeA, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </Suspense>
  );
};

export default TimeFormat;
