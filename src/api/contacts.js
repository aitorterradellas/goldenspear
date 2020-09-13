import constants from "../config/constants";
import client from "./client";

const getContacts = () => client.get(constants.ENDPOINTS.CONTACTS);

export default {
  getContacts,
};
