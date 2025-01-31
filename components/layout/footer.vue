<template>
  <footer id="footer">
    <div class="footer-form">
      <h1>Мы готовы ответить на все вопросы</h1>
      <form action="">
        <div class="input-form">
          <input required type="text" placeholder="Имя" />
          <input required type="number" placeholder="+998" />
        </div>
        <div class="submit-form">
          <p>
            Отправляя эту форму, я подтверждаю, что прочитал и принимаю Политику
            конфиденциальности.
          </p>
          <button type="submit">
            Обратный связь
            <span></span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </form>
    </div>

    <div class="our-contact">
      <div>
        <h2>49 0 173 277 34 79</h2>
        <p>Mijozlarga xizmat ko'rsatish telefon raqami</p>
      </div>
      <div>
        <h2>info@b-tex.info</h2>
        <p>Barcha savollaringizni elektron pochtamizga yo‘llashingiz mumkin</p>
      </div>
      <div class="our-network">
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-telegram"></i>
      </div>
    </div>
  </footer>
  <div class="more-contact">
    <ul class="about-us">
      <li class="title">About us</li>
      <li class="bold-title">
        Надежность и точность в каждом движении станка 
      </li>
      <li>
        Доверьтесь нам в выборе оборудования для вашего бизнеса — мы обеспечим
        вам безупречную работу и высокую производительность на каждом этапе
        производства.
      </li>
    </ul>

    <ul class="shop-service">
      <li class="title">Shop services</li>
      <li>Фасадные профили</li>
      <li>Террасные доски и покрытия</li>
      <li>Экструзионное оборудование</li>
      <li>Металлообрабатывающее оборудование</li>
      <li>Запасные части и комплектующие</li>
    </ul>

    <ul class="address">
      <li class="title">Address</li>
      <li class="bold-title">Фишелн 50, 41366 Швальмталь, Германия</li>
      <li class="bold-title">49 0 173 277 34 79</li>
      <li>Mo-Fr, 09:00 - 16:00 Uhr</li>
    </ul>
  </div>

  <div class="footer-section">
    <p>Авторское право © 2025. Все права защищены.</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
footer {
  width: 100%;
  padding: 0px 260px;

  .footer-form {
    padding: 44px 140px;
    width: 100%;

    h1 {
      color: var(--black);
      font-family: "Nekst", sans-serif;
      font-size: 40px;
      font-weight: 400;
      line-height: 120%;
    }

    .input-form {
      margin-top: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      input {
        width: 100%;
        color: #5d5d5f;
        font-family: "Inter", sans-serif;
        font-size: 20px;
        outline: none;
        border: none;
        border-bottom: 1px solid #c2c2c3;
        background: none;
      }
    }
    .submit-form {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      p {
        width: 40%;
        color: var(--black);
        font-family: "Golos Text", sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }

      button {
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

  .our-contact {
    width: 100%;
    padding: 44px 140px;
    display: flex;
    gap: 25px;
    justify-content: space-between;

    div {
      h2 {
        color: var(--black);
        font-family: "Prosto One", sans-serif;
        font-size: 32px;
        font-weight: 500;
        line-height: 120%;
      }

      p {
        color: #5a5d74;
        font-family: "Golos Text", sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 140%;
      }
    }
    .our-network {
      display: flex;
      flex-direction: column;
      gap: 12px;
      i {
        padding: 12px;
        border: 0.5px solid var(--grey-24, #c2c2c3);
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(12px);
        color: #9a999b;
        cursor: pointer;
      }
    }
  }
}

.more-contact {
  width: 100%;
  background: var(--white);
  padding: 50px 240px;
  display: flex;
  justify-content: space-between;
  gap: 100px;

  ul {
    list-style: none;
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .title {
      color: var(--primary);
      font-family: "Prosto One", sans-serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 120%;
    }

    .bold-title {
      font-size: 24px;
    }

    li {
      color: var(--black);
      font-family: "Golos Text", sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
    }
  }
}

.footer-section {
  text-align: center;
  width: 100%;
  border-top: 1px solid #c2c2c3;
  padding: 44px 140px;
  background: var(--white);

  p {
    font-family: "TT Interfaces", sans-serif;
    font-size: 16px;
    color: var(--black);
  }
}

@media screen and (max-width: 1550px) {
  footer {
    padding: 0px 130px;
  }
}

@media screen and (max-width: 1350px) {
  footer {
    padding: 0px 50px;
  }
  .more-contact {
    padding: 50px 140px;
  }
}

@media screen and (max-width: 1350px) {
  footer {
    padding: 0px;
  }
}

@media screen and (max-width: 992px) {
  footer {
    .footer-form {
      h1 {
        font-size: 32px;
      }

      .input-form {
        input {
          font-size: 14px;
        }
      }

      .submit-form {
        button {
          font-size: 12px;
        }
      }
    }
    .our-contact {
      div {
        h2 {
          font-size: 22px;
        }
      }
    }
  }

  .more-contact {
    padding: 50px 140px;
    flex-direction: column;
    gap: 50px;
    ul {
      text-align: center;
      .bold-title {
        font-size: 20px;
      }
    }
  }
}

@media screen and (max-width: 776px) {
  footer {
    .input-form,
    .submit-form {
      flex-direction: column;
      gap: 30px;
    }

    .footer-form {
      padding: 20px 80px;
      .submit-form {
        p {
          width: 100%;
        }
        button {
          font-size: 14px;
        }
      }
    }

    .our-contact {
      padding: 20px 80px;
      flex-direction: column;
      .our-network {
        flex-direction: row;
      }
    }

    .footer-section {
      padding: 30px 80px;
    }
  }

  .more-contact {
    padding: 40px 80px;
  }
}

@media screen and (max-width: 576px) {
  footer {
    .footer-form {
      padding: 20px 30px;
      h1 {
        font-size: 22px;
      }
      .submit-form {
        p {
          width: 100%;
        }
        button {
          font-size: 14px;
        }
      }
    }

    .our-contact {
      padding: 20px 30px;
      div {
        h2 {
          font-size: 16px;
        }

        p {
          font-size: 12px;
          margin-top: 10px;
        }
      }
    }

    .footer-section {
      padding: 30px 30px;
      p {
        font-size: 12px;
      }
    }
  }

  .more-contact {
    padding: 40px 30px;
  }
}

@media screen and (max-width: 376px) {
  footer {
    .footer-section {
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>
