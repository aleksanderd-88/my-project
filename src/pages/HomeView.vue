<template>
  <div>
    <AppHeadline headline="Popular videos" />
    <AppVideos :videos="videos" />
  </div>
</template>

<script lang="ts">
import AppHeadline from '@/components/atoms/AppHeadline.vue'
import AppVideos from '@/components/molecules/AppVideos.vue'
import { defineComponent, ref, watch } from 'vue'
import API from '@/services/api'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({

  name: 'HomeView',

  components: {
    AppHeadline,
    AppVideos
  },

  setup () {
    const videos = ref([])
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    // Set query string
    const query = ref(route.params.query?.toString() || 'blowjob')
    const page = ref(Number(route.query.page?.toString()) || 1)

    // get videos
    API.fetchVideos(query.value, page.value).then(({ data }) => {
      videos.value = data.videos
      store.dispatch('videos/setResultData', data)
    })

    watch(() => page.value, (val) => {
      if(val) {
        router.push({ name: route.name?.toString(), query: { page: page.value.toString() } })
      } else {
        return
      }
    })

    return {
      videos
    }
  }
})
</script>

<style scoped>

</style>