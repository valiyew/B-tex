import { useFetch } from "../../composables/useFetch";
import type { BannerType } from "./banner-service-type";

export const useBanner = () => {
  const getBanner = (params: any) => {
    let language = "ru";

    if (process.client) {
      const savedLanguage = localStorage.getItem("get-language");

      if (savedLanguage) {
        language = savedLanguage;
      }
    }

    return useFetch<BannerType.IType>("api/banners", {
      method: "GET",
      params,
      headers: {
        Language: language,
      },
    });
  };

  return { getBanner };
};
