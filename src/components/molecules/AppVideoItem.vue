<template>
  <div class="video-item">
    <img :src="imageURL" alt="Thumbnail" class="video-item__thumbnail" @click.self="playVideo(video.id)">

    <section class="video-item__details">
      <p class="video-item__title">
        {{ titleFormatted }}
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { firstLetterToUpper } from '@/utils/useTextFormatter'
import { useRouter } from 'vue-router'

export default defineComponent({

  name: 'AppVideoItem',

  props: {
    video: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  setup (props) {
    const router = useRouter()
    
    const imageURL = computed((): string => props.video?.default_thumb.src)
    const videoTitle = computed((): string => props.video?.title)
    const titleFormatted = firstLetterToUpper(videoTitle.value)

    const playVideo = (id: string) => {
      router.push({
        name: 'VideoPlayerView',
        params: {
          id: id.toString()
        }
      })
    }

    return {
      imageURL,
      titleFormatted,
      playVideo
    }
  }
})
</script>

<style lang="scss" scoped>
  .video-item {
    &__thumbnail {
      cursor: pointer;
      border-radius: 2px;
    }

    &__details {
      padding: .1em 0;
      font-size: .8rem;
      width: 100%;
    }
  }
</style>