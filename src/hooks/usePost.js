import { useQuery } from "react-query";
import { getPost } from "../http/services/posts";

export const usePost = (id) => {
  const { data, ...rest } = useQuery(["post", id], () => getPost(id), {
    enabled: !!id,
  });

  return {
    post: data,
    ...rest,
  };
};
