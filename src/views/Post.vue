<script setup>
import { onMounted, ref } from "vue"
import { useRoute } from 'vue-router'
import UIMain from "@/components/UI/Main/index.vue"
import usePost from "@/composables/usePost"
const { GetOnePost } = usePost()

const ID = String(useRoute().params.id)
const Error = ref()
const isError = ref(false)
const isLoading = ref(true)
const item = ref()

const getItem = async () => {
  isLoading.value = true

  try {
    const data = await GetOnePost(ID)

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
      <Transition v-if="item">
        <div class="">
          <h1 class="h2 fw-semibold mb-3">{{ item.title }}</h1>
          <div class="ratio ratio-16x9 mb-3">
            <img :src="item.mime_type ? item.mime_type : './img/no-item-found-flat-concept-vector.jpg'"
              class="w-100 h-100 object-fit-cover" :alt="item.title">
          </div>
          <div class="py-1">{{ item.excerpt }}</div>
          <div class="py-1" v-html="item.content"></div>
        </div>
      </Transition>
      <pre hidden>{{ item }}</pre>
    </UIMain>
  </div>
</template>
