<template>
  <div class="columns is-centered is-multiline" style="margin-top:0px; margin-bottom:0px">
    <div class="card column is-one-quarter" v-for="product in computedProducts" :key="product.id">
      <VmProducts :product="product"></VmProducts>
    </div>
    <div class="section" v-if="computedProducts.length === 0">
      <p>{{ noProductLabel }}</p>
    </div>
  </div>
</template>

<script>
import VmProducts from "../Products";
import { getByTitle } from "@/assets/filters";
import { productService} from '@/services/product-service'

export default {
  name: "productsList",

  components: { VmProducts },

  data() {
    return {
      id: "",
      noProductLabel: "No product found",
      productsFiltered: [],
      category_id: this.$route.query.category
    };
  },

  props: ['products'],

  computed: {
    computedProducts() {
      if (this.$store.state.userInfo.hasSearched) {
        return this.getProductByTitle();
      } 
      else {
        return this.products
      }
    }
  },

  methods: {
    getProductByTitle() {
      let listOfProducts = this.products,
        titleSearched = this.$store.state.userInfo.productTitleSearched;
      return (this.productsFiltered = getByTitle(
        listOfProducts,
        titleSearched
      ));
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin: 10px;
}
</style>
