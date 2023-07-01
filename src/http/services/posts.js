import { $authHost, $host } from "..";

export const createPost = async (postData) => {
  const { data } = await $authHost.post("/posts", postData);
  return data;
};

export const getPosts = async (categoryId, page) => {
  console.log(page);
  const { data } = await $host.get("/posts", {
    params: { categoryId, page },
  });
  return data;
};

export const getPost = async (id) => {
  const { data } = await $host.get(`posts/${id}`);
  return data;
};

export const createComment = async (id, comment) => {
  const { data } = await $authHost.post(`posts/${id}/create-comment`, {
    commentText: comment,
  });
  return data;
};
