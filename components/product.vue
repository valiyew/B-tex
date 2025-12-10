<template>
  <div id="product" class="product">
    <h1>{{ productTranslation["product.title"] }}</h1>

    <!-- Parent kategoriyalar -->
    <div class="categories">
      <button
        v-for="(item, index) in parentCategories"
        :key="item.id"
        @click="selectParentCategory(item.id)"
        :class="{ active: selectedParent === item.id }"
      >
        {{ item?.title }}
      </button>
    </div>

    <!-- Child kategoriyalar (agar mavjud bo'lsa) -->
    <div v-if="childCategories.length > 0" class="categories child-categories">
      <button v-for="(item, index) in childCategories" :key="item.id" @click="selectChildCategory(item.id)" :class="{ active: isActive === item.id }">
        {{ item?.title }}
      </button>
    </div>

    <div v-if="route.path === '/products'" class="global_desc" v-html="globalDescription"></div>

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
const route = useRoute();

const productsList = ref([]);
const categories = ref([]);
const isActive = ref(null);
const selectedParent = ref(null);
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
  page: {
    type: Boolean,
    default: true,
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

// Props.page ga mos kategoriyalarni filtrlash
const visibleCategories = computed(() => {
  if (!categories.value?.length) return [];
  return categories.value.filter((item) => item.page === props.page);
});

// Parent kategoriyalar (parent === null)
const parentCategories = computed(() => {
  return visibleCategories.value.filter((item) => item.parent === null);
});

// Child kategoriyalar (selectedParent ga mos)
const childCategories = computed(() => {
  if (!selectedParent.value) return [];
  return visibleCategories.value.filter((item) => item.parent === selectedParent.value);
});

// Parent kategoriya tanlash
const selectParentCategory = (parentId) => {
  selectedParent.value = parentId;

  const children = visibleCategories.value.filter((item) => item.parent === parentId);
  console.log("renn",children)

  if (children.length > 0) {
    // Agar child lar bo'lsa, birinchi child ni active qilish
    isActive.value = children[0].id;
    globalDescription.value = children[0]?.description || "";
  } else {
    // Agar child yo'q bo'lsa, parent ni o'zi active
    isActive.value = parentId;
    const parentCat = visibleCategories.value.find((item) => item.id === parentId);
    globalDescription.value = parentCat?.description || "";
  }
};

// Child kategoriya tanlash
const selectChildCategory = (childId) => {
  isActive.value = childId;
  const childCat = visibleCategories.value.find((item) => item.id === childId);
  globalDescription.value = childCat?.description || "";
  console.log("desc",globalDescription.value)
};

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

    // Birinchi parent kategoriyani tanlash
    if (parentCategories.value.length > 0) {
      selectParentCategory(parentCategories.value[0].id);
    }
  }
});

const filteredProducts = computed(() => {
  return productsList.value.filter((product) => product.category === isActive.value);
});
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

  .child-categories {
    margin-top: 16px;

    button {
      background: #f8f8f8;
      font-size: 16px;
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
