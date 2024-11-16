export const useGenerateCode = () => {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  const stringCode = randomNumber.toString().split("");
  return { stringCode };
};
