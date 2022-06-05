<script setup>
const basket = [
  {
    id: 0,
    name: 'Garry Potter',
    category: 'Futbolka',
    size: 'S(42-44)',
    color:
      'https://top-fon.com/uploads/posts/2021-07/1626944095_1-p-yarko-krasnii-odnotonnii-fon-yarko-krasnii-2.jpg',
    img: 'https://all-t-shirts.ru/goods_images/ru129137I100035a4d1a2c16e66905d3d50c3292714fc.jpg',
  },
  {
    id: 1,
    name: 'Garry Potter',
    category: 'Futbolka',
    size: 'S(42-44)',
    color:
      'https://top-fon.com/uploads/posts/2021-07/1626944095_1-p-yarko-krasnii-odnotonnii-fon-yarko-krasnii-2.jpg',
    img: 'https://all-t-shirts.ru/goods_images/ru129137I100035a4d1a2c16e66905d3d50c3292714fc.jpg',
  },
  {
    id: 2,
    name: 'Garry Potter',
    category: 'Futbolka',
    size: 'S(42-44)',
    color:
      'https://top-fon.com/uploads/posts/2021-07/1626944095_1-p-yarko-krasnii-odnotonnii-fon-yarko-krasnii-2.jpg',
    img: 'https://all-t-shirts.ru/goods_images/ru129137I100035a4d1a2c16e66905d3d50c3292714fc.jpg',
  },
  {
    id: 3,
    name: 'Garry Potter',
    category: 'Futbolka',
    size: 'S(42-44)',
    color:
      'https://top-fon.com/uploads/posts/2021-07/1626944095_1-p-yarko-krasnii-odnotonnii-fon-yarko-krasnii-2.jpg',
    img: 'https://all-t-shirts.ru/goods_images/ru129137I100035a4d1a2c16e66905d3d50c3292714fc.jpg',
  },
]
const quantity=1

</script>

<template>
  <div>
    <h3>Корзина</h3>
    <div class="basket">
      <div>
        <div class="baskets" v-for="showBasket in basket" :key="showBasket.id">
          <div class="product-basket">
            <a href="/product">
              <img :src="showBasket.img" width="150" height="150" alt="garry" />
            </a>
            <div>
              <p>{{ showBasket.name }}</p>
              <p>{{ showBasket.category }}</p>
              <p>{{ showBasket.size }}</p>
              <div class="color"></div>
              <br />
              <button>Удалить товар</button>
            </div>
          </div>
          <div>
            <p>1060 pyb</p>
            <div class="quantity-product">
              <button @click="quantity=quantity-1">-</button>
              <p>{{quantity}}</p>
              <button @click="quantity=quantity+1">+</button>
            </div>
          </div>
        </div>
      </div>
      <div class="result">
        <table>
          <tr>
            <td>Товары</td>
            <td>1060</td>
          </tr>
          <tr>
            <td>Скидка на товары</td>
            <td>0</td>
          </tr>
          <tr>
            <td><hr /></td>
          </tr>
          <tr>
            <td>Итого</td>
            <td>1060</td>
          </tr>
        </table>
        <button>Оформить заказ</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.baskets {
  padding-bottom: 2rem;
  display: flex;
  flex-direction: row;
  column-gap: 6rem;
}

.product-basket {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 3rem;
}
.basket {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 3rem;
  margin-top: 3rem;
}

.color {
  display: inline-block;
  background-color: red;
  width: 20px;
  height: 20px;
}

button {
  border: none;
  outline: none;
}

.result {
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #00ffff33;
}

.result button {
  background-color: var(--purple-color);
  color: var(--white-color);
  height: 40px;
  line-height: 30px;
}

.result td {
  padding-bottom: 1rem;
  padding-left: 1rem;
}
.result {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.quantity-product {
display: flex;
flex-direction: row;
justify-content: space-between;
outline: 2px solid #00ffff33;
}
</style>
