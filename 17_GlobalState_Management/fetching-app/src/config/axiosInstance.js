import axios from "axios";
import CONST from "../utils/constant";

const config = {
  baseURL: CONST.APP_BASE_URL,
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": "PZU7LzOdagyQqDeQOuZU4eO7BmAfvaQsSRMJ4BR4yZ8DGnDn6Cy2Wn0EHtB39n4Q",
  },
};
console.log(CONST.APP_BASE_URL);
const axiosInstance = axios.create(config);

export default axiosInstance;
