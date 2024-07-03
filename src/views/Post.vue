<script setup>
import { onMounted, ref } from "vue"
import UIMain from "@/components/UI/Main/index.vue"
import usePost from "@/composables/usePost"
const { GetOnePost } = usePost()

// const ID = String(this.$router.params.id)
const Error = ref()
const isError = ref(false)
const isLoading = ref(true)
const item = ref()

const getItem = async () => {
  isLoading.value = true

  try {
    const data = await GetOnePost("1638744961028")

    item.value = data
  } catch (error) {
    isError.value = true
    Error.value = error
  } finally {
    isLoading.value = false
  }
}

onMounted(() => getItem())
</script>

<template>
  <div class="mb-4 slice-top">
    <UIMain :error="Error" :isError="isError" :isLoading="isLoading" title="Destino" class="main-height">
      <pre>{{ item }}</pre>
    </UIMain>
  </div>
</template>
