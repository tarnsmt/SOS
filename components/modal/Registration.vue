<template>
    <div :class="[ openModal ? 'is-active' : '', 'modal' ]">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p v-if="!isUserSignedUp" class="modal-card-title">{{ modalTitle }}</p>
          <p v-if="isUserSignedUp" class="modal-card-title">{{ modalTitleRegistered }}</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <form >
          <section class="modal-card-body">
            <div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                  class="input"
                    type="text"
                    placeholder="Firstname"
                    v-model="firstname"
                  >
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                  class="input"
                    type="text"
                    placeholder="Lastname"
                    v-model="lastname"
                  >
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                  class="input"
                    type="text"
                    placeholder="Username"
                    v-model="username"
                  >
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                  class="input"
                    type="text"
                    placeholder="Email"
                    v-model="email"
                  >
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                  class="input"
                    type="text"
                    placeholder="Address"
                    v-model="address"
                  >
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                  class="input"
                    type="text"
                    placeholder="Phone No."
                    v-model="phone"
                  >
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                  class="input"
                    type="text"
                    placeholder="Role"
                    v-model="role"
                  >
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                  class="input"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                  >
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </p>
              </div>
            </div>  
            <br>
            <a class="button is-success" @click="CreateUser">
              <span>Signup</span>
            </a>
          </section>
        </form>
      </div>
    </div>
</template>

<script>
import { isValidEmail } from '@/assets/validators';
import axios from 'axios'
export default {
  name: 'registration',

  data () {
    return {
      modalTitle: 'Sign up',
      modalTitleRegistered: 'Welcome ',
      primaryBtnLabel: 'Sign up',
      btnRegisteredLabel: 'Close',
      namePlaceholder: 'Name*',
      emailPlaceholder: 'Email*',
      passwordPlaceholder: 'Password*',
      repeatPasswordPlaceholder: 'Repeat Password*',
      notEqualErrorLabel: 'Passwords must be equal',
      passwordErrorLabel: 'Password required',
      nameErrorLabel: 'Name required',
      emailErrorLabel: 'Email required',
      emailNotValidLabel: 'Valid email required',
      username: null,
      email: null,
      password: null,
      firstname: null,
      lastname: null,
      address: null,
      phone: null,
      role: null,
      highlightNameWithError: null,
      highlightEmailWithError: null,
      highlightPasswordWithError: null,
      highlightRepeatPasswordWithError: null,
      isFormSuccess: false
    };
  },

  computed: {
    isUserSignedUp () {
      return this.$store.getters.isUserSignedUp;
    },
    openModal () {
      if (this.$store.getters.isSignupModalOpen) {
        return true;
      } else {
        return false;
      }
    }
  },
    mounted(){
    if(this.$auth.$storage.getLocalStorage("user_id") !== null)
      this.$store.commit('isUserLoggedIn',true)
  },

  methods: {
    closeModal () {
      this.$store.commit('showSignupModal', false);
    },
    
    CreateUser() {
      let payload = {
        "firstname":this.firstname,
        "lastname":this.lastname, 
        "username":this.username, 
        "email":this.email,
        "password": this.password,
        "address":this.address,
        "phone":this.phone,
        "role":this.role,
      };
      let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VyX2lkIjoxfQ.GbQN3gkbfEdLzMo44I4jv4tRwG4TyL4pae-jvFZnOJA'
      return axios.post('https://sos-userapi.herokuapp.com/api/user/signup/',payload,{headers: {"Authorization": `Bearer ${token}`}}).then(
      res => {
        alert("User added successfully.")
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.fa-exclamation-circle {
  color: red;
}
.fa-check {
  color: green;
}
</style>


