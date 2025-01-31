<template>
  <div id="about" class="about-company">
    <div class="company-title">
      <div class="left-box">
        <h1>{{ aboutCompanyTranslations["about-company.title"] }}</h1>
        <button>
          {{ aboutCompanyTranslations["section.feedback"] }}
          <span></span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div class="right-box">
        <h5>
          {{ aboutCompanyTranslations["about-company.description-title"] }}
        </h5>
        <p>
          {{ aboutCompanyTranslations["about-company.description"] }}
        </p>
      </div>
    </div>
    <img src="/assets/aboutCompanyImg.png" alt="" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useTranslations } from "~/services/translations/translations-service";

const { getTranslations } = useTranslations();
const aboutCompanyTranslations = ref({});

const { data: description } = await useAsyncData("description", async () => {
  const response = await getTranslations();
  aboutCompanyTranslations.value = response;

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
    aboutCompanyTranslations.value = translations;
  }
);
</script>

<style lang="scss" scoped>
.about-company {
  width: 100%;
  height: auto;
  padding: 110px 115px 0px 115px;

  .company-title {
    display: flex;
    gap: 30px;
    .left-box {
      width: 55%;

      h1 {
        color: var(--black);
        font-family: "Golos Text";
        font-size: 42px;
        font-weight: 500;
      }

      button {
        margin-top: 48px;
        font-family: "Prosto One";
        padding: 16px 32px;
        font-size: 16px;
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

    .right-box {
      width: 100%;
      h5 {
        color: var(--black);
        font-family: "Golos Text", sans-serif;
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 24px;
        line-height: 130%;
      }
      p {
        color: var(--black-light);
        font-family: "Golos Text", sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 140%;
      }
    }
  }

  img {
    margin-top: 64px;
    width: 100%;
    height: auto;
  }
}

@media screen and (max-width: 1650px) {
  .about-company {
    padding: 110px 60px;
  }
}

@media screen and (max-width: 1150px) {
  .about-company {
    padding: 110px 50px;
    .company-title {
      display: flex;
      flex-direction: column;
      gap: 80px;

      .left-box,
      .right-box {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .about-company {
    .company-title {
      .right-box {
        h5 {
          font-size: 20px;
        }
        p {
          font-size: 18px;
        }
      }
    }
  }
}

@media screen and (max-width: 776px) {
  .about-company {
    .company-title {
      .left-box {
        button {
          margin-top: 28px;
          padding: 12px 28px;
          font-size: 14px;
        }
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .about-company {
    padding: 90px 30px;
    .company-title {
      gap: 50px;
      .left-box {
        h1 {
          font-size: 32px;
        }
      }
      .right-box {
        h5 {
          font-size: 16px;
        }

        p {
          font-size: 12px;
        }
      }
    }
  }
}

@media screen and (max-width: 376px) {
  .about-company {
    .company-title {
      gap: 50px;
      .left-box {
        h1 {
          font-size: 26px;
        }
      }
    }
  }
}
</style>
