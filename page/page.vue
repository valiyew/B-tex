<template>
  <div>
    <Navbar />
    <Header />
    <AboutCompany />
    <div class="bg">
      <WeProduce />
      <Product />
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script setup>
import { Footer, Navbar } from "../components/layout/index";
import { Header, AboutCompany, WeProduce, Product } from "../components/index";
</script>

<style lang="scss" scoped>
.bg {
  background: var(--Apple-Grey, #f5f5f7);
}
</style>
