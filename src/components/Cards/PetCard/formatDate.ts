export function formatDate(date: Date): string {
  const ageDifference = Date.now() - date.getTime();
  const ageDate = new Date(ageDifference);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  if (age < 1) {
    let months: number;
    months = (new Date().getFullYear() - date.getFullYear()) * 12;
    months -= date.getMonth();
    months += new Date().getMonth();
    months = months <= 0 ? 0 : months - 1;
    return `${months} ${months === 1 ? "mês" : "meses"}`;
  }
  return `${age} ${age === 1 ? "ano" : "anos"}`;
}
