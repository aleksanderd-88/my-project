<template>
  <h1 class="headline" v-if="headline">
    {{ headline }}
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

  name: 'AppHeadline',

  props: {
    headline: {
      type: String,
      default: null
    }
  },

  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .headline {
    padding: 2rem 0;
    font-size: 1.3rem;
    transition: font-size .2s ease;

    @media screen and (min-width: 1024px) {
      font-size: 1.6rem;
    }
  }
</style>