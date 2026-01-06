import { useFetch } from "../../composables/useFetch";
import type { ProductType } from "./product-service-type";

export const useProduct = () => {
  const getProduct = (params: any) => {
    let language = "ru";

    if (process.client) {
      const savedLanguage = localStorage.getItem("get-language");

      if (savedLanguage) {
        language = savedLanguage;
      }
    }

    return useFetch<ProductType.IType>("api/products", {
      method: "GET",
      params,
      headers: {
        Language: language,
      },
    });
  };

  return { getProduct };
};
