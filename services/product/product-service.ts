import { useFetch } from "../../composables/useFetch";
import type { ProductType } from "./product-service-type";

export const useProduct = () => {
  const getProduct = (params: any) => {
    return useFetch<ProductType.IType>("api/products", {
      method: "GET",
      params,
    });
  };

  return { getProduct };
};
