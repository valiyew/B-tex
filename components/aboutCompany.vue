<template>
  <div class="about-company">
    <div class="company-title">
      <div class="left-box">
        <h1>Информация о нашей компании</h1>
        <button>
          Обратный связь
          <span></span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div class="right-box">
        <h5>
          Компания B-TEX GmbH & Co. KG — это современное и перспективное
          предприятие, специализирующееся на поставках качественных строительных
          материалов и оборудования. Мы предлагаем нашим клиентам широкий
          ассортимент фасадных профилей, террасных досок и покрытий. Кроме того,
          мы занимаемся поставкой экструзионного и металлообрабатывающего
          оборудования, а также запасных частей для различных производственных
          нужд. Эти решения обеспечивают нашим клиентам высокую
          производительность и точность в их работе
        </h5>
        <p>
          Наши партнеры — это как крупные строительные компании, так и частные
          клиенты, которым мы предоставляем индивидуальные решения для улучшения
          и модернизации их объектов. Мы гарантируем высокое качество своей
          продукции, надежность поставок и профессиональный сервис на каждом
          этапе сотрудничества
        </p>
      </div>
    </div>
    <img src="/assets/aboutCompanyImg.png" alt="" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.about-company {
  width: 100%;
  height: auto;
  padding: 110px 115px 0px 115px;

  .company-title {
    display: flex;
    .left-box {
      width: 55%;

      h1 {
        color: var(--black);
        font-family: "Nekst", sans-serif;
        font-size: 42px;
        font-weight: bold;
      }

      button {
        margin-top: 48px;
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
