<template>
  <div>
    <router-link to="/product"></router-link>
    <body>
      <main>
        <div v-for="image in carusel" :key="image.img">
          <img
            class="main-carusel"
            :src="image.img"
            width="100"
            height="300"
            alt="berserk"
          />
          <!-- будут картинки с возможность листать, чтобы перейти дальше нужно нажать на картинку -->

          <!-- <div class="bottom-left">
        <h3 >Данный сайт сделал при помощи великого гуру кода по имени Гадель</h3>
      </div> -->
        </div>
        <h2>Популярное</h2>
        <div  class="all-card">
          <!-- обще все карточки -->
          <div class="card" v-for="product in popular" :key="product.name">
            <!-- одна карточка -->
            <a href="/product">
              <img :src="product.img" width="255" height="255" alt="garry" />
              <div class="card-text">
                <p>{{ product.category }}</p>
                <h4>{{ product.name }}</h4>
                <p>{{ product.price }} рублей</p>
              </div>
            </a>
          </div>
        </div>
        <h2>Новинки</h2>
        <div class="all-card">
          <!-- обще все карточки -->
          <div class="card" v-for="product in newProduct" :key="product.name">
            <a href="/product">
              <!-- одна карточка -->
              <img :src="product.img" width="255" height="255" alt="garry" />
              <div class="card-text">
                <p>{{ product.category }}</p>
                <h4>{{ product.name }}</h4>
                <p>{{ product.price }} рублей</p>
              </div>
            </a>
          </div>
        </div>
      </main>
    </body>
  </div>
</template>

<script setup>
const popular = [
  {
    name: 'Гарри Поттер',
    img: 'https://all-t-shirts.ru/goods_images/ru129137I100035a4d1a2c16e66905d3d50c3292714fc.jpg',
    category: 'футболка',
    price: 1060,
  },

  {
    name: 'Гарри Поттер',
    img: 'https://all-t-shirts.ru/goods_images/ru129137I100035a4d1a2c16e66905d3d50c3292714fc.jpg',
    category: 'футболка',
    price: 1060,
  },
  {
    name: 'Гарри Поттер',
    img: 'https://all-t-shirts.ru/goods_images/ru129137I100035a4d1a2c16e66905d3d50c3292714fc.jpg',
    category: 'футболка',
    price: 1000,
  },
  {
    name: 'Гарри Поттер',
    img: 'https://all-t-shirts.ru/goods_images/ru129137I100035a4d1a2c16e66905d3d50c3292714fc.jpg',
    category: 'футболка',
    price: 1070,
  },
]
const newProduct = [
  {
    name: 'Мадара',
    img: 'https://storage.vsemayki.ru/images/0/2/2841/2841305/previews/people_11_child_tshirt_front_white_500.jpg',
    category: 'Футболка',
    price: 1003,
  },
  {
    name: 'Мадара',
    img: 'https://storage.vsemayki.ru/images/0/2/2841/2841305/previews/people_11_child_tshirt_front_white_500.jpg',
    category: 'Футболка',
    price: 1003,
  },
  {
    name: 'Мадара',
    img: 'https://storage.vsemayki.ru/images/0/2/2841/2841305/previews/people_11_child_tshirt_front_white_500.jpg',
    category: 'Футболка',
    price: 1003,
  },
  {
    name: 'Мадара',
    img: 'https://storage.vsemayki.ru/images/0/2/2841/2841305/previews/people_11_child_tshirt_front_white_500.jpg',
    category: 'Футболка',
    price: 1003,
  },
]

const carusel = [
  {
    img: 'https://wallpaperscave.ru/images/original/18/04-21/anime-berserk-43468.jpg',
  },
]
</script>

<style scoped>
.card {
  text-align: center;
}

a {
  text-decoration: none;
  color: black;
}

.all-card {
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
}

.main-carusel {
  width: 100%;
  /* height: 100%; */
  object-fit: cover;
}

.side-img {
  display: flex;
  flex-direction: column;
}
</style>
