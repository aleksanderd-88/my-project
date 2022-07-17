<template>
  <form class="search-form" @submit.prevent="onQuerySubmit()">
    <input 
      type="text" 
      ref="inputRef"
      v-model="query"
      class="search-form__text-field"
      :placeholder="`Popular searches ${ tags.map(t => t) }`"
      >
      <section class="search-form__action-btns computer-only">
        <button type="button" class="search-form__action-btn search-form__action-btn--reset" @click="clearInput()">
          <i :class="`fa-solid ${query.length ? 'fa-xmark' : 'fa-magnifying-glass'}`"></i>
        </button>
        <button type="submit" class="search-form__action-btn search-form__action-btn--submit" v-if="query.length">
          Search
        </button>
      </section>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

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
    const query = ref('')
    const router = useRouter()

    watch(() => props.isVisible, (val: boolean) => {
      if(val) {
        setTimeout(() => {
          inputRef.value.focus()
        }, 300);
      } else {
        inputRef.value.blur()
      }
    })

    const onQuerySubmit = () => {
      if(!query.value) return
      router.push({ name: 'SearchResult', params: { query: query.value.toString() } })
      clearInput()
    }

    const clearInput = () => {
      if(query.value) {
        query.value = ''
      }
    }

    return {
      tags,
      inputRef,
      query,
      onQuerySubmit,
      clearInput
    }
  }
})
</script>

<style lang="scss" scoped>
  .search-form {
    $root: &;
    position: relative;

    &.mobile {
      z-index: -1;
      padding: 1em 10px;
      background-color: #fff;

      #{$root}__text-field {
        height: 60px;
        width: 100%;
        padding: 0 20px;
        outline: none;
        font-size: .9rem;
        border: none;
        border-bottom: 1px solid #eee;;
      }
    }

    &.computer {
      width: 100%;

      #{$root}__text-field {
        width: 100%;
        height: 45px;
        border: 1px solid #eee;
        border-radius: 45px;
        padding: 0 30px;
        outline: none;
        transition: box-shadow .2s, border-color .2s ease;

        &:focus {
          box-shadow: 2px 2px 4px rgba(#000, .1);
          border-color: #ddd;
        }
      }

      #{$root}__action-btns {
        position: absolute;
        top: 50%;
        right: 1rem;
        display: flex;
        align-items: center;
        gap: .3em;
        transform: translateY(-50%);

        i {
          color: #555;
        }
      }

      #{$root}__action-btn {
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;

        &--reset {
          font-size: 1.4em;
        }

        &--submit {
          font-size: .65em;
          text-transform: uppercase;
          letter-spacing: .04em;
          font-weight: 400;
          color: #555;
        }
      }
    }
  }
</style>