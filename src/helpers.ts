export const formatNumber = (number: number, digits = -3): string => {
  return number.toString().slice(digits);
};
