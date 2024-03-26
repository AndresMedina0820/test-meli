export const useTransformPrice = (amount: number, currency: string) => {
  return (
    <>
      {amount && currency && Number(amount).toLocaleString("es-AR", {
        style: "currency",
        currency: currency,
      })}
    </>
  );
};
