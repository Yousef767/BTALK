// components/DayNameFromDate.js

import { useFormatter } from "next-intl";
import { Suspense } from "react";

export default function DateName({ dateString }) {
  const format = useFormatter();
  const dateTimeA = new Date(dateString);

  return (
    <Suspense>{format.dateTime(dateTimeA, { weekday: "short" })}</Suspense>
  );
}
