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
    <UIMain :error="Error" :isError="isError" :isLoading="isLoading" title="Contacto" class="main-height">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas harum aut aliquam nisi delectus voluptate rerum beatae consectetur maxime perferendis voluptatibus doloribus ab, dignissimos numquam enim optio nobis provident ex placeat inventore nihil corrupti? Quae laudantium quas asperiores illum labore!</p>
    </UIMain>
  </div>
</template>
