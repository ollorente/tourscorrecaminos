import { createRouter, createWebHashHistory } from 'vue-router'

const BASE_URL_TITLE = '© Tours Correcaminos'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName "home" */ '@/views/Home.vue'),
    meta: {
      title: `Home ${BASE_URL_TITLE}`
    }
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: () => import(/* webpackChunkName "contact" */ '@/views/Contact.vue'),
    meta: {
      title: `Contacto ${BASE_URL_TITLE}`
    }
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import(/* webpackChunkName "post" */ '@/views/Post.vue'),
    meta: {
      title: `Destino ${BASE_URL_TITLE}`
    }
  },
  {
    path: '/categorias',
    name: 'Categories',
    component: () => import(/* webpackChunkName "categories" */ '@/views/Categories.vue'),
    meta: {
      title: `Categorías ${BASE_URL_TITLE}`
    }
  },
  {
    path: '/:id',
    name: 'Category',
    component: () => import(/* webpackChunkName "category" */ '@/views/Category.vue'),
    meta: {
      title: `Categoría ${BASE_URL_TITLE}`
    }
  },
  {
    path: '/:pathMacth(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName "not-found" */ '@/views/NotFound.vue'),
    meta: {
      title: `Página no encontrada ${BASE_URL_TITLE}`
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router