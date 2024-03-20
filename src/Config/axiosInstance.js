import axios from "axios";
import { APP_BASE_URL } from "./Setting";

const instance = axios.create({
  baseURL: `${APP_BASE_URL}/app/`,
  headers: {
    "Content-Type": "application/json",
  },
});

//Check Token Exist or not
if (localStorage.hasOwnProperty("token")) {
  instance.defaults.headers.common["Authorization"] =
    localStorage.getItem("token");
}

instance.interceptors.response.use(
  function (response) {
    if (response) {
      if (response.data && response.data.token) {
        // append your request headers with an authenticated token
        response.headers["Authorization"] = `${response.data.token}`;
      }
    }
    if (localStorage.hasOwnProperty("token")) {
      const token = localStorage.getItem("token");
      // append your request headers with an authenticated token
      response.headers["Authorization"] = `${token}`;
    }
    return response;
  },
  function (error) {
    if (typeof error.response != "undefined" && error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default instance;
