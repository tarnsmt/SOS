<template>
  <div class="section" style="display:flex">
    <div class="card is-centered" style="width:70%;border-radius:6px 6px 0px 0px;">
    <form style="width:80%;margin-left:10%;padding-bottom:50px">
      <center>
        <h2 style="padding:30px 0px;">Edit Profile</h2>
      </center>
      <label class="control">First Name</label><br>
      <p class="control">
      <input
        class="input"
        type="text"
        v-model="firstname"
        placeholder="First name"
      >
      </p>
      <br>
      <label class="control">Last Name</label><br>
      <p class="control">
      <input
        class="input"
        type="text"
        v-model="lastname"
        placeholder="Last name"
      >
      </p>
      <br>
        <label class="control">Username</label><br>
        <p class="control">
        <input
          class="input"
          type="text"
          v-model="username"
          placeholder="Username"
        >
        </p>
        <br>
        <label class="control">E-mail</label><br>
        <p class="control">
        <input
          class="input"
          type="email"
          v-model="emailadress"
          min="1" step="any"
          placeholder="Email"
        >
        </p>
        <br>
        <label class="control">Address</label><br>
        <p class="control">
        <input
          class="input"
          type="text"
          v-model="address"
          min="1" step="any"
          placeholder="Address"
        >
        </p>
        <br>
        <label class="control">User ID</label><br>
        <p class="control">
        <input
          class="input"
          type="number"
          v-model="userid"
          min="1" step="any"
          placeholder="User ID"
        >
        </p>
        <br>
        <a class="button btn">
          <span>Update Profile</span>
        </a>
    </form>
    </div>
        <div class="card">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="John" style="width:100%;border-radius:6px 6px 0px 0px;">
      <p class="title">CEO /  Co-Founder</p>
      <h3>Alec Thompson</h3>
      <p class="card-description">
        Don't be scared of the truth because we need to restart the human
        foundation in truth And I love you like Kanye loves Kanye I love Rick
        Owens’ bed design but the back is...
      </p> 
      <p><button style="border-radius:0px 0px 6px 6px;">Follow</button></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-profile',
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      userid: null,
      username: null,
      disabled: null,
      emailadress: null,
      lastname: null,
      firstname: null,
      address: null,
      city: null,
      country: null,
      code: null,
      aboutme:
        "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
    };
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

  .brder-r{
    border-radius:0px 0px 6px 6px;
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

  h2{
    color: #363636;
    font-size: 2rem;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    font-size: 18px;
    color: black;
  }

  button:hover, a:hover {
    opacity: 0.7;
  }

  .card-description{
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left:10px;
    text-align:left;
  }
</style>


