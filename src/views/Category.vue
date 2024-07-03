<script setup>
import { onMounted, ref } from "vue"
import UIMain from "@/components/UI/Main/index.vue"

const Error = ref()
const isError = ref(false)
const isLoading = ref(true)
const items = ref()

const getItems = async () => {
  isLoading.value = true

  try {
    items.value = []
  } catch (error) {
    isError.value = true
    Error.value = error    
  } finally {
    isLoading.value = false
  }
}

onMounted(() => getItems())
</script>

<template>
  <div class="mb-4 slice-top">
    <UIMain :error="Error" :isError="isError" :isLoading="isLoading" title="Categoría" class="main-height">
      <pre>{{ items }}</pre>
    </UIMain>
  </div>
</template>
