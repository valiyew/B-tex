<template>
  <div id="gallery" class="gallery">
    <h1>{{ galleryTranslation["gallery.title"] }}</h1>

    <ClientOnly>
      <div v-if="media && media.length > 0" class="carousel">
        <img class="top-ellipse" src="/assets/Ellipse.png" alt="" />
        <img class="bottom-ellipse" src="/assets/Ellipse.png" alt="" />

        <Swiper
          data-aos="fade-up"
          :loop="true"
          :modules="[Autoplay, Navigation]"
          :autoplay="{ delay: 8000, disableOnInteraction: false }"
          :navigation="{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }"
          class="carousel-swiper"
          :breakpoints="{
            320: { slidesPerView: 1, spaceBetween: 10 },
            576: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 1.5, spaceBetween: 20 },
            992: { slidesPerView: 2, spaceBetween: 20 },
            1280: { slidesPerView: 2, spaceBetween: 20 },
          }"
        >
          <SwiperSlide v-for="(image, index) in media" :key="index">
            <div class="carousel-item">
              <img :src="image?.image" :alt="`Gallery image ${index + 1}`" />
            </div>
          </SwiperSlide>

          <button class="swiper-button-prev-custom carousel-control prev">
            <i class="fa-solid fa-chevron-left"></i>
          </button>

          <button class="swiper-button-next-custom carousel-control next">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </Swiper>
      </div>

      <div v-else class="loading">
        <p>Yuklanmoqda...</p>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { ref, onMounted, watch } from "vue";
import { useTranslations } from "~/services/translations/translations-service";
import { useMedia } from "~/services/media/media-service";

const { getTranslations } = useTranslations();
const { getMedia } = useMedia();

const media = ref([]);
const galleryTranslation = ref({});

const props = defineProps({
  propVal: Boolean,
});

// Client-side da ma'lumot yuklash
onMounted(async () => {
  try {
    // Media yuklash
    const mediaResponse = await getMedia();

    if (mediaResponse?.results && mediaResponse.results.length > 0) {
      media.value = mediaResponse.results.flatMap((item) => item);
    }

    // Translations yuklash
    const translationsResponse = await getTranslations();
    if (translationsResponse) {
      galleryTranslation.value = translationsResponse;
    }
  } catch (error) {
    console.error("Ma'lumot yuklashda xatolik:", error);
  }
});

watch(
  () => props.propVal,
  async (newVal) => {
    try {
      const translations = await getTranslations();
      galleryTranslation.value = translations;
    } catch (error) {
      console.error("Translations yuklashda xatolik:", error);
    }
  }
);
</script>

<style lang="scss" scoped>
.gallery {
  padding: 100px 115px 0px 115px;
  position: relative;

  h1 {
    color: var(--black);
    font-family: "Golos Text";
    font-size: 42px;
    font-weight: 500;
  }

  .loading {
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Golos Text";
    font-size: 18px;
    color: var(--black);
  }

  .carousel {
    width: 100%;
    position: relative;

    .top-ellipse,
    .bottom-ellipse {
      position: absolute;
      width: 100%;
      z-index: 0;
    }

    .top-ellipse {
      top: 22%;
    }

    .bottom-ellipse {
      bottom: 0%;
    }

    .carousel-swiper {
      width: 100%;
      margin-top: 20px;
      position: relative;
      z-index: 1;
    }

    .carousel-item {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 470px;
      transition: all 0.3s ease;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
    }

    .carousel-control {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 64px;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: 1px solid rgba(130, 130, 130, 0.8);
      background: rgba(255, 255, 255, 0.16);
      cursor: pointer;
      z-index: 30;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.3);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }

      i {
        color: var(--black);
        font-size: 20px;
      }
    }

    .prev {
      left: 3%;
    }

    .next {
      right: 3%;
    }
  }
}

@media screen and (max-width: 1550px) {
  .gallery {
    padding: 50px;

    .carousel {
      margin-top: 120px;

      .top-ellipse {
        top: 17%;
      }

      .carousel-item {
        height: 420px;
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

      .carousel-item {
        height: 380px;
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

      .carousel-item {
        height: 350px;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .gallery {
    padding: 50px 50px;

    .carousel {
      .top-ellipse {
        top: 25%;
      }

      .bottom-ellipse {
        bottom: 10%;
      }

      .carousel-item {
        height: 320px;
      }

      .carousel-control {
        width: 56px;
        height: 56px;
      }
    }
  }
}

@media screen and (max-width: 776px) {
  .gallery {
    .carousel {
      .carousel-item {
        height: 300px;
      }

      .prev {
        left: 2%;
      }

      .next {
        right: 2%;
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

      .carousel-item {
        height: 280px;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .gallery {
    padding: 20px 30px;

    h1 {
      font-size: 32px;
    }

    .carousel {
      .carousel-item {
        height: 250px;
      }

      .carousel-control {
        width: 50px;
        height: 50px;

        i {
          font-size: 16px;
        }
      }

      .prev {
        left: 1%;
      }

      .next {
        right: 1%;
      }
    }
  }
}
</style>
