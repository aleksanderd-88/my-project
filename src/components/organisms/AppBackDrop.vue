<template>
  <div class="back-drop mobile-only" :class="modifyClass" @click.self="$emit('hide')" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({

  name: 'AppBackDrop',

  props: {
    backDropVisible: {
      type: Boolean,
      default: false
    }
  },

  setup (props) {

    const modifyClass = computed(() => {
      return props.backDropVisible && 'back-drop--visible'
    })

    return {
      modifyClass
    }
  }
})
</script>

<style lang="scss" scoped>
  .back-drop {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#000, .6);
    opacity: 0;
    visibility: hidden;
    transition: opacity .2s, visibility .2s ease;

    &--visible {
      opacity: 1;
      visibility: visible;
    }
  }
</style>