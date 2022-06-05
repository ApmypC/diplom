<template>
  <div class="clothes">
    <div class="movies-serials">
      <p>Выберите фильм</p>
      <select v-model="selected">
        <option v-for="movie in movies" :key="movie.name">
          {{ movie.name }}
        </option>
      </select>
      <p>Выберите сериал</p>
      <select v-model="selected">
        <option v-for="serial in serials" :key="serial.name">
          {{ serial.name }}
        </option>
      </select>
    </div>
    <div>
      <div class="clothes-category">
        <ul>
          <li>Значки</li>
          <li>Игрушки</li>
          <li>Наклейки</li>
          <li>Атрибутика</li>
          <li>Плакаты</li>
          <li>Кружки</li>
          <li>Аксесуары</li>
        </ul>
      </div>
      <div class="all-card">
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
    </div>
  </div>
</template>

<script setup>
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
]
const movies = [
  {
    name: 'Harry Potter',
  },
  {
    name: 'The Matrix',
  },
]
const serials = [
  {
    name: 'Naruto',
  },
  {
    name: 'Supernatural',
  },
]
</script>

<style scoped>
.clothes {
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.movies-serials {
  display: flex;
  flex-direction: column;
}

.movies-serials select {
  margin-bottom: 2rem;
}
.clothes-category {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.clothes-category li {
  display: inline;
  margin-right: 5px;
  padding: 1rem;
}

.card {
  text-align: center;
  padding-right: 2rem;
}
.all-card {
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
  color: black;
}
</style>
