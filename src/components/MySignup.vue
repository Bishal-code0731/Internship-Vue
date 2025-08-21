<!--Signup Form (Object Binding + Custom Validation)-->

<template>
  <div>
    <h2>Signup</h2>
    <form @submit.prevent="signup">
      <input type="text" v-model="form.name" placeholder="Name" required />
      <span v-if="form.name.length < 3" style="color:red;">Name too short</span>

      <input type="email" v-model="form.email" placeholder="Email" required />
      <span v-if="!isValidEmail(form.email)" style="color:red;">Invalid Email</span>

      <input type="password" v-model="form.password" placeholder="Password" required />
      <span v-if="form.password.length < 6" style="color:red;">Password too short</span>

      <!-- disabled until valid -->
      <button type="submit" :disabled="!isFormValid">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      }
    };
  },

  
  computed: {
    // Computed property for overall form validation
    isFormValid() {
      return (
        this.form.name.length >= 3 &&
        this.isValidEmail(this.form.email) &&
        this.form.password.length >= 6
      );
    }
  },
  methods: {
    // Email regex check
    isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    },
    signup() {
      alert("Signup successful with " + JSON.stringify(this.form));
    }
  }
};
</script>
