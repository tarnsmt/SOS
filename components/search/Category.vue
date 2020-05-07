<template>
  <div style="width:100%">
    <div class="display-align">
      <div
        class="navbar-item has-dropdown is-hoverable cate-border"
        v-for="category in categories"
        :key="category.id"
      >
        <p class="cate-deco">{{category.name_en}}</p>
        <div class="navbar-dropdown is-boxed">
          <a
            class="navbar-item"
            v-for="sub in category.subcategories"
            :key="sub.id"
            :href="`/?category=${sub.id}`"
            prefetch
          >{{sub.name_en}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { productService } from "@/services/product-service";
export default {
  name: "VmMenu",
  data() {
    return {
      categories: [],
      logoutLabel: "Log out"
    };
  },

  mounted() {
    productService.setup(this.$axios);
    productService.getAllCategory().then(categories => {
      this.categories = categories.slice(0, 8);
    });
  },

  computed: {},

  methods: {}
};
</script>

<style>
.display-align {
  display: flex !important;
}

.cate-border {
  border: 1px solid #e8e8e8;
}

.cate-deco {
  width: 100%;
  text-align: center;
  padding: 0.5rem 0.75rem;
}

.cate-deco:hover {
  text-align: center;
  background-color: #fafafa;
}
</style>

