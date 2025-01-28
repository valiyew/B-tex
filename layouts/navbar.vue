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
    <i class="fa-solid fa-bars"></i>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
nav {
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  background: var(--white);
  padding: 20px 115px;

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
}
</style>
