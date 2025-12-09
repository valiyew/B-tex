<template>
  <div>
    <Navbar :propVal="propVal" @update="updateValue" />
    <Header :propVal="propVal" @update="updateValue" />
    <AboutCompany :propVal="propVal" @update="updateValue" />
    <Product :propVal="propVal" @update="updateValue" :page="true" />

    <div class="bg">
      <Footer :propVal="propVal" @update="updateValue" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Footer, Navbar } from "@/components/layout";
import { Header, AboutCompany, Product } from "@/components";

const propVal = ref(false);

const updateValue = () => {
  propVal.value = !propVal.value;
};
</script>

<style scoped>
.bg {
  background: #f5f5f7;
}
</style>
