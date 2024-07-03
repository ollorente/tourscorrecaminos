<script setup>
import { onMounted, ref } from "vue"
import UIMainCard from "@/components/UI/Main/Card/index.vue"
import UIMainCarousel from "@/components/UI/Main/Carousel/index.vue"
import UIMainFeed from "@/components/UI/Main/Feed.vue"
import usePost from "@/composables/usePost"
const { GetAllPosts } = usePost()

const Error = ref()
const isError = ref(false)
const isLoading = ref(true)
const page = ref(0)
const itemsOne = ref()
const itemsTwo = ref()
const itemsThree = ref()
const itemsFour = ref()
const itemsFive = ref()

const getOneItems = async () => {
  isLoading.value = true

  try {
    const data = await GetAllPosts({ limit: 8, page: page.value })

    itemsOne.value = data
  } catch (error) {
    isError.value = true
    Error.value = error
  } finally {
    isLoading.value = false
  }
}

const getTwoItems = async () => {
  isLoading.value = true

  try {
    const data = await GetAllPosts({ limit: 6, page: page.value })

    itemsTwo.value = data
  } catch (error) {
    isError.value = true
    Error.value = error
  } finally {
    isLoading.value = false
  }
}

const getThreeItems = async () => {
  isLoading.value = true

  try {
    const data = await GetAllPosts({ limit: 4, page: page.value })

    itemsThree.value = data
  } catch (error) {
    isError.value = true
    Error.value = error
  } finally {
    isLoading.value = false
  }
}

const getFourItems = async () => {
  isLoading.value = true

  try {
    const data = await GetAllPosts({ limit: 3, page: page.value })

    itemsFour.value = data
  } catch (error) {
    isError.value = true
    Error.value = error
  } finally {
    isLoading.value = false
  }
}

const getFiveItems = async () => {
  isLoading.value = true

  try {
    const data = await GetAllPosts({ limit: 3, page: page.value })

    itemsFive.value = data
  } catch (error) {
    isError.value = true
    Error.value = error
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getOneItems()
  getTwoItems()
  getThreeItems()
  getFourItems()
  getFiveItems()
})
</script>

<template>
  <div class="">
    <UIMainCarousel />

    <div class="my-4">
      <div class="container">

        <UIMainFeed :error="Error" :isError="isError" :isLoading="isLoading"
          title="Tour por la Sabana de Bogotá y Cundinamarca">

          <div class="row">
            <div v-for="item in itemsOne" :key="item.id" class="col-12 col-md-3">
              <UIMainCard :item="item" />
            </div>
          </div>

          <RouterLink :to="{ name: 'Category', params: { id: 'por-la-sabana' } }"
            class="text-blue fw-bold text-decoration-none">Mostrar más &gt;</RouterLink>
          <pre>{{ items }}</pre>
        </UIMainFeed>

        <UIMainFeed :error="Error" :isError="isError" :isLoading="isLoading" title="Tour por Colombia">

          <div class="row">
            <div v-for="item in itemsTwo" :key="item.id" class="col-12 col-md-4">
              <UIMainCard :item="item" />
            </div>
          </div>

          <RouterLink :to="{ name: 'Category', params: { id: 'tour-por-colombia' } }"
            class="text-blue fw-bold text-decoration-none">Mostrar más &gt;</RouterLink>
          <pre>{{ items }}</pre>
        </UIMainFeed>

        <UIMainFeed :error="Error" :isError="isError" :isLoading="isLoading" title="Tour a la carta">

          <div class="row">
            <div v-for="item in itemsThree" :key="item.id" class="col-12 col-md-3">
              <UIMainCard :item="item" />
            </div>
          </div>

          <RouterLink :to="{ name: 'Category', params: { id: 'tour-a-la-carta' } }"
            class="text-blue fw-bold text-decoration-none">Mostrar más &gt;</RouterLink>
          <pre>{{ items }}</pre>
        </UIMainFeed>

        <UIMainFeed :error="Error" :isError="isError" :isLoading="isLoading" title="Expresos">

          <div class="row">
            <div v-for="item in itemsFour" :key="item.id" class="col-12 col-md-4">
              <UIMainCard :item="item" />
            </div>
          </div>

          <RouterLink :to="{ name: 'Category', params: { id: 'expresos' } }"
            class="text-blue fw-bold text-decoration-none">Mostrar más &gt;</RouterLink>
          <pre>{{ items }}</pre>
        </UIMainFeed>

        <UIMainFeed :error="Error" :isError="isError" :isLoading="isLoading" title="Mensajería">

          <div class="row">
            <div v-for="item in itemsFive" :key="item.id" class="col-12 col-md-4">
              <UIMainCard :item="item" />
            </div>
          </div>

          <RouterLink :to="{ name: 'Category', params: { id: 'mensajeria' } }"
            class="text-blue fw-bold text-decoration-none">Mostrar más &gt;</RouterLink>
          <pre>{{ items }}</pre>
        </UIMainFeed>

      </div>
    </div>
  </div>
</template>
