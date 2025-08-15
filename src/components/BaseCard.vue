<template>
  <div class="card">
    <!-- Slot placeholder -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCard'
}
</script>

<style>
.card {
  border: 1px solid gray;
  padding: 10px;
  border-radius: 5px;
}
</style>
