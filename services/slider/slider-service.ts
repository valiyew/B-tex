import { useFetch } from "./../composables/useFetch";
import type { SliderType } from "./slider-service-type";

export const useSlider = () => {
  const getSlider = (params: any) => {
    return useFetch<SliderType.IType>("api/sliders", () => {
      method: "GET";
      params;
    });
  };

  return { getSlider };
};
