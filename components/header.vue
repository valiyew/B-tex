<template>
  <div class="header">
    <div class="overlay"></div>
    <!-- <div class="header-title">
      <div class="vector-box">
        <div class="vector vector1"></div>
        <div class="vector vector2"></div>
        <div class="vector vector3"></div>
      </div>
      <div class="title">
        <h1>
          Biz sifatli qurilish materiallari va uskunalarini yetkazib beramiz
        </h1>
        <p>
          Молодое и динамично развивающееся предприятие специализируется на
          производстве алюминиевых профилей различных типов и размеров.
        </p>

        <button>
          Обратный связь
          <span></span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div> -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 3;
  background-image: url("/assets/heroImg.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  padding: 0px 115px;
  position: relative;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      0deg,
      #020105 0%,
      rgba(2, 1, 5, 0.48) 73.98%,
      rgba(2, 1, 5, 0) 100%
    );
    z-index: 1;
    opacity: 0.6;
  }

  .header-title {
    position: relative;
    height: 100%;
    display: flex;
    gap: 24px;
    color: var(--white);
    text-align: left;
    z-index: 2;

    .vector-box {
      position: absolute;
      bottom: 0;
      display: flex;
      gap: 5px;
      .vector {
        width: 5px;
        background: var(--primary);
      }
      .vector1 {
        margin-top: 40px;
        height: 440px;
      }
      .vector2 {
        margin-top: 20px;
        height: 460px;
      }

      .vector3 {
        height: 480px;
      }
    }

    .title {
      padding-left: 45px;
      position: absolute;
      bottom: 8%;
      h1 {
        width: 65%;
        font-family: "Prosto One", sans-serif;
        font-size: 56px;
        font-weight: 400;
        line-height: 67.2px;
        text-align: left;
        text-transform: uppercase;
      }

      p {
        margin-top: 15px;
        width: 50%;
        font-family: "Golos Text";
        font-size: 18px;
        line-height: 25.2px;
        color: var(--p-color);
      }

      button {
        margin-top: 48px;
        font-family: "Prosto One", sans-serif;
        padding: 16px 32px;
        font-size: 16px;
        font-weight: 400;
        background: var(--primary);
        color: var(--white);
        border: none;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
          opacity: 0.6;
          transform: scale(1.01);
        }

        span {
          margin: 0px 15px;
          border: 1px solid;
        }
      }
    }
  }
}
</style>
