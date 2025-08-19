<template>
  <div id="app">
    <h1>🚀 My Vue App</h1>

    <!-- Navigation -->
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/users">Users</router-link>
    </nav>

    <!-- Router Content -->
    <router-view />

    <hr />

    <!-- Vuex Counter -->
    <NumCounter />
  </div>
</template>

<script>
import NumCounter from './components/NumCounter.vue'

export default {
  name: 'App',
  components: { NumCounter }
}
</script>
