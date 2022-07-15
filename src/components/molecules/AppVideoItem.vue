<template>
  <div class="video-item">
    <img :src="imageURL" alt="Thumbnail" class="video-item__thumbnail">
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

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

    return {
      imageURL
    }
  }
})
</script>

<style lang="scss" scoped>
  .video-item {
    &__thumbnail {
      border-radius: 2px;
    }
  }
</style>