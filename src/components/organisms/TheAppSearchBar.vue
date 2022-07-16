<template>
    <div class="search-bar mobile-only">
      <main class="search-bar__content">
        <button 
            class="search-bar__search-btn"
            @click="toggleSearchForm()"
          >
          <i :class="`fa-solid ${searchFormVisible ? 'fa-xmark' : 'fa-magnifying-glass'}`"></i>
        </button>
        <TheSearchForm class="search-bar__form mobile" :class="modifyClass" :isVisible="searchFormVisible" />
      </main>
    </div>
  <AppBackDrop :backDropVisible="searchFormVisible" @hide="searchFormVisible = false" />
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import TheSearchForm from '../molecules/TheSearchForm.vue'
import AppBackDrop from './AppBackDrop.vue'

export default defineComponent({
  
  name: 'TheAppSearchBar',

  components: { TheSearchForm, AppBackDrop },

  setup () {

    const searchFormVisible = ref(false)
    const route = useRoute()

    const toggleSearchForm = () => {
      searchFormVisible.value = !searchFormVisible.value
    }

    const modifyClass = computed(() => {
      return searchFormVisible.value && 'search-bar__form--visible'
    })

    watch(() => route.params.query?.toString(), (val) => {
      if(val) {
        searchFormVisible.value = false
      }
    })

    return {
      searchFormVisible,
      toggleSearchForm,
      modifyClass
    }
  }
})
</script>

<style lang="scss" scoped>
  .search-bar {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(#000, .1);

    &__content {
      width: inherit;
      padding: 0 1em;
      display: flex;
      align-items: center;
      height: 50px;
    }

    &__search-btn {
      position: absolute;
      top: 15px;
      left: 50%;
      height: 60px;
      width: 60px;
      font-size: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 0 15px rgba(#000, .1);
      background-color: #fff;
      transform: translate(-50%, -50%);
    }

    &__form {
      position: absolute;
      top: -120px;
      left: 0;
      right: 0;
      height: 130px;
      background-color: #fff;
      transform: translateY(100%);
      opacity: 0;
      border-radius: 4px 4px 0 0;
      visibility: hidden;
      transition: opacity .2s, visibility .2s, transform .2s ease-in-out;

      &--visible {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
    }
  }
</style>