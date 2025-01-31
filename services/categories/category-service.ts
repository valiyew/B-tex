import { useFetch } from "../../composables/useFetch";
import type { CategoryType } from "./category-service-type";

export const useCategories = () => {
  const getCategories = (params: any) => {
    return useFetch<CategoryType.IType>("api/categories", {
      method: "GET",
      params,
    });
  };

  return { getCategories };
};
