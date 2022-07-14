<template>
  <nav class="bar">
    <main class="bar__content">
      <TheAppLogoButton />
    </main>
  </nav>
</template>

<script lang="ts">
import TheAppLogoButton from '@/components/atoms/TheAppLogoButton.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { TheAppLogoButton },

  name: 'TheAppBar',

  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(#000, .1);

    &__content {
      height: 60px;
      width: inherit;
      max-width: 1440px;
      margin: auto;
      display: flex;
      padding: 0 1em;
      align-items: center;
    }
  }
</style>