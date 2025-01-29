<template>
  <nav>
    <div class="logo">
      <p>
        B-TEX GmbH & Co.KG <br />
        B-TEX GmbH & Co.KG
      </p>
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
    <div class="languages">Eng</div>
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
import { ref } from "vue";

const isOpenBurger = ref(false);

const toggleBurger = () => {
  isOpenBurger.value = !isOpenBurger.value;
};
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

  .logo {
    width: 100%;
    display: flex;
    align-items: center;

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
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 60%;
  background: var(--white);
  z-index: 11;
  padding: 20px;

  i {
    position: absolute;
    top: 10px;
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

@media screen and (max-width: 1450px) {
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
