<template>
  <div>
    <AppHeadline :headline="video.title" />
    <iframe class="video-player" :src="video.embed" frameborder="0" />
    <AppVideos :videos="videos" headline="Related videos" />
  </div>
</template>

<script lang="ts">
import AppHeadline from '@/components/atoms/AppHeadline.vue'
import { defineComponent, ref } from 'vue'
import API from '@/services/api'
import { useRoute } from 'vue-router'
import AppVideos from '@/components/molecules/AppVideos.vue'

export default defineComponent({
  components: { 
    AppHeadline, 
    AppVideos 
  },

  name: 'VideoPlayerView',

  setup () {
    const video = ref({})
    const videos = ref([])
    const route = useRoute()
    const id = ref(route.params.id?.toString() ?? -1)
    const page = ref(Number(route.query.page?.toString() || 1))

    //**
    // Retrieve first keyword from `keywords` prop
    // Use this to display related videos
    //**

    const relatedKeyword = ref('')

    API.fetchOneVideo(id.value).then(({ data }) => {
      if(!data) {
        console.log('Video does not exist')
      }
      video.value = data
      relatedKeyword.value = data.keywords?.split(',')[0].trim()

      // #1 - if keyword results in an empty string
      if(relatedKeyword.value.split(',').some(k => k === '')) {
        console.log('keyword is empty')
        relatedKeyword.value = data.keywords?.split(',')[1].trim()
      }

      // #2 - if keyword contains more than one keyword, split that keyword into one
      if(relatedKeyword.value.indexOf(', ') > -1) {
        console.log('keyword includes other keywords')
        relatedKeyword.value = relatedKeyword.value.split(', ')[0].trim()
      }

      // #3 - if keyword contains more than one keyword, with delimiter as an empty space, get next keyword
      if(relatedKeyword.value.includes(' ')) {
        console.log('keyword includes delimiter with empty space')
        relatedKeyword.value = relatedKeyword.value.split(' ')[0].trim()
      }

      console.log('Parsed keyword ::', relatedKeyword.value)

      // Fetch related videos
      API.fetchVideos(relatedKeyword.value, page.value).then(( { data }) => {
        videos.value = data.videos
      })
    })
    .catch((err) => {
      console.log('An error has occured, reason ::', err)
    })

    return {
      video,
      videos
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