import { create } from "apisauce";
import storage from "../auth/storage";
import constants from "../config/constants";

const apiClient = create({
  baseURL: constants.HOST_URL,
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = storage.getToken();
  if (!authToken) return;

  request.headers[constants.AUTH_TOKEN_HEADER] = authToken;
});

export default apiClient;
