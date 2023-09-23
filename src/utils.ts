export const calculateDiscount = (
  price: number,
  percentage: number,
): number => {
  return price * (percentage / 100);
};
