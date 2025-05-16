export function isNumber(value: string): boolean {
  const num = +value;
  if (num) { return true };
  return false
}

export function isNotEmpty(value: string): boolean {
  if (value.trim() !== '') return true;
  return false
}

export function isLetterWord(value: string): boolean {
  return /^\p{L}+$/u.test(value);
}