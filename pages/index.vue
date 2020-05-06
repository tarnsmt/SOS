<template>
  <div>
    <VmHero></VmHero>
    <VmProductsList :products="products"></VmProductsList>
  </div>
</template>

<script>
import VmProductsList from "@/components/products_list/ProductsListContainer";
import VmHero from "@/components/hero/Hero";
import { productService } from "@/services/product-service";

export default {
  name: "index",
  components: {
    VmProductsList,
    VmHero
  },
  async asyncData({ $axios, store }) {
    productService.setup($axios);
    let pageInfo = await productService.getAllProducts().then(response => {
      for (let product of response.products) {
        (product.isAddedToCart = false),
          (product.isAddedBtn = false),
          (product.isFavourite = false),
          (product.quantity = 1);
      }
      return response
    });
    store.commit("setProducts", pageInfo.products);
    return { products: pageInfo.products };
  }
};
</script>
