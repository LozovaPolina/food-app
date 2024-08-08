export function isNumber(value: string): boolean {
  const num = +value;
  if (num) { return true };
  return false
}

export function isNotEmpty(value: string): boolean {
  if (value.trim() !== '') return true;
  return false
}

