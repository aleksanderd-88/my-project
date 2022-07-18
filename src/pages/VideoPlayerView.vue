<template>
  <div>
    <AppHeadline :headline="video.title" />
    <iframe class="video-player" :src="video.embed" frameborder="0" />
    <!-- <AppVideos /> -->
  </div>
</template>

<script lang="ts">
import AppHeadline from '@/components/atoms/AppHeadline.vue'
import { defineComponent, ref } from 'vue'
import API from '@/services/api'
import { useRoute } from 'vue-router'
// import AppVideos from '@/components/molecules/AppVideos.vue'

export default defineComponent({
  components: { 
    AppHeadline, 
    // AppVideos 
  },

  name: 'VideoPlayerView',

  setup () {
    const video = ref({})
    const route = useRoute()
    const id = ref(route.params.id?.toString() ?? -1)

    API.fetchOneVideo(id.value).then(({ data }) => {
      video.value = data
    })
    .catch((err) => {
      alert('No video found')
      console.log('An error has occured, reason ::', err)
    })

    return {
      video
    }
  }
})
</script>

<style lang="scss" scoped>
  .video-player {
    width: 100%;
    height: 300px;
    
    @media screen and (min-width: 800px) {
      height: 700px;
    }
  }
</style>