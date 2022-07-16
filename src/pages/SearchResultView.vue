<template>
  <div>
    <AppHeadline :headline="firstLetterToUpper(searchQuery)" />
    <AppVideos :videos="videos" />
  </div>
</template>

<script lang="ts">
import AppHeadline from '@/components/atoms/AppHeadline.vue'
import AppVideos from '@/components/molecules/AppVideos.vue'
import API from '@/services/api'
import { computed, defineComponent, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { firstLetterToUpper } from '@/utils/useTextFormatter'

export default defineComponent({

  name: 'SearchResultView',

  components: {
    AppHeadline,
    AppVideos,
  },

  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const page = ref(Number(route.query.page?.toString()) || 1)

    const searchQuery = computed(() => route.params?.query.toString())

    const videos = computed(() => store.state.videos.result.videos)

    // get videos
    API.fetchVideos(searchQuery.value, page.value).then(({ data }) => {
      store.dispatch('videos/setResultData', data)
    })
    .catch((error) => {
      console.log('An error occured, reason ::', error)
    })

    watch(() => page.value, (val) => {
      if(val) {
        router.push({ name: route.name?.toString(), query: { page: page.value.toString() } })
      } else {
        return
      }
    })

    return {
      searchQuery,
      videos,
      firstLetterToUpper
    }
  }
})
</script>

<style scoped>

</style>