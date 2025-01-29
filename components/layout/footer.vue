<template>
  <footer>
    <div class="footer-section">
      <p>Авторское право © 2025. Все права защищены.</p>
      <div class="logo">
        <p>Designed by</p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
footer {
  width: 100%;
  padding: 0px 260px;

  .footer-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid #c2c2c3;
    padding: 44px 140px;
    p {
      font-family: "TT Interfaces", sans-serif;
      font-size: 16px;
      color: var(--black);
    }
  }
}
</style>
