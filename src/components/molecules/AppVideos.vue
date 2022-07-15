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

      @media screen and (min-width: 600px) {
        grid-template-columns: repeat(4, 1fr);
      }

      @media screen and (min-width: 900px) {
        grid-template-columns: repeat(5, 1fr);
      }
    }
  }
</style>