import { useMutation, useQuery } from "react-query";
import {
  createPost as createPostRequest,
  getPosts,
} from "../http/services/posts";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const usePosts = () => {
  const [categoryId, setCategoryId] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get("page") || 1);
  const { data: posts, ...postsQuery } = useQuery(["posts", page], () =>
    getPosts(categoryId, page)
  );
  const { mutate: createPost } = useMutation((postData) =>
    createPostRequest(postData, page)
  );

  const changeCategory = (categoryId) => {
    setCategoryId(categoryId);
  };

  const handleChangePage = (page) => {
    const newParams = new URLSearchParams();
    newParams.set("page", page);
    setPage(page);

    setSearchParams(newParams);
  };

  return {
    createPost,
    posts: posts?.data || [],
    meta: posts?.meta,
    page,
    handleChangePage,
    postsQuery,
    changeCategory,
  };
};
