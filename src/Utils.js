export const calcTotalPlan = ({
  minimo,
  montoBase,
  llantaRobada,
  choque,
  atropello,
}) => {
  choque = montoBase > 16000 ? false : choque;
  let total = ((montoBase - minimo) / 100) * 20;
  total = llantaRobada ? total + 15 : total;
  total = choque ? total + 20 : total;
  total = atropello ? total + 50 : total;
  return total;
};
