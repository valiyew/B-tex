<template>
  <div>
    <Navbar />
    <Header />
    <AboutCompany />
    <div class="bg">
      <WeProduce />
      <Product />
    </div>
    <Sliders />
    <div class="bg">
      <Gallery />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { Footer, Navbar } from "../components/layout/index";
import {
  Header,
  AboutCompany,
  WeProduce,
  Product,
  Sliders,
  Gallery,
} from "../components/index";
</script>

<style lang="scss" scoped>
.bg {
  background: #f5f5f7;
}
</style>
