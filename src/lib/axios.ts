import axios from "axios";
import { SetUserLocalStorage } from "../contexts/Auth/Util";

export const api = axios.create({
  baseURL: "https://rentcar-server.onrender.com",
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 500) {    
      // Redirect to login component
      window.location.href = "/login";
      SetUserLocalStorage(null);
    }
  }
);