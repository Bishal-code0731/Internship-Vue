<template>
  <div>
    <h2>👥 Users Page</h2>

    <nav>
      <router-link to="/users/profile">Profile</router-link> |
      <router-link to="/users/settings">Settings</router-link>
    </nav>

    <!-- Child routes will be rendered here -->
    <router-view />
  </div>
</template>
