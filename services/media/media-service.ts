import { useFetch } from "../../composables/useFetch";
import type { MediaType } from "./media-service-type";

export const useMedia = () => {
  const getMedia = (params: any) => {
    return useFetch<MediaType.IType>("api/media", () => {
      method: "GET";
      params;
    });
  };

  return { getMedia };
};
