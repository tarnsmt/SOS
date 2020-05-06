<template>
  <div class="section">
    <div class="columns is-centered is-multiline align-center">
      <form style="width:50%">
        <div class="tab">
          <button class="tablinks">
            <nuxt-link to="./add" style="color:#333">Add</nuxt-link>
          </button>
          <button class="tablinks" style=" background-color: #ddd;color:#333">Delete</button>
          <button class="tablinks">
            <nuxt-link to="./update" style="color:#333">Update</nuxt-link>
          </button>
        </div>
        <center>
          <h3 class="title" style="padding:30px 0px">{{ pageTitle }}</h3>
        </center>
        <label class="control">Category ID</label>
        <br />
        <p class="control">
          <input
            class="input"
            type="number"
            v-model="product_id"
            min="1"
            step="any"
            placeholder="Product ID"
          />
        </p>
        <br />
        <a class="button btn" @click="deleteProduct">
          <span>Delete</span>
        </a>
      </form>
    </div>
  </div>
</template>

<script>
import VmProductsList from "@/components/Products";
import { getByTitle } from "@/assets/filters";
import { productService } from "@/services/product-service";

export default {
  name: "admin-delete",

  data() {
    return {
      product_id: "",
      pageTitle: "Delete product from stock"
    };
  },
  mounted() {
    if (this.$auth.$storage.getLocalStorage("user_id") !== null)
      this.$store.commit("isUserLoggedIn", true);
  },

  components: { VmProductsList },
  methods: {
    deleteProduct() {
      productService.setup(this.$axios);
      productService
        .deleteProduct(
          this.$auth.$storage.getLocalStorage("user_id"),
          this.product_id
        )
        .then(response => {
          alert("delete Success");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin: 10px;
}

.align-center {
  align-items: center;
}

.btn {
  width: 30%;
  background-color: #fafafa;
}

.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f1f1f1;
}

.tab button {
  width: 33.33%;
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

.tab button:hover {
  background-color: #ddd;
}

.tab button.active {
  background-color: #ccc;
}

.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
</style>


