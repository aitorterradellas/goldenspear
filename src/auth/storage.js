import jwtDecode from "jwt-decode";
import constants from "../config/constants";

const tokenKey = constants.AUTH_TOKEN_STORE_KEY;
const credentialsKey = constants.CREDENTIALS_STORE_KEY;

const storeToken = (authToken) => {
  localStorage.setItem(tokenKey, authToken);
};

const getToken = () => {
  const token = localStorage.getItem(tokenKey);
  return token;
};

const getUser = () => {
  const token = getToken();
  return token ? jwtDecode(token, { body: true }) : null;
};

const removeToken = () => {
  localStorage.removeItem(tokenKey);
};

const storeCredentials = (data) => {
  const json = JSON.stringify(data);
  localStorage.setItem(credentialsKey, json);
};

const getCredentials = () => {
  const json = localStorage.getItem(credentialsKey);
  if (!json) return null;
  return JSON.parse(json);
};

export default {
  getToken,
  removeToken,
  storeToken,

  getCredentials,
  storeCredentials,

  getUser,
};
