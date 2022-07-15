<template>
  <div class="videos">
    <AppVideoItem 
      v-for="video in videos" 
      :key="video.id" 
      :video="video" 
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppVideoItem from './AppVideoItem.vue'

export default defineComponent({
  components: { AppVideoItem },

  name: 'AppVideos',

  props: {
    videos: {
      type: Array,
      required: true,
      default: () => ([])
    }
  },

  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .videos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: .5em;
  }
</style>