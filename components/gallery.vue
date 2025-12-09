<template>
  <div id="gallery" class="gallery">
    <h1>{{ galleryTranslation["gallery.title"] }}</h1>
    <div class="carousel">
      <img class="top-ellipse" src="/assets/Ellipse.png" alt="" />
      <img class="bottom-ellipse" src="/assets/Ellipse.png" alt="" />

      <div class="carousel-container" ref="scrollContainer">
        <div class="carousel-item" v-for="(image, index) in media" :key="index">
          <img :src="image.image" alt="" />
        </div>
      </div>
      <button @click="prev" class="carousel-control prev" ref="prevBtn">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button @click="next" class="carousel-control next" ref="nextBtn">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useTranslations } from "~/services/translations/translations-service";
import { useMedia } from "~/services/media/media-service";

const { getTranslations } = useTranslations();

const { getMedia } = useMedia();

const { data: media } = await useAsyncData("media", async () => {
  const response = await getMedia();

  if (!response || !response.results || response.results.length === 0) {
    return [];
  }

  return response.results.flatMap((item) => item);
});

const galleryTranslation = ref({});

const { data: description } = await useAsyncData("description", async () => {
  const response = await getTranslations();
  galleryTranslation.value = response;

  if (!response || !response.results || response.results.length === 0) {
    return null;
  }

  return response;
});

const props = defineProps({
  propVal: Boolean,
});

const emit = defineEmits();

watch(
  () => props.propVal,
  async (newVal) => {
    const translations = await getTranslations();
    galleryTranslation.value = translations;
  }
);

const scrollContainer = ref(null);
const imgWidth = ref(580);

const updateImageWidth = () => {
  if (window.innerWidth <= 576) {
    imgWidth.value = 570;
  } else if (window.innerWidth <= 776) {
    imgWidth.value = 780;
  } else if (window.innerWidth <= 992) {
    imgWidth.value = 490;
  } else if (window.innerWidth <= 1150) {
    imgWidth.value = 580;
  } else {
    imgWidth.value = 580;
  }
};

const next = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollLeft += imgWidth.value;
  }
};

const prev = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollLeft -= imgWidth.value;
  }
};

onMounted(() => {
  updateImageWidth();
  window.addEventListener("resize", updateImageWidth);
});
</script>

<style lang="scss" scoped>
.gallery {
  padding: 100px 0px;
  position: relative;

  h1 {
    position: absolute;
    top: 13%;
    left: 13%;
    text-align: center;
    color: var(--black);
    font-family: "Golos Text";
    font-size: 42px;
    font-weight: 500;
    line-height: 120%;
  }
  .carousel {
    margin-top: 180px;
    width: 100%;

    .top-ellipse,
    .bottom-ellipse {
      position: absolute;
      width: 100%;
    }
    .top-ellipse {
      top: 22%;
    }

    .bottom-ellipse {
      bottom: 0%;
    }

    .carousel-container {
      width: 100%;
      display: flex;
      transition: transform 0.5s ease;
      overflow-x: auto;
      scroll-behavior: smooth;
      background: linear-gradient(
        90deg,
        #f5f5f7 0%,
        rgba(245, 245, 247, 0) 100%
      );

      &::-webkit-scrollbar {
        display: none;
      }

      .carousel-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 470px;
        img {
          width: 580px;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .carousel-control {
      position: absolute;
      top: 60%;
      transform: translateY(-60%);
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
}

@media screen and (max-width: 1550px) {
  .gallery {
    h1 {
      position: absolute;
      top: 8%;
    }
    .carousel {
      margin-top: 120px;

      .top-ellipse {
        top: 17%;
      }

      .carousel-container {
        .carousel-item {
          img {
            width: 545px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1350px) {
  .gallery {
    .carousel {
      .top-ellipse {
        top: 20%;
      }
      .bottom-ellipse {
        bottom: 3%;
      }

      .carousel-container {
        .carousel-item {
          img {
            width: 480px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1150px) {
  .gallery {
    .carousel {
      .top-ellipse {
        top: 20%;
      }
      .bottom-ellipse {
        bottom: 5%;
      }

      .carousel-container {
        .carousel-item {
          img {
            width: 580px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1150px) {
  .gallery {
    .carousel {
      .top-ellipse {
        top: 22%;
      }
      .bottom-ellipse {
        bottom: 7%;
      }

      .carousel-container {
        .carousel-item {
          img {
            width: 450px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .gallery {
    .carousel {
      .top-ellipse {
        top: 25%;
      }
      .bottom-ellipse {
        bottom: 10%;
      }

      .carousel-container {
        .carousel-item {
          img {
            width: 490px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 776px) {
  .gallery {
    .carousel {
      .carousel-container {
        .carousel-item {
          img {
            width: 780px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 676px) {
  .gallery {
    .carousel {
      .top-ellipse {
        top: 25%;
      }
      .bottom-ellipse {
        bottom: 10%;
      }

      .carousel-container {
        .carousel-item {
          img {
            width: 680px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 576px) {
  .gallery {
    h1 {
      font-size: 32px;
    }
    .carousel {
      .carousel-container {
        .carousel-item {
          img {
            width: 570px;
          }
        }
      }

      .carousel-control {
        width: 50px;
        height: 50px;
      }
    }
  }
}
</style>
