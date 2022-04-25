import axios from "axios";
import auth from "./authService";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:3000/api";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("An unexpected error occured.");
  }

  return Promise.reject(error);
});

export function setJWT(jwt) {
  axios.defaults.headers.common["x-auth-token"] = auth.getJWT(jwt);
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJWT,
};
