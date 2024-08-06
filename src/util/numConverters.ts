

export const addZeroToPositiveNum = (num: number) => {
  if (num > 0 && num < 10) {
    return `0${num}`;
  } 
  return `${num}`;

}