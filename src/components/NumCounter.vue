<template>
  <div>
    <h2>Vuex Counter: NumCounter</h2>
    <p>Count: {{ count }}</p>
    <p>Double: {{ doubleCount }}</p>

    <button @click="increment">➕ Increment</button>
    <button @click="decrement">➖ Decrement</button>
    <button @click="asyncIncrement">⏳ Async Increment</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'NumCounter',
  computed: {
    ...mapState(['count']),
    ...mapGetters(['doubleCount'])
  },
  methods: {
    ...mapMutations(['increment', 'decrement']),
    ...mapActions(['asyncIncrement'])
  }
}
</script>

<style scoped>
button {
  margin: 5px;
  padding: 5px 10px;
  font-size: 16px;
}
</style>
