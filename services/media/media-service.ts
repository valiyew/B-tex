import type { SliderType } from "../slider/slider-service-type";
import { useFetch } from "./../composables/useFetch";

export const useMedia = () => {
  const getMedia = (params: any) => {
    return useFetch<SliderType.IType>("api/media", () => {
      method: "GET";
      params;
    });
  };

  return { getMedia };
};
