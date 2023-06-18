import { $host } from "..";

export const getCategories = async () => {
  const { data } = await $host.get("/categories");
  return data;
};
