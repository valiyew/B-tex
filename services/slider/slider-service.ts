import { useFetch } from "../../composables/useFetch";
import type { SliderType } from "./slider-service-type";

export const useSlider = () => {
  const getSlider = (params: any) => {
    let language = "ru";

    if (process.client) {
      const savedLanguage = localStorage.getItem("get-language");

      if (savedLanguage) {
        language = savedLanguage;
      }
    }

    return useFetch<SliderType.IType>("api/sliders", {
      method: "GET",
      params,
      headers: {
        Language: language,
      },
    });
  };

  return { getSlider };
};
