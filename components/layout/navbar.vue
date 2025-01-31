<template>
  <nav>
    <div class="logo">
      <img src="/assets/navbarLogo.png" alt="" />
      <span>|</span>
      <div class="mains">
        <ul>
          <li>Главный</li>
          <li>О нас</li>
          <li>Продукция</li>
          <li>Наш галерея</li>
          <li>Контакты</li>
        </ul>
      </div>
    </div>

    <div @click="toggleActiveLanguage" class="languages">
      <div class="selected-language">
        <div class="current-language">
          <img :src="currentLanguage.icon" alt="" />
          <p>{{ currentLanguage.value }}</p>
          <i v-if="isActiveLanguage" class="fa-solid fa-chevron-down"></i>
          <i v-else class="fa-solid fa-chevron-up"></i>
        </div>

        <div v-if="isActiveLanguage" class="language-items">
          <div
            v-for="item in languages"
            @click="selectedLanguage(item.value, item.id, item.icon)"
          >
            <img
              v-if="currentLanguage.id !== item.id"
              :src="item.icon"
              alt=""
            />
            <p v-if="currentLanguage.id !== item.id">{{ item.value }}</p>
          </div>
        </div>
      </div>
    </div>

    <i @click="toggleBurger" class="fa-solid fa-bars"></i>
  </nav>

  <Transition>
    <div v-if="isOpenBurger" class="main-burger">
      <i @click="toggleBurger" class="fa-solid fa-xmark"></i>
      <div class="burger-mains">
        <ul>
          <li>Главный</li>
          <li>О нас</li>
          <li>Продукция</li>
          <li>Наш галерея</li>
          <li>Контакты</li>
        </ul>
        <div class="languages">Eng</div>
      </div>
      <p>Авторское право © 2025. Все права защищены.</p>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useTranslations } from "@/services/translations/translations-service";

const isOpenBurger = ref(false);
const isActiveLanguage = ref(false);
const currentLanguage = ref({
  value: "Eng",
  id: 1,
  icon: "/_nuxt/assets/engIcon.png",
});

const { getTranslations } = useTranslations();

const { data: translate } = await useAsyncData("translate", async () => {
  const response = await getTranslations();
  
  console.log(response)

  // if (!response || !response.results || response.results.length === 0) {
  //   return null;
  // }

  // return response.results;
});

// const { data: translate } = await useAsyncData("translations", () => {
//   getTranslations();
// });

// console.log(translate)

const toggleBurger = () => {
  isOpenBurger.value = !isOpenBurger.value;
};

const toggleActiveLanguage = () => {
  isActiveLanguage.value = !isActiveLanguage.value;
};

const selectedLanguage = (value, id, icon) => {
  currentLanguage.value = { value, id, icon };
  localStorage.setItem(
    "current-language",
    JSON.stringify(currentLanguage.value)
  );
  localStorage.setItem("get-language", value);
};

onMounted(() => {
  const savedLanguage = localStorage.getItem("current-language");
  if (savedLanguage) {
    currentLanguage.value = JSON.parse(savedLanguage);
  }
});

const languages = [
  {
    id: 1,
    value: "Eng",
    key: "en",
    icon: "/_nuxt/assets/engIcon.png",
  },
  {
    id: 2,
    value: "Rus",
    key: "ru",
    icon: "/_nuxt/assets/rusFlag.png",
  },
  {
    id: 3,
    value: "Uzb",
    key: "uz",
    icon: "/_nuxt/assets/uzbIcon.png",
  },
];
</script>

<style lang="scss" scoped>
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

  .languages {
    width: 110px;
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;

    p {
      color: var(--black);
      font-family: "Golos Text", sans-serif;
      font-size: 18px;
      font-weight: 500;
    }

    i {
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
      position: absolute;
      display: flex;
      gap: 10px;
      flex-direction: column;

      div {
        display: flex;
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
          font-family: "Golos Text", sans-serif;
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

  i {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 24px;
    color: var(--primary);
    cursor: pointer;
  }

  ul {
    margin: 50px 0px 20px 0px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;

    li {
      font-family: "Golos Text", sans-serif;
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

  p {
    position: absolute;
    bottom: 10px;
    font-family: "TT Interfaces", sans-serif;
    font-size: 16px;
    color: var(--black);
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
