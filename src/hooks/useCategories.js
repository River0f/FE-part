import { useQuery } from "react-query";
import { getCategories } from "../http/services/category";

export const useCategories = () => {
  const { data, ...rest } = useQuery("categories", () => getCategories());
  return {
    categories: data || [],
    ...rest,
  };
};
