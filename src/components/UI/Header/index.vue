<script setup>
import { RouterLink } from 'vue-router';

const links = [
  { title: "A la carta", url: { name: 'Category', params: { id: 'a-la-carta' } } },
  { title: "Por Colombia", url: { name: 'Category', params: { id: 'por-colombia' } } },
  { title: "Expresos", url: { name: 'Category', params: { id: 'expresos' } } },
  { title: "Por la Sabana", url: { name: 'Category', params: { id: 'por-la-sabana' } } },
  { title: "Mensajería", url: { name: 'Category', params: { id: 'mensajeria' } } },
  { title: "Contacto", url: { name: 'Contact' } },
]
</script>

<template>
  <nav class="navbar fixed-top navbar-expand-lg text-dark" style="background: linear-gradient(to right, var(--color-blue), var(--color-green));">
    <div class="container d-flex d-md-inline-flex">
      <RouterLink class="navbar-brand text-white" :to="{ name: 'Home' }">
        <img src="/img/logo-tours-correcaminos.svg" alt="Logo Tours Correcaminos" class="w-75">
        <div class="w-75 text-sm text-end d-none d-md-block" style="font-size: 12px;"><span class=""><em>Turismo y Transporte
              Ejecutivo</em></span><span class="fw-bold ps-1">RNT: 00000</span></div>
      </RouterLink>
      <button class="navbar-toggler rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"
      aria-controls="offcanvas">
        <span class="navbar-toggler-icon text-white"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li v-for="(link, index) in links" :key="index" class="nav-item">
            <RouterLink class="nav-link text-white text-uppercase" :to="link.url" style="font-size: 12px;">{{ link.title }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title text-uppercase" id="offcanvasLabel">Tours Correcaminos</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li v-for="(link, index) in links" :key="index" class="nav-item">
          <RouterLink class="nav-link text-uppercase fw-bold" :to="link.url">{{ link.title }}</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
