<template>
  <div :class="[ openModal ? 'is-active' : '', 'modal' ]">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ modalTitle }}</p>
        <button class="delete" aria-label="close" @click="closeModal(false)"></button>
      </header>
      <section class="modal-card-body">
        <div v-if="!isCheckoutSection">
          <div class="box" v-for="product in products" :key="product.id">
            <p>{{product}}</p>
            <button
              class="is-pulled-right button is-info is-inverted"
              @click="removeFromCart(product.id)"
            >{{ removeLabel }}</button>
            <p>{{ product.title }} {{ product.quantity > 0 ? ` - Quantity: ${product.quantity}` : ''}}</p>
            <p>{{ product.price }} &#36;</p>
          </div>
          <div v-if="products.length === 0">
            <p>{{ cartEmptyLabel }}</p>
          </div>
        </div>
        <div v-if="isCheckoutSection">
          <p>Payment submitted succesfully</p>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button
          v-show="products.length > 0 && !isCheckoutSection"
          class="button is-success"
          @click="onNextBtn"
        >{{ buyLabel }}</button>
        <button
          v-if="isCheckoutSection"
          class="button is-success"
          @click="closeModal(true)"
        >{{ closeLabel }}</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { cartService } from "@/services/cart-service";
export default {
  name: "checkout",

  data() {
    return {
      modalTitle: "Checkout",
      removeLabel: "Remove from cart",
      cartEmptyLabel: "Your cart is empty",
      closeLabel: "Close",
      isCheckoutSection: false
    };
  },

  computed: {
    products() {
      if (this.$store.getters.isUserLoggedIn) {
        cartService.setup(this.$axios);
        cartService
          .getCart(this.$auth.$storage.getLocalStorage("user_id"))
          .then(response => {
            let cartList = [];
            for (let product of response) {
              let data = {
                id: product.product_id,
                quantity: 5,
                status: true
              };
              this.$store.commit("addToCart", product.product_id);
              this.$store.commit("setAddedBtn", data);
            }
          });
        return this.$store.getters.productsAdded;
      }
      return [];
    },
    openModal() {
      if (this.$store.getters.isCheckoutModalOpen) {
        return true;
      } else {
        return false;
      }
    },
    buyLabel() {
      let totalProducts = this.products.length,
        productsAdded = this.$store.getters.productsAdded,
        pricesArray = [],
        productLabel = "",
        finalPrice = "",
        quantity = 1;

      productsAdded.forEach(product => {
        if (product.quantity >= 1) {
          quantity = product.quantity;
        }

        pricesArray.push(product.price * quantity);
      });

      finalPrice = pricesArray.reduce((a, b) => a + b, 0);

      if (totalProducts > 1) {
        productLabel = "products";
      } else {
        productLabel = "product";
      }
      return `Buy ${totalProducts} ${productLabel} at ${finalPrice}$`;
    },
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    }
  },

  methods: {
    closeModal(reloadPage) {
      this.$store.commit("showCheckoutModal", false);

      if (reloadPage) {
        window.location.reload();
      }
    },
    removeFromCart(id) {
      let data = {
        id: id,
        status: false
      };
      this.$store.commit("removeFromCart", id);
      this.$store.commit("setAddedBtn", data);
    },
    onNextBtn() {
      if (this.isUserLoggedIn) {
        this.isCheckoutSection = true;
      } else {
        this.$store.commit("showCheckoutModal", false);
        this.$store.commit("showLoginModal", true);
      }
    },
    onPrevBtn() {
      this.isCheckoutSection = false;
    }
  }
};
</script>

