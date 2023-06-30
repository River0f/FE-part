import { useMutation, useQuery } from "react-query";
import {
  createComment as createCommentRequest,
  getPost,
} from "../http/services/posts";

export const usePost = (id) => {
  const { data, ...rest } = useQuery(["post", id], () => getPost(id), {
    enabled: !!id,
  });

  const { mutate: createComment } = useMutation((comment) =>
    createCommentRequest(id, comment)
  );

  return {
    post: data,
    createComment,
    ...rest,
  };
};
