<template>
  <div class="videos">
    <AppHeadline :headline="firstLetterToUpper(searchQuery)" />

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
import { computed, defineComponent } from 'vue'
import AppPaginationButton from './AppPaginationButton.vue'
import AppVideoItem from './AppVideoItem.vue'
import { firstLetterToUpper } from '@/utils/useTextFormatter'
import { useRoute } from 'vue-router'
import AppHeadline from '@/components/atoms/AppHeadline.vue'
import { useStore } from 'vuex'

export default defineComponent({
  
  name: 'AppVideos',

  components: { 
    AppVideoItem, 
    AppPaginationButton,
    AppHeadline
  },

  props: {
    videos: {
      type: Array,
      required: true,
      default: () => ([])
    }
  },

  setup () {
    const route = useRoute()
    const store = useStore()

    const hasMoreVideos = computed(() => store.state.videos.result.count > 0)
    const hasRouteQueryParam =  computed(() => route.params.query?.toString())

    const searchQuery = computed(() => {
      if(hasMoreVideos.value && hasRouteQueryParam.value) {
        return route.params.query?.toString() 
      }
      if(! hasMoreVideos.value) {
        return 'No more videos'
      }
      return 'Popular videos'
    })

    return {
      firstLetterToUpper,
      searchQuery
    }
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
        gap: 1em .5em;
        grid-template-columns: repeat(5, 1fr);
      }
    }
  }
</style>