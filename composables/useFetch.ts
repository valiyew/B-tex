export const useFetch = <T>(url: string, params: {}) => {
  const config = useRuntimeConfig().public;

  return $fetch<T>(`${config.BaseUrl}/${url}`, {
    ...params,
  });
};
