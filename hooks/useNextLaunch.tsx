import { useEffect, useState } from "react";
import { remainingTime } from "../utils/countdown";

const useNextLaunch = (unixEndDate = 1621989370) => {
  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);

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
