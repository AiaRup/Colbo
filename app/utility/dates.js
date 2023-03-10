import dayjs from "dayjs";

export function formatMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber);
  return date.toLocaleString("en-US", {
    month: "long",
  });
}

export const transformDateToString = (date, fromat = "DD/MM/YYYY") =>
  dayjs(date.toDate()).format(fromat);
