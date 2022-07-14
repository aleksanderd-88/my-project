<template>
  <form class="search-form">
    <input 
      type="text" 
      ref="inputRef"
      class="search-form__text-field"
      :placeholder="`Popular searches ${ tags.map(t => t) }`"
      >
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({

  name: 'TheSearchForm',

  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },

  setup (props) {

    // Show tags in input placeholder. TODO :: Make dynamic
    const tags = ref<string[]>(['Anal', ' Bukkake', ' Facials', ' Cumshots'])
    const inputRef = ref()

    watch(() => props.isVisible, (val: boolean) => {
      if(val) {
        setTimeout(() => {
          inputRef.value.focus()
        }, 300);
      } else {
        inputRef.value.blur()
      }
    })

    return {
      tags,
      inputRef
    }
  }
})
</script>

<style lang="scss" scoped>
  .search-form {
    z-index: -1;
    padding: 1em 10px;
    background-color: #fff;

    &__text-field {
      height: 60px;
      width: 100%;
      padding: 0 20px;
      outline: none;
      border-radius: 4px;
      font-size: .9rem;
      border: none;
      border-bottom: 1px solid #eee;;
    }
  }
</style>