<script setup>
import { defineProps } from "vue"
import UIMainAside from "@/components/UI/Main/Aside/index.vue"
import UIMainFeed from "@/components/UI/Main/Feed.vue"

const props = defineProps({
  error: {
    type: String,
    default: ""
  },
  isError: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  },
})
</script>

<template>
  <main class="container">

    <div class="row">
      <div class="col-12 col-md-9">

        <UIMainFeed  :error="Error" :isError="isError" :isLoading="isLoading" title="Categoría">
          <slot></slot>
        </UIMainFeed>

      </div>
      <div class="col-12 col-md-3">

        <UIMainAside />

      </div>
    </div>

  </main>
</template>