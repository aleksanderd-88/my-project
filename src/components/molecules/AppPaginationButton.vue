<template>
  <button v-if="!isLoading" class="pagination-button" @click="showRelevantVideos()">
    Show more relevant videos
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
      router.push({ name: route.name?.toString(), query: { page: page.value + 1} })
    }

    const isLoading = computed(() => store.state.isLoading)

    return {
      showRelevantVideos,
      isLoading
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
    border-radius: 3px;
    margin-top: 2rem;
    font-size: .65rem;
    font-weight: 600;
    letter-spacing: .05em;
    text-transform: uppercase;
  }
</style>