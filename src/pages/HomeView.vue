<template>
  <div>
    <AppHeadline headline="Popular videos" />
    <AppVideos :videos="videos" />
  </div>
</template>

<script lang="ts">
import AppHeadline from '@/components/atoms/AppHeadline.vue'
import AppVideos from '@/components/molecules/AppVideos.vue'
import { computed, defineComponent, ref } from 'vue'
import API from '@/services/api'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default defineComponent({

  name: 'HomeView',

  components: {
    AppHeadline,
    AppVideos
  },

  setup () {
    const store = useStore()
    const route = useRoute()

    // Set query string
    const query = ref(route.params.query?.toString() || 'blowjob')
    const page = ref(Number(route.query.page?.toString()) || 1)

    // get videos
    API.fetchVideos(query.value, page.value).then(({ data }) => {
      store.dispatch('videos/setResultData', data)
    })
    .catch((error) => {
      console.log('An error occured, reason ::', error)
    })

    const videos = computed(() => store.state.videos.result.videos)

    return {
      videos
    }
  }
})
</script>

<style scoped>

</style>