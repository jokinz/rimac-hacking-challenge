export const calcTotalPlan = ({
  minimo,
  montoBase,
  llantaRobada,
  choque,
  atropello,
}) => {
  choque = montoBase > 16000 ? false : choque;
  let total = ((montoBase - minimo) / 100 + 1) * 20;
  total = llantaRobada ? total + 15 : total;
  total = choque ? total + 20 : total;
  total = atropello ? total + 50 : total;
  return total;
};

export const validateDocumentInput = (input, documentType) => {
  let validChars;
  switch (documentType) {
    case "dni":
      validChars = /^[0-9]{0,8}$/;
      break;

    case "ruc":
      validChars = /^[0-9]{0,11}$/;
      break;

    default:
      break;
  }
  if (input.match(validChars)) {
    return true;
  } else {
    return false;
  }
};
export const validateCelularInput = (input) => {
  const validChars = /^[0-9]{0,9}$/;
  if (input.match(validChars)) {
    return true;
  } else {
    return false;
  }
};
export const validatePlacaInput = (input) => {
  const validChars = /^[a-z0-9-]{0,7}$/i;
  if (input.match(validChars)) {
    return true;
  } else {
    return false;
  }
};

export const validateDocumentFormat = (value, documentType) => {
  let format;
  switch (documentType) {
    case "dni":
      format = /^[0-9]{8}$/;
      break;

    case "ruc":
      format = /^[0-9]{11}$/;
      break;

    default:
      break;
  }
  if (value.match(format)) {
    return true;
  } else {
    return false;
  }
};
export const validateCelularFormat = (value) => {
  const format = /^[0-9]{9}$/;
  if (value.match(format)) {
    return true;
  } else {
    return false;
  }
};
export const validatePlacaFormat = (value) => {
  const validFormat = /^([a-z0-9][a-z0-9][a-z0-9]-[a-z0-9][a-z0-9][a-z0-9])$/i;
  if (value.match(validFormat)) {
    return true;
  } else {
    return false;
  }
};
// export const validateForm = (
//   document,
//   documentType,
//   celular,
//   placa,
//   politica
// ) => {
//   let validForm = true;
//   return validForm;
// };
