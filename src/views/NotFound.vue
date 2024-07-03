<script setup>
import { onMounted, ref } from "vue"
import UIMain from "@/components/UI/Main/index.vue"
const Error = ref()
const isError = ref(false)
const isLoading = ref(false)
</script>

<template>
  <div class="mb-4 slice-top">
    <UIMain :error="Error" :isError="isError" :isLoading="isLoading" title="¡Página no encontrada!" class="main-height">
      <p>
        <RouterLink :to="{ name: 'Home' }" class="">Home</RouterLink>
      </p>
    </UIMain>
  </div>
</template>
