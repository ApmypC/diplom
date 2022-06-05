<script setup>
import { ref } from 'vue'
import { computed } from '@vue/reactivity'
const product = [
  {
    id: 0,
    img: 'https://all-t-shirts.ru/goods_images/ru129137I100035a4d1a2c16e66905d3d50c3292714fc.jpg',
  },
  {
    id: 1,
    img: 'https://all-t-shirts.ru/goods_images/ru118027I10005b72137ba06f74431754f7500c949b14.jpg',
  },
  {
    id: 2,
    img: 'https://futbolkin.printio.ru/ef0c339f546c6b5fb62dc7612ea5d54b.png',
  },
  {
    id:3,
    img:'https://all-t-shirts.ru/goods_images/ru112950I1000cb44ebf7d77889b8fc510892830b26fe.jpg'
  }
]

const show = ref(0)

const activePicture = computed(() => product.find(p => p.id == show.value).img)
</script>

<template>
  <div class="product-img">
    <div class="side-img">
      <img
        v-for="showProduct in product"
        :key="showProduct.id"
        :src="showProduct.img"
        width="60"
        height="60"
        alt="garry"
        @click="show = showProduct.id"
      />
    </div>
    <img :src="activePicture" width="400" height="400" alt="garry" />
  </div>
</template>

<style scoped>
.product-img {
  display: flex;
  justify-content: flex-start;
  /* margin-left: 2rem; */
}
</style>
