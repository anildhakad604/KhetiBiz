export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "Asia/Kolkata",
});

export function formatDate(iso: string) {
  return dateFormatter.format(new Date(iso));
}

const numberFormatter = new Intl.NumberFormat("en-IN");

export function formatNumber(value: number) {
  return numberFormatter.format(value);
}
