

<!--used watchers for live validation-->

<template>
  <div>
    <h2>Signup</h2>
    <form @submit.prevent="signup">
      <input type="text" v-model="form.name" placeholder="Name" />
      <span v-if="nameError" style="color:red">{{ nameError }}</span>

      <input type="email" v-model="form.email" placeholder="Email" />
      <span v-if="emailError" style="color:red">{{ emailError }}</span>

      <input type="password" v-model="form.password" placeholder="Password" />
      <span v-if="passwordError" style="color:red">{{ passwordError }}</span>

      <button type="submit" :disabled="!isFormValid">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: { name: "", email: "", password: "" },
      nameError: "",
      emailError: "",
      passwordError: ""
    };
  },
  computed: {
    isFormValid() {
      return !this.nameError && !this.emailError && !this.passwordError;
    }
  },
  methods: {
    isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    },
    signup() {
      alert("Signup successful with " + JSON.stringify(this.form));
    }
  },
  watch: {
    "form.name"(value) {
      this.nameError = value.length < 3 ? "Name too short" : "";
    },
    "form.email"(value) {
      this.emailError = !this.isValidEmail(value) ? "Invalid Email" : "";
    },
    "form.password"(value) {
      this.passwordError = value.length < 6 ? "Password too short" : "";
    }
  }
};
</script>
