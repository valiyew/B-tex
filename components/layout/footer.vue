<template>
  <footer>
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

    <div class="footer-section">
      <p>Авторское право © 2025. Все права защищены.</p>
      <div class="logo">
        <p>Designed by</p>
      </div>
    </div>
  </footer>
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
      line-height: 120%; /* 48px */
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

  .footer-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid #c2c2c3;
    padding: 44px 140px;
    p {
      font-family: "TT Interfaces", sans-serif;
      font-size: 16px;
      color: var(--black);
    }
  }
}
</style>
