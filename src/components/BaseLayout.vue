<template>
  <header>
    <slot name="header"></slot>
  </header>

  <main>
    <slot></slot> <!-- default slot -->
  </main>

  <footer>
    <slot name="footer"></slot>
  </footer>
</template>
