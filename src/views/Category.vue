<script setup>
import { onMounted, ref } from "vue"
import UIMain from "@/components/UI/Main/index.vue"
import UIMainCard from "@/components/UI/Main/Card/index.vue"
import usePost from "@/composables/usePost"
const { GetAllPosts } = usePost()

const Error = ref()
const isError = ref(false)
const isLoading = ref(true)
const limit = ref(10)
const page = ref(0)
const items = ref()

const getItems = async () => {
  isLoading.value = true

  try {
    const data = await GetAllPosts({ limit: limit.value, page: page.value })

    items.value = data
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
      <div class="row">
        <div v-for="item in items" :key="item.id" class="col-12 col-md-6">
          <UIMainCard :item="item" />
        </div>
      </div>
    </UIMain>
  </div>
</template>
