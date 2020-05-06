<template>
  <div class="section">


    <div class="columns is-centered is-multiline align-center">
    <form style="width:50%">
      <div class="tab">
        <button class="tablinks" style=" background-color: #ddd;color:#333">Add</button>
        <button class="tablinks"><nuxt-link to="./delete" style="color:#333">Delete</nuxt-link></button>
        <button class="tablinks"><nuxt-link to="./update" style="color:#333">Update</nuxt-link></button>
      </div>
      <center>
        <h3 class="title" style="padding:30px 0px">{{ pageTitle }}</h3>
      </center>
      <label class="control">Product title</label><br>
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
import VmProductsList from '@/components/Products';
import { getByTitle } from '@/assets/filters';

export default {
	name: 'admin-add',

	data () {
    return {
      pageTitle: 'Add products for customer',
      noProductLabel: 'No product to add'
    }
  },

  components: { VmProductsList },

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

  .tab {
    overflow: hidden;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f1f1f1;
  }

  .tab button {
    width:33.33%;
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


