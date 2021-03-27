export const displayDate = (date) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month =
    newDate.getMonth() < 10 ? `0${newDate.getMonth()}` : newDate.getMonth();
  const day = newDate.getDay() < 10 ? `0${newDate.getDay()}` : newDate.getDay();

  return `${year}-${month}-${day}`;
};
