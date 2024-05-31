import React, { Suspense } from "react";
import { useNow, useFormatter } from "next-intl";

const CalcTime = ({ time }) => {
  // Use the global now value initially …
  const now = useNow({
    // … and update it every 10 seconds
    updateInterval: 1000 * 10,
  });

  const format = useFormatter();
  const dateTime = new Date(time);

  return <Suspense>{format.relativeTime(dateTime, now)}</Suspense>;
};

export default CalcTime;
