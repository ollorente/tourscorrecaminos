<script setup>
import { onMounted, ref } from "vue"
import UIMain from "@/components/UI/Main/index.vue"
import useTerm from "@/composables/useTerm"
import { RouterLink } from "vue-router";

const { GetAllTerms } = useTerm()
const Error = ref()
const isError = ref(false)
const isLoading = ref(true)
const limit = ref(10)
const page = ref(0)
const items = ref()

const getItems = async () => {
  isLoading.value = true

  try {
    const data = await GetAllTerms({ limit: limit.value, page: page.value })

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
    <UIMain :error="Error" :isError="isError" :isLoading="isLoading" title="Categorías" class="main-height">
      <RouterLink v-for="item in items" :key="item.id" :to="{ name: 'Category', params: { id: item.slug } }"
        type="button" class="btn bg-blue text-white position-relative m-2">
        {{ item.name }}
      </RouterLink>
    </UIMain>
  </div>
</template>
