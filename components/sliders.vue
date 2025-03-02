<template>
  <div class="carousel">
    <div class="carousel-container" :style="carouselStyle">
      <div class="carousel-item" v-for="(item, index) in slider" :key="index">
        <img :src="item.image" alt="" />
        <h3>{{ item.title.en }}</h3>
      </div>
    </div>
    <button @click="prev" class="carousel-control prev">
      <i class="fa-solid fa-chevron-left"></i>
    </button>
    <button @click="next" class="carousel-control next">
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useSlider } from "../services/slider/slider-service";

const activeIndex = ref(0);

const { getSlider } = useSlider();

const { data: slider } = await useAsyncData("slider", async () => {
  const response = await getSlider();

  if (!response || !response.results || response.results.length === 0) {
    return [];
  }

  return response.results.flatMap((item) => item);
});

const carouselStyle = computed(() => {
  return {
    transform: `translateX(-${activeIndex.value * 100}%)`,
  };
});

const next = () => {
  activeIndex.value = (activeIndex.value + 1) % slider.value.length;
};

const prev = () => {
  activeIndex.value =
    (activeIndex.value - 1 + slider.value.length) % slider.value.length;
};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 100px 115px 0px 115px;

  .carousel-container {
    display: flex;
    transition: transform 0.5s ease;
    width: calc(100% + 115px);

    .carousel-item {
      min-width: calc(100% - 115px);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 115px;
      img {
        min-width: 100%;
        height: 700px;
        object-fit: cover;
      }

      h3 {
        width: 800px;
        position: absolute;
        bottom: 5%;
        left: 5%;
        color: var(--white);
        font-family: "Prosto One", sans-serif;
        font-size: 32px;
        font-weight: 400;
        line-height: 120%;
        text-transform: uppercase;
      }
    }
  }

  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 64px;
    height: 64px;
    padding: 8px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border: 1px solid rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.16);
    cursor: pointer;
  }

  .prev {
    left: 15%;
    color: var(--white);
  }

  .next {
    right: 15%;
    color: var(--white);
  }
}

@media screen and (max-width: 1650px) {
  .carousel {
    padding: 120px 60px;
    h3 {
      bottom: 18%;
    }
  }
}

@media screen and (max-width: 1150px) {
  .carousel {
    padding: 50px;
    h3 {
      font-size: 32px;
      bottom: 10%;
    }

    .carousel-container {
      .carousel-item {
        img {
          height: 600px;
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .carousel {
    padding: 50px 50px;
    .carousel-container {
      .carousel-item {
        img {
          height: 500px;
        }
        h3 {
          width: 600px;
        }
      }
    }
  }
}

@media screen and (max-width: 776px) {
  .carousel {
    h3 {
      font-size: 22px;
    }
    .carousel-container {
      .carousel-item {
        h3 {
          font-size: 22px;
          width: 70%;
        }
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .carousel {
    padding: 20px 30px;
    .carousel-container {
      .carousel-item {
        h3 {
          font-size: 18px;
        }
      }
    }
    .carousel-control {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
