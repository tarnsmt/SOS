<template>
  <div class="section">
    <center>
    <h3 class="title" style="padding-bottom:30px">{{ pageTitle }}</h3>
   </center>
    <div class="columns is-centered is-multiline align-center">
    <form style="width:50%">
      <label class="control">Product tisstle</label><br>
      <p class="control">
      <input
        class="input"
        type="text"
        v-model="value"
        placeholder="Product title"
      >
      </p>
    <br>
    <label class="control">Description</label><br>
      <p class="control">
      <input
        class="input"
        type="text"
        v-model="value"
        placeholder="Product description"
      >
      </p>
      <br>
      <label class="control">Product price</label><br>
      <p class="control">
      <input
        class="input"
        type="number"
        v-model="value"
        min="1" step="any"
        placeholder="Price"
      >
      </p>
      <br>
      <label class="control">Product stock</label><br>
      <p class="control">
      <input
        class="input"
        type="number"
        v-model="value"
        min="1" step="any"
        placeholder="Stock"
      >
      </p>
      <br>
      <label class="control">Category ID</label><br>
      <p class="control">
      <input
        class="input"
        type="number"
        v-model="value"
        min="1" step="any"
        placeholder="Product ID"
      >
      </p>
      <br>
      <a class="button btn">
			  <span>Submit</span>
			</a>
    </form>
    </div>
  </div>
</template>

<script>
import { getByTitle } from '@/assets/filters';

export default {
	name: 'wwww',

	data () {
    return {
      pageTitle: 'Add products for customer',
      noProductLabel: 'No product to add'
    }
  },

}
</script>

<style lang="scss" scoped>
  .card {
    margin: 10px;
  }

  .align-center{
    align-items: center;
  }

  .btn{
    width:30%;
        background-color: #fafafa;
  }

</style>


