import { $authHost, $host } from "..";

export const createPost = async (postData) => {
  const { data } = await $authHost.post("/posts", postData);
  return data;
};

export const getPosts = async (categoryId) => {
  const { data } = await $host.get("/posts", null, { params: { categoryId } });
  return data;
};

export const getPost = async (id) => {
  const { data } = await $host.get(`posts/${id}`);
  return data;
};
