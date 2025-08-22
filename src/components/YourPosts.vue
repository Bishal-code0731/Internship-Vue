<script>
import axios from "axios";

export default {
  name: "YourPosts",
  data() {
    return {
      posts: [],           // Store posts from server
      errorMessage: "",    // Store any error messages
      isLoading: false,    // Track loading state
      newPostTitle: "",    // For adding a new post
      newPostBody: ""      // For adding a new post
    }
  },
  mounted() {
    this.fetchPosts();     // Fetch posts when component loads
  },
  methods: {
    // ---------------------------
    // FETCH POSTS (GET)
    // ---------------------------
    fetchPosts() {
      this.isLoading = true;        // Start loading
      this.errorMessage = "";       // Reset previous errors

      axios.get("http://localhost:3000/posts") // GET request
        .then(response => {
          this.posts = response.data;    // Success: store posts
        })
        .catch(error => {
          if (error.response) {
            this.errorMessage = `Server Error: ${error.response.status}`;
          } else if (error.request) {
            this.errorMessage = "No response from server. Please try again.";
          } else {
            this.errorMessage = "Unexpected Error: " + error.message;
          }
        })
        .finally(() => {
          this.isLoading = false;   // Stop loading
        });
    },

    // ---------------------------
    // CREATE POST (POST)
    // ---------------------------
    createPost() {
      if (!this.newPostTitle || !this.newPostBody) {
        alert("Please enter title and body!");
        return;
      }

      this.isLoading = true;

      axios.post("http://localhost:3000/posts", {
        title: this.newPostTitle,
        body: this.newPostBody
      })
      .then(() => {  // response not used, so we can ignore
        alert("Post Created!");
        this.newPostTitle = "";    // Clear input
        this.newPostBody = "";
        this.fetchPosts();         // Refresh posts
      })
      .catch(() => { // error not used, so ignore
        this.errorMessage = "Error creating post";
      })
      .finally(() => this.isLoading = false);
    },

    // ---------------------------
    // UPDATE POST (PUT)
    // ---------------------------
    updatePost(post) {
      const updatedTitle = prompt("Enter new title:", post.title);
      const updatedBody = prompt("Enter new body:", post.body);
      if (updatedTitle === null || updatedBody === null) return; // Cancel pressed

      this.isLoading = true;

      axios.put(`http://localhost:3000/posts/${post.id}`, {
        title: updatedTitle,
        body: updatedBody
      })
      .then(() => {
        alert("Post Updated!");
        this.fetchPosts();        // Refresh posts
      })
      .catch(() => {
        this.errorMessage = "Error updating post";
      })
      .finally(() => this.isLoading = false);
    },

    // ---------------------------
    // DELETE POST (DELETE)
    // ---------------------------
    deletePost(post) {
      if (!confirm("Are you sure you want to delete this post?")) return;

      this.isLoading = true;

      axios.delete(`http://localhost:3000/posts/${post.id}`)
      .then(() => {
        alert("Post Deleted!");
        this.fetchPosts();        // Refresh posts
      })
      .catch(() => {
        this.errorMessage = "Error deleting post";
      })
      .finally(() => this.isLoading = false);
    }
  }
}
</script>

<template>
  <div>
    <h2>📌 Posts</h2>

    <!-- Loading state -->
    <p v-if="isLoading">⏳ Loading...</p>

    <!-- Error message -->
    <p v-else-if="errorMessage" style="color: red;">{{ errorMessage }}</p>

    <!-- CREATE POST FORM -->
    <div>
      <input v-model="newPostTitle" placeholder="Post Title" />
      <input v-model="newPostBody" placeholder="Post Body" />
      <button @click="createPost">➕ Add Post</button>
    </div>

    <!-- POSTS LIST -->
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <strong>{{ post.title }}</strong> - {{ post.body }}
        <button @click="updatePost(post)">✏️ Edit</button>
        <button @click="deletePost(post)">🗑️ Delete</button>
      </li>
    </ul>

    <!-- No posts message -->
    <p v-else>No posts available</p>
  </div>
</template>
