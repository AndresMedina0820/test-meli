import { useTransformPrice } from "../../../hooks/useTransformPrice";

export const Price = ( {amount, currency}: {amount: number, currency: string}) => {
  return (
    <>{useTransformPrice(amount, currency)}</>
  );
};
