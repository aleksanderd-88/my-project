<template>
  <router-link to="/" class="logo-btn">
    <img class="logo-btn__logo" :src="require('@/assets/logos/main_logo.png')" alt="Application logo" />
    Lickida split
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

  name: 'TheAppLogoButton',

  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .logo-btn {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: .9em;
    font-weight: 600;
    letter-spacing: .03em;
    gap: .5em;

    &__logo {
      width: 40px;
    }
  }
</style>