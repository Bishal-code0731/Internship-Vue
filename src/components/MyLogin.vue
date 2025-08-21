<!--Basic Login (with v-model)-->

<template>
  <div>
    <!-- @submit.prevent stops page reload -->
    <form @submit.prevent="login">

      <!-- binding input to email and password using v-model -->
      <input type="email" v-model="email" placeholder="Enter Email" required />
      <input type="password" v-model="password" placeholder="Enter Password" required />
      <button type="submit">Login</button>
    </form>

    <!-- debug: showing live input values -->
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",     // stores email input
      password: ""   // stores password input
    };
  },
  methods: {
    login() {
      // Using template literals for string interpolation
      alert(`Logging in with Email: ${this.email}, Password: ${this.password}`);
    }
  }
};
</script>
