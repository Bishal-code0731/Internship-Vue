<template>
  <div>
    <h1>{{ title }}</h1>
    <input v-model="title" placeholder="Edit title">
    <p>Image:</p>
    <img :src="imageUrl" width="150">
    <input v-model="imageUrl" placeholder="Change image URL">
    <!-- 
      v-if is a Vue directive used for conditional rendering.
      The first <p> will only be shown if isLoggedIn is true.
      The second <p> will be shown if isLoggedIn is false.
    -->
    <p v-if="isLoggedIn">Welcome back!</p>
    <p v-else>v-if used Please log in.</p>
    <!-- 
      v-show is a Vue directive that toggles the element's visibility using CSS (display: none).
      The following <p> will always be in the DOM, but only visible if showMessage is true.
    -->
    <p v-show="showMessage">How you doing using v-show.</p>
    <!-- 
      v-for is a Vue directive used for rendering a list of items.
      The following <ul> will display each fruit in the fruits array.
    -->
    <ul>
      <li v-for="(fruit, index) in fruits" :key="index">
        {{ fruit }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'My Vue App',
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      isLoggedIn: false, // Change to true to see the "Welcome back!" message
      showMessage: true, // Change to false to hide the v-show message
      fruits: ['v-for','Apple', 'Banana', 'Cherry'] // Array for v-for example
    }
  }
}
</script>
