import constants from "../config/constants";

const print = (result) => {
  const message = result.data ? result.data.error : constants.ERRORS.UNKNOWN;
  console.log(constants.ERRORS.LOG_TITLE, message);
  return message;
};

export default {
  print,
};
