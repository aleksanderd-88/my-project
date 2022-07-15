<template>
  <button class="pagination-button" @click="showRelevantVideos()">
    Show relevant videos
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({

  name: 'AppPaginationButton',

  setup () {
    const route = useRoute()
    const router = useRouter()

    // get current page otherwise set page to 1
    const page = ref(Number(route.query.page?.toString()) || 1)

    // navigate to current route and set current page = (current page + 1)
    const showRelevantVideos = () => {
      router.push({ name: route.name?.toString(), query: { page: page.value + 1} })
    }

    return {
      showRelevantVideos
    }
  }
})
</script>

<style lang="scss" scoped>
  .pagination-button {

  }
</style>