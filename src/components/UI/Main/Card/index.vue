<script setup>
defineProps(["item"])
</script>

<template>
  <RouterLink :to="{ name: 'Post', params: { id: item.id } }" class="text-decoration-none">
    <div class="card text-dark border-0 mb-4">
      <div class="ratio ratio-4x3">
        <img :src="item.mime_type ? item.mime_type : './img/no-item-found-flat-concept-vector.jpg'"
          class="w-100 h-100 object-fit-cover" :alt="item.title">
      </div>
      <div class="card-body px-0">
        <h5 class="card-title h6 fw-bold">{{ item.title }}</h5>
        <p class="card-text">{{ item.excerpt }}</p>
        <p class="p-0 h6 gap-1">
          <span class="text-blue">&#9733;</span>
          <span class="text-blue">&#9733;</span>
          <span class="text-blue">&#9733;</span>
          <span class="text-secondary">&#9733;</span>
          <span class="text-secondary">&#9733;</span>
          <span class="ms-1">67 - Valoraciones</span>
        </p>
      </div>
    </div>
  </RouterLink>
</template>