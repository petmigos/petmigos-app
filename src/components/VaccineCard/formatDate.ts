import moment from "moment";

export function formatDate(date: Date): string {
  moment.locale("pt-BR");
  return moment(date).format("DD/MM/YYYY");
}
