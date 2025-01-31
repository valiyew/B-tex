<template>
  <div>
    <Navbar :propVal="propVal" @update="updateValue" />
    <Header :propVal="propVal" @update="updateValue" />
    <AboutCompany :propVal="propVal" @update="updateValue" />
    <div class="bg">
      <WeProduce :propVal="propVal" @update="updateValue" />
      <Product :propVal="propVal" @update="updateValue" />
    </div>
    <Sliders :propVal="propVal" @update="updateValue" />
    <div class="bg">
      <Gallery :propVal="propVal" @update="updateValue" />
      <Footer :propVal="propVal" @update="updateValue" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Footer, Navbar } from "../components/layout/index";
import {
  Header,
  AboutCompany,
  WeProduce,
  Product,
  Sliders,
  Gallery,
} from "../components/index";

const propVal = ref(false);

const updateValue = () => {
  propVal.value = !propVal.value;
};
</script>

<style lang="scss" scoped>
.bg {
  background: #f5f5f7;
}
</style>
