export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Encode an object as url query string parameters
 * - includes the leading "?" prefix
 * - example input — {key: "value", alpha: "beta"}
 * - example output — output "?key=value&alpha=beta"
 * - returns empty string when given an empty object
 */
export function encodeQueryString(params: { [x: string]: string | number | boolean }) {
  const keys = Object.keys(params);
  return keys.length
    ? '?' + keys.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])).join('&')
    : '';
}

export function getDaysArray(start: Date, end: Date) {
  for (var dates: Date[] = [], dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
    dates.push(new Date(dt));
  }
  return dates;
}
