import client from "./client";
import constants from "../config/constants";

const login = (data) => client.post(constants.ENDPOINTS.LOGIN, data);

export default {
  login,
};
