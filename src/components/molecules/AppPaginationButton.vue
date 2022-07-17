<template>
  <button v-if="!isLoading" class="pagination-button" @click="showRelevantVideos()">
    {{ buttonLabel }}
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({

  name: 'AppPaginationButton',

  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()

    // get current page otherwise set page to 1
    const page = ref(Number(route.query.page?.toString()) || 1)

    // navigate to current route and set current page = (current page + 1)
    const showRelevantVideos = () => {
      hasMoreVideos.value ? 
      router.push({ name: route.name?.toString(), 
        params: { 
          query: route.params.query?.toString()
        }, 
        query: { 
          page: page.value + 1
        } 
      })
      :
      router.push({ name: 'Home' })
    }

    const hasMoreVideos = computed(() => store.state.videos.result.count > 0)

    const buttonLabel = computed(() => {
      return hasMoreVideos.value ? 'Show more relevant videos' : 'Show other videos'
    })

    const isLoading = computed(() => store.state.isLoading)

    return {
      showRelevantVideos,
      isLoading,
      hasMoreVideos,
      buttonLabel
    }
  }
})
</script>

<style lang="scss" scoped>
  .pagination-button {
    width: 100%;
    background-color: #222;
    color: #fff;
    height: 50px;
    display: block;
    border-radius: 3px;
    margin: 2rem auto;
    font-size: .65rem;
    font-weight: 600;
    letter-spacing: .05em;
    text-transform: uppercase;

    @media screen and (min-width: 600px) {
      width: 300px;
    }
  }
</style>