import { $authHost, $host } from "..";

export const login = async ({ email, password }) => {
  const { data } = await $host.post("/users/login", { email, password });
  return data;
};

export const register = async ({ nickname, email, password }) => {
  const { data } = await $host.post("/users/register", {
    nickname,
    email,
    password,
  });
  return data;
};

export const getUser = async () => {
  const { data } = await $authHost.get("/users/me");
  return data;
};
