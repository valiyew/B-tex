import { ref, onMounted } from "vue";
import { useNuxtApp } from "#app";

const isLoading = ref(false);

export function usePageLoader() {
  const nuxtApp = useNuxtApp();

  onMounted(() => {
    // asyncData / fetch pending boshlanganda
    nuxtApp.hook("page:start", () => {
      isLoading.value = true;
    });

    // tugaganda
    nuxtApp.hook("page:finish", () => {
      isLoading.value = false;
    });
  });

  return { isLoading };
}
