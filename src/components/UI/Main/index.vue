<script setup>
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
      <div class="col-12 col-md-8  col-xl-9">

        <UIMainFeed :error="props.error" :isError="props.isError" :isLoading="props.isLoading" :title="props.title">
          <TransitionGroup>
            <slot></slot>
          </TransitionGroup>
        </UIMainFeed>

      </div>
      <div class="col-12 col-md-4  col-xl-3">

        <UIMainAside />

      </div>
    </div>

  </main>
</template>