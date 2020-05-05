<template>
  <div>
    <VmHero></VmHero>
    <VmProductsList :products="products"></VmProductsList>
  </div>
</template>

<script>
import VmProductsList from '@/components/products_list/ProductsListContainer';
import VmHero from '@/components/hero/Hero';
import { productService } from "@/services/product-service";

export default {
  name: 'index',
  components: {
    VmProductsList,
    VmHero
  },
  async asyncData({$axios}){
    productService.setup($axios)
    let pageInfo = await productService.getAllProducts()
    return {products: pageInfo.products}
  }
};
</script>
