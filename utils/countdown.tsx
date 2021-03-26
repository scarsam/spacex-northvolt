export const remainingTime = (countDownDate) => {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const msPerSecond = 1000;
  const msPerMinute = msPerSecond * 60;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;

  const days = Math.floor(distance / msPerDay);
  const hours = Math.floor((distance % msPerDay) / msPerHour);
  const minutes = Math.floor((distance % msPerHour) / msPerMinute);
  const seconds = Math.floor((distance % msPerMinute) / msPerSecond);

  return {
    distance,
    days,
    hours,
    minutes,
    seconds,
  };
};
