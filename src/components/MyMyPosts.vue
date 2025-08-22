<script>
import axios from "axios"; // Import Axios to make HTTP requests

export default {
  name: "MyMyPosts",
  data() {
    return {
      posts: [],         // Store fetched posts
      errorMessage: "",  // Store any error messages
      isLoading: false   // Track loading state (true while fetching)
    }
  },
  mounted() {
    this.fetchPosts(); // Call fetchPosts() when component is mounted
  },
  methods: {
    fetchPosts() {
      this.isLoading = true;       // ✅ Set loading to true before request
      this.errorMessage = "";      // Reset previous errors

      // Make GET request to fetch posts
      axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
          this.posts = res.data;   // ✅ Success: save data to posts array
        })
        .catch(err => {
          // ❌ Error handling
          if (err.response) {
            // Server responded with a status outside 2xx
            this.errorMessage = `Server Error: ${err.response.status}`;
          } else if (err.request) {
            // Request was made but no response received
            this.errorMessage = "No response from server. Please try again.";
          } else {
            // Other errors (like setup issues)
            this.errorMessage = "Unexpected Error: " + err.message;
          }
        })
        .finally(() => {
          this.isLoading = false; // ✅ Stop loading regardless of success or error
        });
    }
  }
}
</script>

<template>
  <div>
    <h2>Posts</h2>

    <!-- Show loading message while fetching -->
    <p v-if="isLoading">⏳ Loading posts...</p>

    <!-- Show error message if request fails -->
    <p v-else-if="errorMessage" style="color: red;">{{ errorMessage }}</p>

    <!-- Show posts if data is available and no error -->
    <ul v-else>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>

    <!-- Button to refetch posts -->
    <button @click="fetchPosts" style="margin-top: 10px;">🔄 Refresh Posts</button>
  </div>
</template>
