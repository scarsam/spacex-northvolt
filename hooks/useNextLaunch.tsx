import { useEffect, useState, useRef } from "react";
import { remainingTime } from "../utils/countdown";

const useNextLaunch = (unixEndDate = 1621989370) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const endDate = new Date(unixEndDate * 1000).getTime();

    const timeinterval = setInterval(() => {
      const { distance, days, hours, minutes, seconds } = remainingTime(
        endDate,
      );

      if (distance <= 0) {
        clearInterval(timeinterval);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);

    return () => clearInterval(timeinterval);
  }, []);

  return { days, hours, minutes, seconds };
};

export { useNextLaunch };
