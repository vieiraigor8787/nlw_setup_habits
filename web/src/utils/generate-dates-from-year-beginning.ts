import dayjs from "dayjs";

//gerar todas as datas desde o começo do ano
export function generateDatesFromYearBeginning() {
  const firstDayOfYear = dayjs().startOf("year");
  const today = new Date();
  const dates = [];

  let compareDate = firstDayOfYear;
  //enquanto a data for anterior ao dia de hoje
  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate());
    compareDate = compareDate.add(1, "day");
  }

  return dates;
}
