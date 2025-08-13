<template>
  <div>
    <h1>{{ title }}</h1>
    <input v-model="title" placeholder="Edit title">
    <p>Title Length: {{ titleLength }}</p>
    <p>Image:</p>
    <img :src="imageUrl" width="150">
    <input v-model="imageUrl" placeholder="Change image URL">

    <!-- Login status using v-if/v-else -->
    <p v-if="isLoggedIn">Welcoming you back!</p>
    <p v-else>Please log in to continue.</p>

    <!-- Show/hide message using v-show -->
    <p v-show="showMessage">Tip: You can edit the title and image above!</p>

    <!-- Fruit list using v-for -->
    <h2>Fruit Basket</h2>
    <ul>
      <li v-for="(fruit, index) in fruits" :key="index">
        {{ index + 1 }}. {{ fruit }}
      </li>
    </ul>

    <!-- Button events -->
    <button @click="sayHello">Say Hello</button>
    <button @click="greet('Bishal')">Personal Greet</button>

    <!-- Input event: logs value to console -->
    <input @input="onInputChange" placeholder="Type to log value">

    <!-- Form with .prevent modifier (prevents default submit) -->
    <form @submit.prevent="onFormSubmit">
      <input v-model="formInput" placeholder="Add a fruit">
      <button type="submit">Add Fruit</button>
    </form>

    <!-- Enter key event with .enter modifier -->
    <input @keyup.enter="onEnterKey" placeholder="Press Enter for a surprise">

    <!-- .stop modifier: stops event from bubbling up -->
    <div @click="parentClicked" style="margin-top:20px; padding:10px; border:1px solid #ccc;">
      Parent Div (click me)
      <button @click.stop="childClicked">Child Button (.stop)</button>
    </div>

    <!-- .once modifier: handler will only fire once -->
    <button @click.once="sayHelloOnce">Say Hello Once (.once)</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'How you doing ?',
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      isLoggedIn: true,
      showMessage: true,
      fruits: ['Apple', 'Banana', 'Cherry'],
      formInput: ''
    }
  },
  methods: {
    sayHello() {
      alert("Hello from Vue!");
    },
    greet(name) {
      alert(`Hello, ${name}!`);
    },
    onInputChange(event) {
      console.log(event.target.value); // Logs current input value
    },
    onFormSubmit() {
      if (this.formInput.trim()) {
        this.fruits.push(this.formInput.trim());
        alert(`Added: ${this.formInput}`);
        this.formInput = '';
      } else {
        alert('Please enter a fruit name.');
      }
    },
    onEnterKey() {
      alert('You pressed Enter!');
    },
    parentClicked() {
      alert('Parent div clicked!');
    },
    childClicked() {
      alert('Child button clicked! (event propagation stopped)');
    },
    sayHelloOnce() {
      alert('This alert will only show once!');
    }
  },
  computed: {
    // Simple computed property: length of the title
    titleLength() {
      return this.title.length;
    }
  }
}
</script>

