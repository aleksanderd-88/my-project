<template>
  <BaseTemplate>
    <template #header>
      <TheAppBar />
    </template>

    <router-view :key="$route.fullPath" />

    <template #footer>
      <TheAppSearchBar />
    </template>
  </BaseTemplate>
</template>

<script lang="ts">
import BaseTemplate from '@/components/templates/BaseTemplate.vue'
import TheAppBar from '@/components/organisms/TheAppBar.vue'
import { defineComponent } from 'vue'
import TheAppSearchBar from '@/components/organisms/TheAppSearchBar.vue'

export default defineComponent({
  
  name: 'AppLayout',

  components: { BaseTemplate, TheAppBar, TheAppSearchBar },

  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>