<script setup></script>

<template>
  <div id="carouselIndicators" class="carousel slide slice-top-home">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="3"
        aria-label="Slide 4"></button>
    </div>
    <div class="carousel-inner" style="height: 400px;">
      <div class="carousel-item active">
        <img src="/img/kitchen_adventurer_caramel.jpg" class="d-block w-100 aspect-video object-fit-cover" alt="Foto 1">
      </div>
      <div class="carousel-item">
        <img src="/img/kitchen_adventurer_cheesecake_brownie.jpg" class="d-block w-100 aspect-video object-fit-cover" alt="Foto 2">
      </div>
      <div class="carousel-item">
        <img src="/img/kitchen_adventurer_donut.jpg" class="d-block w-100 aspect-video object-fit-cover" alt="Foto 3">
      </div>
      <div class="carousel-item">
        <img src="/img/kitchen_adventurer_lemon.jpg" class="d-block w-100 aspect-video object-fit-cover" alt="Foto 4">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>