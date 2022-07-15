<template>
  <div class="videos">
    <div class="videos__list">
      <AppVideoItem 
        v-for="video in videos" 
        :key="video.id" 
        :video="video" 
      />
    </div>

    <AppPaginationButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppPaginationButton from './AppPaginationButton.vue'
import AppVideoItem from './AppVideoItem.vue'

export default defineComponent({
  
  name: 'AppVideos',

  components: { AppVideoItem, AppPaginationButton },

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
    
    &__list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: .5em;
    }
  }
</style>