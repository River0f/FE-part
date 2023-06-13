import { $host } from "..";

export const login = async ({ email, password }) => {
  const { data } = await $host.post("/users/login", { email, password });
  return { data };
};
