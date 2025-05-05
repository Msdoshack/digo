export const calculateDisCount = (oldPrice: number, newPrice: number) => {
  return (((oldPrice - newPrice) / oldPrice) * 100).toFixed(1);
};
