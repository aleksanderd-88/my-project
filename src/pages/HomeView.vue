<template>
  <div>
    <AppHeadline headline="Popular videos" />
    <AppVideos :videos="videos" />
  </div>
</template>

<script lang="ts">
import AppHeadline from '@/components/atoms/AppHeadline.vue'
import AppVideos from '@/components/molecules/AppVideos.vue'
import { defineComponent, ref } from 'vue'
import API from '@/services/api'

export default defineComponent({

  name: 'HomeView',

  components: {
    AppHeadline,
    AppVideos
  },

  setup () {
    const videos = ref([])

    // get videos
    API.fetchVideos().then(({ data }) => {
      videos.value = data.videos
    })

    return {
      videos
    }
  }
})
</script>

<style scoped>

</style>