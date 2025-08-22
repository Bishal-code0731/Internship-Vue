

<template>
  <div id="app">
    <h1>Axios Example in Vue</h1>
  <!-- <MyPosts/>   -->
   <!-- <MyMyPosts/>   -->
   <!--- <YourPosts/>   -->
    <PostList />
  </div>
</template>




<script>
//import MyPosts from "./components/MyPosts.vue";
//import MyMyPosts from "./components/MyMyPosts.vue";
//import YourPosts from "./components/YourPosts.vue";
import PostList from './components/PostList.vue'
export default {
  name: "App",
  components: {
    //MyPosts,
    //MyMyPosts,
    //YourPosts
    PostList

  }
}
</script>

