<template>
  <nav>
    <div class="logo">
      <NuxtLink to="/">
        <img src="/assets/navbarLogo.png" alt="" />
      </NuxtLink>
      <span>|</span>
      <div class="mains">
        <ul>
          <a href="#header">
            <li>{{ all_languages?.["navbar.home"] || "Home" }}</li>
          </a>
          <a href="#about">
            <li>{{ all_languages?.["navbar.about"] || "About" }}</li>
          </a>
          <a href="#product">
            <li>{{ all_languages?.["navbar.product"] || "Product" }}</li>
          </a>
          <a v-if="route.path !== '/products'" href="#gallery">
            <li>{{ all_languages?.["navbar.gallery"] || "Gallery" }}</li>
          </a>
          <NuxtLink to="/products">
            <li>{{ all_languages?.["navbar.app"] || "Application" }}</li>
          </NuxtLink>
          <a href="#footer">
            <li>{{ all_languages?.["navbar.contact"] || "Contact" }}</li>
          </a>
        </ul>
      </div>
    </div>

    <div @click="changeValue" class="languages">
      <div class="selected-language">
        <div class="current-language">
          <img :src="currentLanguage.icon" alt="" />
          <p>{{ currentLanguage.value }}</p>
          <i v-if="isCurrentLanguage" class="fa-solid fa-chevron-down"></i>
          <i v-else class="fa-solid fa-chevron-up"></i>
        </div>

        <div v-if="isCurrentLanguage" class="language-items">
          <div v-for="item in languages" :key="item.id" @click="selectedLanguage(item.value, item.id, item.icon)">
            <img v-if="currentLanguage.id !== item.id" :src="item.icon" alt="" />
            <p v-if="currentLanguage.id !== item.id">{{ item.value }}</p>
          </div>
        </div>
      </div>
    </div>

    <i @click="toggleBurger" class="fa-solid fa-bars"></i>
  </nav>

  <Transition>
    <div v-if="isOpenBurger" class="main-burger">
      <i @click="toggleBurger" class="fa-solid fa-xmark close"></i>
      <NuxtLink to="/">
        <img src="/assets/navbarLogo.png" alt="" />
      </NuxtLink>
      <div class="burger-mains">
        <ul>
          <a href="#header" @click="toggleBurger">
            <li>{{ all_languages?.["navbar.home"] || "Home" }}</li>
          </a>
          <a href="#about" @click="toggleBurger">
            <li>{{ all_languages?.["navbar.about"] || "About" }}</li>
          </a>
          <a href="#product" @click="toggleBurger">
            <li>{{ all_languages?.["navbar.product"] || "Product" }}</li>
          </a>
          <a v-if="route.path !== '/products'" href="#gallery" @click="toggleBurger">
            <li>{{ all_languages?.["navbar.gallery"] || "Gallery" }}</li>
          </a>
          <NuxtLink to="/products" @click="toggleBurger">
            <li>{{ all_languages?.["navbar.app"] || "Application" }}</li>
          </NuxtLink>
          <a href="#footer" @click="toggleBurger">
            <li>{{ all_languages?.["navbar.contact"] || "Contact" }}</li>
          </a>
        </ul>
        <div @click="changeValue" class="languages">
          <div class="selected-language">
            <div class="current-language">
              <img :src="currentLanguage.icon" alt="" />
              <p>{{ currentLanguage.value }}</p>
              <i v-if="isCurrentLanguage" class="fa-solid fa-chevron-down"></i>
              <i v-else class="fa-solid fa-chevron-up"></i>
            </div>

            <div v-if="isCurrentLanguage" class="language-items">
              <div v-for="item in languages" :key="item.id" @click="selectedLanguage(item.value, item.id, item.icon)">
                <img v-if="currentLanguage.id !== item.id" :src="item.icon" alt="" />
                <p v-if="currentLanguage.id !== item.id">{{ item.value }}</p>
              </div>
            </div>
          </div>
        </div>

        <h3>{{ all_languages?.["navbar.telNumber"] || "+998 XX XXX XX XX" }}</h3>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch, onMounted, defineProps, defineEmits } from "vue";
import { useTranslations } from "@/services/translations/translations-service";

const { getTranslations } = useTranslations();
const isOpenBurger = ref(false);
const translate = ref(null);
const isCurrentLanguage = ref(false);
const all_languages = ref({});
const route = useRoute();

const currentLanguage = ref({
  value: "Eng",
  id: 1,
  icon: "/_nuxt/assets/engIcon.png",
});

const props = defineProps({
  propVal: Boolean,
});

const emit = defineEmits();

const changeValue = () => {
  emit("update");
  isCurrentLanguage.value = !isCurrentLanguage.value;
};

const toggleBurger = () => {
  isOpenBurger.value = !isOpenBurger.value;
};

const selectedLanguage = (value, id, icon) => {
  currentLanguage.value = { value, id, icon };

  if (process.client) {
    localStorage.setItem("current-language", JSON.stringify(currentLanguage.value));
    localStorage.setItem("get-language", value.toLocaleLowerCase().slice(0, 2));
  }
};

