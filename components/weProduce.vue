<template>
  <div class="produce">
    <h1>Мы производим</h1>
    <div class="produce-box">
      <div
        v-for="(item, index) in categories.results"
        :key="index"
        class="produce-item"
      >
        <div class="item-title">
          <div style="display: flex; align-items: center">
            <img
              style="width: 10px; margin-right: 10px"
              src="/assets/Vector.png"
              alt=""
            />
            <h3>
              {{ item.title }}
            </h3>
          </div>
          <h2 v-html="item.description"></h2>
        </div>
        <img :src="item.image" alt="have a image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCategories } from "../services/categories/category-service";

const { getCategories } = useCategories();

const { data: categories } = await useAsyncData("categories", () =>
  getCategories()
);
</script>

<style lang="scss" scoped>
.produce {
  padding: 120px 115px 0px 115px;

  h1 {
    color: var(--black);
    text-align: center;
    font-family: "Golos Text";
    font-size: 42px;
    font-weight: 500;
  }

  .produce-box {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 48px;

    .produce-item {
      width: 100%;
      height: 400px;
      padding: 30px 30px 0px 30px;
      border: 1px solid var(--grey-8, #ebebeb);
      background: linear-gradient(250deg, #fff -14.96%, #ececee 100%);
      display: flex;
      gap: 30px;
      justify-content: space-between;

      .item-title {
        overflow-y: scroll;

        &::-webkit-scrollbar {
          display: none;
        }
        h3 {
          color: var(--black);
          font-family: "Prosto One", sans-serif;
          font-size: 22px;
          font-weight: bold;
          text-transform: uppercase;
        }

        h2 {
          margin-top: 20px;
          color: var(--black-light);
          font-family: "Golos Text", sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 120%;
        }
      }

      img {
        width: 40%;
        height: auto;
        object-fit: cover;
      }
    }
  }
}

@media screen and (max-width: 1650px) {
  .produce {
    padding: 120px 60px;
  }
}
@media screen and (max-width: 1376px) {
  .produce {
    .produce-box {
      .produce-item {
        .item-title {
          h3 {
            font-size: 20px;
          }
          p {
            font-size: 18px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1150px) {
  .produce {
    .produce-box {
      .produce-item {
        &:nth-child(odd) {
          flex-direction: row;
        }

        &:nth-child(even) {
          flex-direction: row-reverse;
        }
      }
    }
  }
}

@media screen and (max-width: 1150px) {
  .produce {
    padding: 100px 50px;
    .produce-box {
      .produce-item {
        height: auto;
        flex-direction: column;
        .item-title {
          width: 100%;
        }
        img {
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .produce {
    padding: 90px 30px;
    h1 {
      font-size: 32px;
    }
    .produce-box {
      .produce-item {
        .item-title {
          h3 {
            width: 100%;
            font-size: 16px;
          }

          p {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
