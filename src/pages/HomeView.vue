<template>
  <div>
    <AppHeadline headline="Home view" />
  </div>
</template>

<script lang="ts">
import AppHeadline from '@/components/atoms/AppHeadline.vue'
import { defineComponent } from 'vue'

export default defineComponent({

  name: 'HomeView',

  components: {
    AppHeadline,
  },

  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>