import { useFetch } from "../../composables/useFetch";
import type { MediaType } from "./media-service-type";

export const useMedia = () => {
  const getMedia = (params: any) => {
    let language = "ru";

    if (process.client) {
      const savedLanguage = localStorage.getItem("get-language");

      if (savedLanguage) {
        language = savedLanguage;
      }
    }

    return useFetch<MediaType.IType>("api/media", {
      method: "GET",
      params,
      headers: {
        Language: language,
      },
    });
  };

  return { getMedia };
};
