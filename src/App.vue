<template>
  <div class="app">
    <HeaderVue />
    <router-view></router-view>
    <FooterVue />
  </div>
</template>

<script setup>
import HeaderVue from './components/Header.vue';
import FooterVue from './components/Footer.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

:root {
  --main-color: rgb(0, 0, 0);
  --white-color: rgb(255, 255, 255);
  --purple-color: rgb(119, 33, 228);
}

html {
  font-family: 'Montserrat';
}

body {
  padding: 1rem 3rem;
}

h1,
h2,
h4 {
  color: var(--main-color);
}

</style>
