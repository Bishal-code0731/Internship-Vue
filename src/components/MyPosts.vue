<!-- src/components/Posts.vue -->
<script>
import axios from "axios";

export default {
  name: "MyPosts",
  data() {
    return {
      posts: [] // Store fetched posts
    }
  },
  mounted() {
    // Fetch posts when component loads
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.posts = response.data;
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
      });
  },
  methods: {
    createPost() {
      axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: "New Post from Vue",
        body: "This is a post created with Axios POST",
        userId: 1
      })
      .then(res => {
        alert("Post Created: " + res.data.title);
      })
      .catch(err => console.error(err));
    },
    updatePost() {
      axios.put("https://jsonplaceholder.typicode.com/posts/1", {
        title: "Updated Post",
        body: "This post is updated",
        userId: 1
      })
      .then(res => {
        alert("Post Updated: " + res.data.title);
      })
      .catch(err => console.error(err));
    },
    deletePost() {
      axios.delete("https://jsonplaceholder.typicode.com/posts/1")
        .then(() => {
          alert("Post Deleted!");
        })
        .catch(err => console.error(err));
    }
  }
}
</script>

<template>
  <div>
    <h2>Posts List</h2>
    <button @click="createPost">➕ Add Post</button>
    <button @click="updatePost">✏️ Update Post</button>
    <button @click="deletePost">🗑️ Delete Post</button>

    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>
