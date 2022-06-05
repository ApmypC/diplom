<template>
  <div>
    <header>
      <nav>
        <div class="nav-div">
          <h1><a href="/">Фандом мой дом</a></h1>
          <log-in
            v-if="isInfoLogInVisible"
            @closeLogIn="isInfoLogInVisible = false"
          />
          <register
            v-if="isInfoRegisterVisible"
            @closeregister="isInfoRegisterVisible = false"
          />
          <ul class="nav-ul">
            <li><a href="/">Главная</a></li>
            <li><a href="/clothes">Одежда</a></li>
            <li><a href="/different">Разное</a></li>
            <li><a href="/basket">Корзина</a></li>
            <!-- <li><a href="/myProfile">Мой профиль</a></li> -->
            <li
              class="sign-up"
              @click="isInfoRegisterVisible = !isInfoRegisterVisible"
            >
              Регистрация
            </li>
            <li @click="isInfoLogInVisible = !isInfoLogInVisible">Вход</li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import register from '../components/modalWindow/register.vue'
import logIn from '../components/modalWindow/logIn.vue'
const isInfoLogInVisible = ref(0)
const isInfoRegisterVisible = ref(0)
</script>

<style scoped>
.sign-up {
  background-color: var(--main-color);
  color: var(--white-color);
}

.nav-div {
  display: flex;
  justify-content: space-between;
}

.nav-ul {
  margin: 0;
  padding: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-ul li {
  display: inline;
  margin-right: 5px;
  padding: 0.5rem;
}

a {
  text-decoration: none;
  color: black;
}
</style>
