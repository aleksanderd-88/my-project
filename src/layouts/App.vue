<template>
  <BaseTemplate>
    <template #header>
      <TheAppBar />
    </template>
    <router-view />
  </BaseTemplate>
</template>

<script lang="ts">
import BaseTemplate from '@/components/templates/BaseTemplate.vue'
import TheAppBar from '@/components/organisms/TheAppBar.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  
  name: 'AppLayout',

  components: { BaseTemplate, TheAppBar },

  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>