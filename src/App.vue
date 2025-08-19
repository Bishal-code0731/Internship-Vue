<template>
  <div>
    <h1> Hello from ...</h1>

    <!-- Navigation Links -->
    <nav>
        <router-link to="/">HomePage</router-link>
        <router-link to="/about">AboutPage</router-link>
        <router-link to="/contact">ContactPage</router-link>
        <router-link to="/users">UsersPage</router-link>
    </nav>

     <!-- Routed Components Render Here -->
    <router-view />
  </div>
</template>
  