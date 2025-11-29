<template>
  <div id="product" class="product">
    <h1>{{ productTranslation["product.title"] }}</h1>
    <div class="categories">
      <button v-for="(item, index) in visibleCategories" :key="item.id" @click="isActiveToggle(item.id)" :class="{ active: isActive === item.id }">
        {{ item?.title }}
      </button>
    </div>
    <div class="global_desc" v-html="globalDescription"></div>
    <div class="product-box">
      <div v-for="(item, index) in filteredProducts" :key="index" class="product-item">
        <img v-if="item?.image" :src="item?.image" alt="Product Image" />
        <div v-if="item?.description" v-html="item?.description"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useTranslations } from "~/services/translations/translations-service";
import { useProduct } from "../services/product/product-service";

const { getProduct } = useProduct();

const productsList = ref([]);
const categories = ref([]);
const isActive = ref(null);
const globalDescription = ref("");

const { getTranslations } = useTranslations();
const productTranslation = ref({});

const { data: description } = await useAsyncData("description", async () => {
  const response = await getTranslations();
  productTranslation.value = response;

  if (!response || !response.results || response.results.length === 0) {
    return null;
  }

  return response;
});

const props = defineProps({
  propVal: Boolean,
  // Qaysi kategoriyalarni ko'rsatishni belgilash uchun prop qo'shing
  showFirstFive: {
    type: Boolean,
    default: true, // default birinchi 5ta ko'rsatadi
  },
});

const emit = defineEmits();

watch(
  () => props.propVal,
  async (newVal) => {
    const translations = await getTranslations();
    productTranslation.value = translations;
  }
);

// Ko'rsatiladigan kategoriyalar
const visibleCategories = computed(() => {
  if (!categories.value?.length) return [];

  // Agar showFirstFive true bo'lsa, birinchi 5ta, aks holda 5-indexdan keyingilar
  return props.showFirstFive ? categories.value.slice(0, 5) : categories.value.slice(5);
});

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

    // Ko'rsatiladigan birinchi kategoriyani active qilish
    isActive.value = visibleCategories.value[0]?.id || null;

    console.log("catalog: => ", categories.value);
    console.log("visible categories: => ", visibleCategories.value);
    globalDescription.value = visibleCategories.value[0]?.description || "";
  }
});

const filteredProducts = computed(() => {
  return productsList.value.filter((product) => product.category === isActive.value);
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
    font-family: "Golos Text";
    font-size: 42px;
    font-style: normal;
    font-weight: 500;
  }

  .categories {
    margin-top: 30px;
    width: 100%;
    display: flex;
    gap: 16px;
    align-items: center;
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    .active {
      color: var(--primary);
      border: 2px solid var(--primary);
    }

    button {
      width: 100%;
      padding: 16px 24px;
      color: var(--black);
      font-family: "Golos Text", sans-serif;
      font-size: 18px;
      font-weight: 400;
      border-radius: 50px;
      background: none;
      text-align: center;
      white-space: nowrap;
      display: inline-block;
      border: 2px solid #ebebeb;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        border: 2px solid var(--primary);
        color: var(--primary);
      }
    }
  }

  .global_desc {
    margin-top: 40px;
    color: #363636;
    font-family: "Nekst", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }

  .product-box {
    margin-top: 50px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding-bottom: 70px;

    .product-item {
      padding: 20px;
      background: var(--white);
      img {
        width: 100%;
        height: 80%;
        object-fit: cover;
        margin-bottom: 20px;
      }

      div {
        color: var(--black);
        font-family: "Nekst", sans-serif;
        font-size: 16px;
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
