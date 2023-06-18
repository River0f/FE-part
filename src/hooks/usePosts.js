import { useMutation, useQuery } from "react-query";
import {
  createPost as createPostRequest,
  getPosts,
} from "../http/services/posts";
import { useState } from "react";

export const usePosts = () => {
  const [categoryId, setCategoryId] = useState(null);

  const { data: posts, ...postsQuery } = useQuery("posts", () =>
    getPosts(categoryId)
  );
  const { mutate: createPost } = useMutation((postData) =>
    createPostRequest(postData)
  );

  const changeCategory = (categoryId) => {
    setCategoryId(categoryId);
  };

  return {
    createPost,
    posts: posts?.data || [],
    meta: posts?.meta,
    postsQuery,
    changeCategory,
  };
};
