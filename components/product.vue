<template>
  <div id="product"class="product">
    <h1>Product</h1>
    <div class="categories">
      <button
        v-for="(item, index) in categories"
        :key="index"
        @click="isActiveToggle(item.id)"
        :class="{ active: isActive === item.id }"
      >
        {{ item.title }}
      </button>
    </div>
    <div class="product-box">
      <div
        v-for="(item, index) in filteredProducts"
        :key="index"
        class="product-item"
      >
        <img :src="item.image" alt="Product Image" />
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useProduct } from "../services/product/product-service";

const { getProduct } = useProduct();

const productsList = ref([]);
const categories = ref([]);
const isActive = ref(null);

onMounted(async () => {
  const response = await getProduct();

  if (response?.results?.length) {
    categories.value = response.results;
    productsList.value = response.results.flatMap((item) =>
      item.products.map((product) => ({
        ...product,
        category: item.id,
      }))
    );

    isActive.value = categories.value[0]?.id || null;
  }
});

const filteredProducts = computed(() => {
  return productsList.value.filter(
    (product) => product.category === isActive.value
  );
});

const isActiveToggle = (id) => {
  isActive.value = id;
};
</script>

<style lang="scss" scoped>
.product {
  padding: 80px 115px;
  h1 {
    color: var(--black);
    text-align: center;
    font-family: "Nekst", sans-serif;
    font-size: 42px;
    font-style: normal;
  }

  .categories {
    margin-top: 30px;
    width: 100%;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: space-between;

    .active {
      color: var(--primary);
      border: 2px solid var(--primary);
    }

    button {
      cursor: pointer;
      width: auto;
      padding: 16px 24px;
      color: var(--black);
      font-family: "Golos Text", sans-serif;
      font-size: 18px;
      font-weight: 400;
      border-radius: 50px;
      background: none;
      border: 2px solid #ebebeb;
      transition: 0.3s;

      &:hover {
        border: 2px solid var(--primary);
        color: var(--primary);
      }
    }
  }

  .product-box {
    margin-top: 50px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    .product-item {
      padding: 20px;
      background: var(--white);
      img {
        width: 100%;
        height: 80%;
        object-fit: cover;
        margin-bottom: 20px;
      }

      p {
        color: var(--black);
        font-family: "Nekst", sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  }
}
@media screen and (max-width: 1650px) {
  .product {
    padding: 0px 60px;
  }
}

@media screen and (max-width: 1150px) {
  .product {
    padding: 0px 50px;
    .product-box {
      .product-item {
        p {
          font-size: 16px;
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .product {
    .product-box {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media screen and (max-width: 576px) {
  .product {
    padding: 0px 30px;
    h1 {
      font-size: 32px;
    }
    .product-box {
      grid-template-columns: repeat(1, 1fr);
      .product-item {
        p {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
