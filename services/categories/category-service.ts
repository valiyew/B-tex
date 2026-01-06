import { useFetch } from "../../composables/useFetch";
import type { CategoryType } from "./category-service-type";

export const useCategories = () => {
  const getCategories = (params: any) => {
    let language = "ru";

    if (process.client) {
      const savedLanguage = localStorage.getItem("get-language");

      if (savedLanguage) {
        language = savedLanguage;
      }
    }

    return useFetch<CategoryType.IType>("api/categories", {
      method: "GET",
      params,
      headers: {
        Language: language,
      },
    });
  };

  return { getCategories };
};
