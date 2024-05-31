import React from "react";
import { useFormatter } from "next-intl";
import { Suspense } from "react";

export default function MonthName({ dateString }) {
  const format = useFormatter();
  const dateTimeA = new Date(dateString);

  return (
    <Suspense>
      {format.dateTime(dateTimeA, { year: "numeric", month: "short" })}
    </Suspense>
  );
}
