import axios from "axios";

export const BASE_API_URL = import.meta.env.VITE_BASE_API_URl;
export const BASE_URL = import.meta.env.VITE_BASE_URl;

export const $host = axios.create({
  baseURL: BASE_API_URL,
});

export const $authHost = axios.create({
  baseURL: BASE_API_URL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);
