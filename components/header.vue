<template>
  <div class="header" :style="{ backgroundImage: `url(${bannerImage})` }">
    >
    <div class="overlay"></div>
    <div class="header-title">
      <div class="vector-box">
        <div class="vector vector1"></div>
        <div class="vector vector2"></div>
        <div class="vector vector3"></div>
      </div>
      <div class="title">
        <h1>{{ bannerTitle }}</h1>
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
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useBanner } from "../services/banner/banner-service";

const { getBanner } = useBanner();
const bannerTitle = ref("");
const bannerImage = ref("");

const { data: banner } = await useAsyncData("banner", async () => {
  const response = await getBanner();

  if (!response || !response.results || response.results.length === 0) {
    return null;
  }

  return response.results;
});

onMounted(() => {
  if (banner.value && banner.value.length > 0) {
    bannerTitle.value = banner.value[0].title;
    bannerImage.value = banner.value[0].image;
  }
});
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 3;
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
      bottom: 19px;
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
        font-size: 54px;
        font-weight: 400;
        line-height: 67.2px;
        text-align: left;
        text-transform: uppercase;
      }

      p {
        margin-top: 15px;
        width: 50%;
        font-family: "Golos Text", sans-serif;
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

@media screen and (max-width: 1650px) {
  .header {
    padding: 0px 60px;
    .header-title {
      .title {
        h1 {
          width: 70%;
          font-size: 52px;
        }
      }
    }
  }
}

@media screen and (max-width: 1450px) {
  .header {
    .header-title {
      .title {
        h1 {
          width: 75%;
          font-size: 52px;
        }
      }
    }
  }
}

@media screen and (max-width: 1300px) {
  .header {
    .header-title {
      .title {
        h1 {
          width: 85%;
          font-size: 52px;
        }
        p {
          width: 80%;
          font-size: 16px;
        }
      }
    }
  }
}

@media screen and (max-width: 1050px) {
  .header {
    padding: 0px 50px;
    .header-title {
      .title {
        h1 {
          width: 100%;
          font-size: 48px;
        }
        p {
          width: 90%;
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .header {
    .header-title {
      .title {
        h1 {
          width: 100%;
          font-size: 42px;
        }
        p {
          width: 90%;
        }
      }
    }
  }
}

@media screen and (max-width: 776px) {
  .header {
    .header-title {
      .title {
        h1 {
          width: 100%;
          font-size: 32px;
          line-height: 50px;
        }
        p {
          margin-top: 5px;
          width: 100%;
          font-size: 14px;
        }

        button {
          margin-top: 20px;
          padding: 12px 28px;
          font-size: 14px;
        }
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .header {
    padding: 0px 30px;
    .header-title {
      .title {
        h1 {
          font-size: 26px;
        }
      }
    }
  }
}

@media screen and (max-width: 376px) {
  .header {
    .header-title {
      .title {
        h1 {
          font-size: 18px;
          line-height: 30px;
        }
        p {
          font-size: 12px;
        }

        button {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
