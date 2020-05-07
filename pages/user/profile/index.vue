<template>
  <div class="section" style="display:flex">
    <div
      class="card is-centered"
      style="width:70%;border-radius:6px 6px 0px 0px;"
      v-for=" user in info.user"
      :key="user"
    >
      <form style="width:80%;margin-left:10%;padding-bottom:50px">
        <center>
          <h2 style="padding:30px 0px;">Edit Profile</h2>
        </center>
        <label class="control">First Name</label>
        <br />
        <p class="control">
          <input
            class="input"
            type="text"
            v-model="firstname"
            placeholder="First name"
            value="Name"
          />
        </p>
        <br />
        <label class="control">Last Name</label>
        <br />
        <p class="control">
          <input class="input" type="text" v-model="lastname" placeholder="Last name" />
        </p>
        <br />
        <label class="control">Username</label>
        <br />
        <p class="control">
          <input class="input" type="text" v-model="username" placeholder="Username" />
        </p>
        <br />
        <label class="control">E-mail</label>
        <br />
        <p class="control">
          <input
            class="input"
            type="email"
            v-model="emailadress"
            min="1"
            step="any"
            placeholder="Email"
          />
        </p>
        <br />
        <label class="control">Address</label>
        <br />
        <p class="control">
          <input
            class="input"
            type="text"
            v-model="address"
            min="1"
            step="any"
            placeholder="Address"
          />
        </p>
        <br />
        <label class="control">Phone No</label>
        <br />
        <p class="control">
          <input
            class="input"
            type="text"
            v-model="phone"
            min="1"
            step="any"
            placeholder="Phone No"
          />
        </p>
        <br />

        <label class="control">Password</label>
        <br />
        <p class="control">
          <input
            class="input"
            type="password"
            v-model="password"
            min="1"
            step="any"
            placeholder="Password"
          />
        </p>
        <br />
        <a class="button btn" @click="updateUserInfo">
          <span>Update Profile</span>
        </a>
      </form>
    </div>
    <div class="card" v-for=" user in info.user" :key="user">
      <img
        src="https://bulma.io/images/placeholders/1280x960.png"
        alt="John"
        style="width:100%;border-radius:6px 6px 0px 0px;"
      />
      <p class="title">{{ user.role }}</p>
      <h2>{{ user.firstname }} {{ user.lastname }}</h2>
      <p style="align:center;">Username: {{user.username}}</p>
      <p style="align:center;">Email: {{user.email}}</p>
      <p style="align:center;">Address: {{user.address}}</p>
      <p style="align:center;">Phone No: {{user.phone}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "user-profile",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  mounted() {
    if (this.$auth.$storage.getLocalStorage("user_id") !== null)
      this.$store.commit("isUserLoggedIn", true);
  },
  data() {
    return {
      username: null,
      disabled: null,
      emailadress: null,
      lastname: null,
      firstname: null,
      address: null,
      info: {},
      phone: null,
      password: null,
      aboutme:
        "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.",
      token: this.$auth.$storage.getLocalStorage("token")
    };
  },
  methods: {
    updateUserInfo() {
      let payload = {
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username,
        role: this.$auth.$storage.getLocalStorage("role"),
        email: this.emailadress,
        phone: this.phone,
        address: this.address,
        password: this.password
      };
      this.token = this.$auth.$storage.getLocalStorage("token");
      return axios
        .patch(
          "https://sos-userapi.herokuapp.com/api/user/updateUser/" +
            this.$auth.$storage.getLocalStorage("user_id"),
          payload,
          { headers: { Authorization: `Bearer ${this.token}` } }
        )
        .then(res => {
          alert("User account updated successfully.");
        });
    }
  },
  created() {
    this.token = this.$auth.$storage.getLocalStorage("token");

    axios
      .get(
        "https://sos-userapi.herokuapp.com/api/user/getUser/" +
          this.$auth.$storage.getLocalStorage("user_id"),
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "application/json",
            Accept: "applciation/json"
          }
        }
      )
      .then(res => {
        this.info = res.data;
        this.username = res.data.user[0].username
        this.firstname =  res.data.user[0].firstname,
        this.lastname = res.data.user[0].lastname,
        this.email = res.data.user[0].email,
        this.phone =  res.data.user[0].phone,
        this.address = res.data.user[0].address,
        this.email = res.data.user[0].email,
        this.password = res.data.user[0].password
      });
  }
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 25%;
  margin: auto;
  text-align: center;
  font-family: arial;
  margin-top: 0;
}

.title {
  color: grey;
  font-size: 18px;
}

.brder-r {
  border-radius: 0px 0px 6px 6px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

h2 {
  color: #363636;
  font-size: 2rem;
  font-weight: 600;
}

a {
  text-decoration: none;
  font-size: 18px;
  color: black;
}

button:hover,
a:hover {
  opacity: 0.7;
}

.card-description {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  text-align: left;
}
</style>