// Initial load
onMounted(async () => {
  if (process.client) {
    const savedLanguage = localStorage.getItem("current-language");
    if (savedLanguage) {
      currentLanguage.value = JSON.parse(savedLanguage);
    }

    // Load translations on mount
    const response = await getTranslations();
    if (response) {
      all_languages.value = response;
    }
  }
});

watch(currentLanguage, async () => {
  if (process.client) {
    const response = await getTranslations();
    if (response) {
      translate.value = response;
      all_languages.value = response;
    }
  }
});

const languages = [
  { id: 1, value: "Eng", key: "en", icon: "/engIcon.png" },
  { id: 2, value: "Rus", key: "ru", icon: "/rusFlag.png" },
  { id: 3, value: "Ger", key: "ge", icon: "/iconGer.png" },
];
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=GolosText&family=Delicious+Handrawn&family=Golos+Text:wght@400..900&family=JetBrains+Mono:wght@100;200;300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Prosto+One&display=swap");

.v-enter-active,
.v-leave-active {
  transition: 0.5s;
}

.v-enter-from,
.v-leave-to {
  transform: translate(100%);
}
nav {
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  background: var(--white);
  padding: 20px 115px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  a {
    text-decoration: none;
  }

  .languages {
    width: 110px;
    height: auto;
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;

    p {
      margin-bottom: 15px;
      color: var(--black);
      font-family: "Golos Text";
      font-size: 18px;
      font-weight: 500;
    }

    i {
      margin-bottom: 15px;
      display: block;
      font-size: 14px;
      color: var(--black);
    }

    img {
      margin-bottom: 15px;
      width: 20px;
      height: 15px;
    }

    .current-language {
      padding-left: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .language-items {
      padding-left: 20px;
      position: absolute;
      display: flex;
      flex-direction: column;
      width: 125px;
      border-radius: 5px;
      background: var(--white);

      div {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
  }

  .logo {
    width: 100%;
    display: flex;
    align-items: center;

    img {
      width: 190px;
    }

    p {
      margin-right: 20px;
    }

    span {
      height: 40px;
      margin-right: 28px;
      background: #ebebeb;
      font-size: 0;
      width: 1px;
    }

    .mains {
      ul {
        display: flex;
        align-items: center;
        gap: 50px;
        list-style: none;

        li {
          font-family: "Golos Text";
          font-size: 18px;
          font-weight: 500;
          line-height: 25.2px;
          position: relative;
          color: var(--black);
          cursor: pointer;
          position: relative;

          &::after {
            content: "";
            position: absolute;
            top: 25px;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--primary);
            transition: width 0.3s ease;
          }

          &:hover::after {
            width: 100%;
          }

          &.active::after {
            width: 100%;
          }
        }
      }
    }
  }

  i {
    font-size: 22px;
    cursor: pointer;
    color: var(--primary);
    display: none;
  }
}
.main-burger {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 60%;
  background: var(--white);
  z-index: 20;
  padding: 20px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .burger-mains {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70%;
  }

  h3 {
    margin-left: 20px;
    color: var(--black);
    font-family: "Prosto One", sans-serif;
    font-size: 20px;
    font-weight: 400;
  }

  img {
    margin-top: 25px;
    width: 190px;
  }

  .close {
    position: absolute;
    top: 20px;
    left: 30px;
    font-size: 24px;
    color: var(--primary);
    cursor: pointer;
  }

  ul {
    margin: 30px 0px 30px 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;

    li {
      font-family: "Golos Text";
      font-size: 18px;
      font-weight: 500;
      line-height: 25.2px;
      position: relative;
      color: var(--black);
      cursor: pointer;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        top: 25px;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--primary);
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 50%;
      }

      &.active::after {
        width: 100%;
      }
    }
  }

  .languages {
    width: 110px;
    height: 100%;
    cursor: pointer;
    margin-left: 20px;
    border-radius: 5px;

    p {
      margin-top: 21px;
      color: var(--black);
      font-family: "Golos Text";
      font-size: 18px;
      font-weight: 500;
    }

    i {
      margin-top: 21px;
      display: block;
      font-size: 14px;
      color: var(--black);
    }

    img {
      width: 20px;
      height: 15px;
    }

    .current-language {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .language-items {
      display: flex;
      flex-direction: column;

      div {
        display: flex;
        gap: 10px;
      }
    }
  }
}

@media screen and (max-width: 1650px) {
  nav {
    padding: 20px 60px;
  }
}

@media screen and (max-width: 1150px) {
  nav {
    padding: 20px 50px;

    .logo {
      .mains {
        ul {
          li {
            font-size: 14px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  nav {
    padding: 20px 50px;

    .logo {
      .mains {
        display: none;
      }
    }

    .languages {
      display: none;
    }

    i {
      display: block;
    }
  }
  .main-burger {
    display: block;
  }
}

@media screen and (max-width: 576px) {
  nav {
    padding: 20px 30px;
  }
}
</style>
