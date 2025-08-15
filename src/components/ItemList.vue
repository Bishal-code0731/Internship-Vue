<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <!-- Provide data to parent through scoped slot -->
      <slot :item="item"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['items']
}
</script>
