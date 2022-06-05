<template>
  <div>
    <body>
      <main>
        <div class="product-name-and-img">
          <ProductPictureVue />
          <div class="product-name">
            <h4>Мужская футболка 3D</h4>
            <h4>"Garry Potter"</h4>
            <h4>Отзывы: 4,5</h4>
            <h4>1060 Р</h4>
            <h4>Размеры:</h4>
            <div class="product-size">
              <!-- Надо поправить чтобы были в разных строчках -->
              <ul>
                <li v-for="size in sizes" :key="size.size">
                  <button class="size-button">{{ size.size }}</button>
                </li>
              </ul>
              <h4>Цвет</h4>
              <ul class="colors">
                <li v-for="color in colors" :key="color.name">
                  <img :src="color.img" width="50" height="50" alt="garry" />
                </li>
              </ul>
            </div>
            <button class="product-cart">Добавить в корзину</button>
          </div>
        </div>
        <div>
          <h3>О товаре:</h3>
          <p class="product-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            et mollitia quod consequatur doloribus quae libero voluptate
            repellendus, magni natus? Qui vel porro consequuntur similique quis
            aspernatur voluptatem, laboriosam pariatur.
          </p>
        </div>
        <div class="feedbacks">
          <hr />
          <h3>Отзывы:</h3>
          <!-- Надо поправить чтобы были в одну строку -->
          <!-- все отзывы -->
          <div class="all-feedback">
            <!-- один отзыв -->
            <div
              class="feedback"
              v-for="showProduct in feedbackImg"
              :key="showProduct.name"
            >
              <div>
                <strong>{{ showProduct.name }}</strong>
                <p>Доставка: {{ showProduct.delivery }}</p>
                <p>Размер: Соответствует</p>
                <p>Материал: Отличный</p>
                <p>Принт: Отличный</p>
                <p class="feedback-text">
                  Футболка огонь, заказал ещё шорты к ним в комплект
                </p>
              </div>
              <img
                :src="showProduct.img"
                width="100"
                height="100"
                alt="garry"
              />
            </div>
          </div>
          <div class="feedback-button">
            <button class="product-feedback-all">Ещё отзывы</button>
            <!-- покажет ещё 3 отзыва-->
            <button class="product-feedback">Оставить отзыв</button>
            <!-- откроется окно для написания отзыва-->
          </div>
        </div>
      </main>
    </body>
  </div>
</template>

<script setup>
import ProductPictureVue from '../components/product/ProductPicture.vue'

const colors = [
  {
    name: 'red',
    img: 'https://avatars.mds.yandex.net/get-zen-logos/223306/pub_5af038b07425f507298b0012_5af03a9cc71a92075eb60466/xxh',
  },
  {
    name: 'blue',
    img: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1614424384_48-p-tsvet-fona-temno-sinii-55.png',
  },
  {
    name: 'green',
    img: 'https://jooinn.com/images/green-43.jpg',
  },
]

const product = [
  {
    img: 'https://all-t-shirts.ru/goods_images/ru129137I100035a4d1a2c16e66905d3d50c3292714fc.jpg',
  },
]

const feedbackImg = [
  {
    name: 'Oleg Olegov',
    delivery: 'в срок',

    img: 'https://all-t-shirts.ru/goods_images/ru129137I100035a4d1a2c16e66905d3d50c3292714fc.jpg',
  },
  {
    name: 'Arthur Olegov',
    delivery: 'быстро',

    img: 'https://all-t-shirts.ru/goods_images/ru129137I100035a4d1a2c16e66905d3d50c3292714fc.jpg',
  },
  {
    name: 'Vadim Olegov',
    delivery: 'вовремя',

    img: 'https://all-t-shirts.ru/goods_images/ru129137I100035a4d1a2c16e66905d3d50c3292714fc.jpg',
  },
]

const sizes = [
  {
    size: 'XXL(40-42)',
  },
  {
    size: 'XX(38-40)',
  },
  {
    size: 'L(30-32)',
  },
  {
    size: 'M(32-34)',
  },
  {
    size: 'XXX(50-52)',
  },
]
</script>

<style scoped>
.product-name-and-img {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 10rem;
  margin-top: 3rem;
}

.product-name {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.product-name h4 {
  margin-bottom: 3px;
}

.product-size ul {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.product-size li {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}

.product-cart {
  margin-top: 2rem;
  background-color: var(--purple-color);
  color: var(--white-color);
  display: flex;
  justify-content: center;
  height: 50px;
  line-height: 50px;
}
.product-feedback {
  background-color: var(--purple-color);
  color: var(--white-color);
  margin-left: 4rem;
  height: 40px;
  line-height: 30px;
}

.product-feedback-all {
  border: none;
  outline: none;
}

.size-button {
  border: none;
  outline: none;
}
.feedback-button {
  margin-top: 2rem;
  margin-bottom: 10rem;
}

.all-feedback {
  display: flex;
  justify-content: space-between;
}

.feedback {
  padding-right: 5rem;
  margin-top: 2rem;
}

.feedbacks {
  margin-top: 6rem;
}

.feedback p {
  margin-bottom: 1px;
}

.feedback img {
  margin-top: 1rem;
}

.feedback-text {
  margin-top: 2rem;
}

.colors li {
  margin-bottom: 1rem;
}
</style>
