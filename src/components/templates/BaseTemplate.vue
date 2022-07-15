<template>
  <div class="container">
    <header>
      <slot name="header" />
    </header>
    <main class="container__content">
      <slot />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

  name: 'BaseTemplate',

  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;

    &__content {
      width: inherit;
      max-width: 1440px;
      margin: 4rem auto 6rem;
      padding: 0 1em;
    }
  }
</style>