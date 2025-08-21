<!--combined components using switch-->

<template>
  <div class="auth-container">
    <!-- Toggle Buttons -->
    <div class="tabs">
      <button
        :class="{ active: activeTab === 'login' }"
        @click="activeTab = 'login'"
      >
        Login
      </button>
      <button
        :class="{ active: activeTab === 'signup' }"
        @click="activeTab = 'signup'"
      >
        Signup
      </button>
    </div>

    <!-- LOGIN FORM -->
    <form v-if="activeTab === 'login'" @submit.prevent="login">
      <h2>Login</h2>
      <input type="email" v-model="loginForm.email" placeholder="Email" required />
      <input type="password" v-model="loginForm.password" placeholder="Password" required />

      <button type="submit">Login</button>

      <!-- Debugging (optional) -->
      <p>Email: {{ loginForm.email }}</p>
      <p>Password: {{ loginForm.password }}</p>
    </form>

    <!-- SIGNUP FORM -->
    <form v-else @submit.prevent="signup">
      <h2>Signup</h2>
      <input type="text" v-model="signupForm.name" placeholder="Name" required />
      <span v-if="signupForm.name.length < 3" style="color:red;">Name too short</span>

      <input type="email" v-model="signupForm.email" placeholder="Email" required />
      <span v-if="!isValidEmail(signupForm.email)" style="color:red;">Invalid Email</span>

      <input type="password" v-model="signupForm.password" placeholder="Password" required />
      <span v-if="signupForm.password.length < 6" style="color:red;">Password too short</span>

      <button type="submit" :disabled="!isSignupValid">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "login", // default is login tab
      loginForm: {
        email: "",
        password: ""
      },
      signupForm: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  computed: {
    // Computed property for signup validation
    isSignupValid() {
      return (
        this.signupForm.name.length >= 3 &&
        this.isValidEmail(this.signupForm.email) &&
        this.signupForm.password.length >= 6
      );
    }
  },
  methods: {
    // Simple email check with regex
    isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    },
    login() {
      alert(
        `Login with Email: ${this.loginForm.email}, Password: ${this.loginForm.password}`
      );
    },
    signup() {
      alert("Signup successful with " + JSON.stringify(this.signupForm));
    }
  }
};
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.tabs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.tabs button {
  flex: 1;
  padding: 10px;
  cursor: pointer;
  background: #f0f0f0;
  border: none;
  outline: none;
}

.tabs button.active {
  background: #3498db;
  color: white;
  font-weight: bold;
}
</style>
