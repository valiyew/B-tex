<script setup>
import Loader from "@/components/loader/Loader.vue";
import { usePageLoader } from "~/composables/usePageLoader";

const { isLoading } = usePageLoader();
</script>

<template>
  <Loader v-if="isLoading" />
  <div class="layout-wrapper">
    <slot />
  </div>
</template>

<style></style>
