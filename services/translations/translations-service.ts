import { useFetch } from "./../composables/useFetch";

export const useTranslations = () => {
  const getTranslations = (params: any) => {
    let language = "ru";

    if (process.client) {
      const savedLanguage = localStorage.getItem("get-language");

      if (savedLanguage) {
        language = savedLanguage;
      }
    }

    return useFetch("api/translations", {
      method: "GET",
      params,
      headers: {
        Language: language,
      },
    });
  };

  return { getTranslations };
};
