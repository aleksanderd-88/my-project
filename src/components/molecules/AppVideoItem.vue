<template>
  <div class="video-item">
    <img :src="imageURL" alt="Thumbnail" class="video-item__thumbnail">

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

    const imageURL = computed((): string => props.video?.default_thumb.src)
    const videoTitle = computed((): string => props.video?.title)
    const titleFormatted = firstLetterToUpper(videoTitle.value)

    return {
      imageURL,
      titleFormatted
    }
  }
})
</script>

<style lang="scss" scoped>
  .video-item {
    &__thumbnail {
      border-radius: 2px;
    }

    &__details {
      padding: .1em 0;
      font-size: .8rem;
      width: 100%;
    }
  }
</style>