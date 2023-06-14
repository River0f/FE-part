import axios from "axios";

export const $host = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URl,
});

export const $authHost = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URll,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);
