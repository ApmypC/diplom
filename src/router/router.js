import { createRouter, createWebHistory } from 'vue-router'
import { ref, computed } from 'vue'
import MainVue from '../views/Main.vue'
import ProductVue from '../views/Product.vue'
import BasketVue from '../views/Basket.vue'
import ClothesVue from '../views/Clothes.vue'
import DifferentVue from '../views/Different.vue'
import MyProfileVue from '../views/MyProfile.vue'

const routes = [
  {
    path: '/',
    component: MainVue,
  },
  {
    path: '/product',
    component: ProductVue,
  },
  {
    path: '/basket',
    component: BasketVue,
  },
  {
    path: '/clothes',
    component: ClothesVue,
  },
  {
    path: '/different',
    component: DifferentVue,
  },
  {
    path:'/myProfile',
    component: MyProfileVue
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})

export default router
