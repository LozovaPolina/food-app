export function isNumber(value: string): boolean {
  const num = +value;
  if (typeof num === "number") return true;
  return false
}

export function isNotEmpty(value: string): boolean {
  if (value.trim() === '') return true;
  return false
}