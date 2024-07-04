<script setup>
import UIMainTitle from "@/components/UI/Main/Title.vue"

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
  <div class="">

    <UIMainTitle class="py-3 px-3">{{ props.title }}</UIMainTitle>

    <div v-if="props.isLoading" class="p-3">
      <div class="d-flex justify-content-center">
        <div class="spinner-border text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>

    <div v-else-if="props.isError" class="p-3">{{ props.error }}</div>

    <div v-else class="p-3">
      <slot></slot>
    </div>

  </div>
</template>