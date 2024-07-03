import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName "home" */ '@/views/Home.vue')
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: () => import(/* webpackChunkName "contact" */ '@/views/Contact.vue')
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import(/* webpackChunkName "post" */ '@/views/Post.vue')
  },
  {
    path: '/categorias',
    name: 'Categories',
    component: () => import(/* webpackChunkName "categories" */ '@/views/Categories.vue')
  },
  {
    path: '/:id',
    name: 'Category',
    component: () => import(/* webpackChunkName "category" */ '@/views/Category.vue')
  },
  {
    path: '/:pathMacth(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName "not-found" */ '@/views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router