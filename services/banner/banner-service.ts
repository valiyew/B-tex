import { useFetch } from "../../composables/useFetch";
import type { BannerType } from "./banner-service-type";

export const useBanner = () => {
  const getBanner = (params: any) => {
    return useFetch<BannerType.IType>("api/banners", {
      method: "GET",
      params,
    });
  };

  return { getBanner };
};
