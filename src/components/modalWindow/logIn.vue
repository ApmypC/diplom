<template>
  <div class="log-in">
    <div class="log-in-header">
      <span><h1>Фондом мой дом</h1></span>
      <span>
        <button @click="$emit('closeLogIn')">X</button>
      </span>
    </div>
    <form action="">
      <div class="log-in-content">
        <h2>Вход</h2>
        <input v-model="message" placeholder="Введите Email" />
        <input placeholder="Введите пароль" />
      </div>
      <div class="log-in-footer">
        <div class="checkbox-text">
          <h4>
            <span>
              <input type="checkbox"  />
            </span>
           Запомнить меня
          </h4>
        </div>
        <button>Войти</button>
      </div>
    </form>
  </div>
</template>

<script></script>

<style scoped>
.log-in {
  padding: 16px;
  position: fixed;
  width: 100%;
  background-color: var(--white-color);
  
}
.log-in-header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.log-in-header button {
  background-color: var(--main-color);
  color: var(--white-color);
  margin-left: 2rem;
}
.log-in-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.log-in-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.log-in-content input {
  margin-bottom: 1rem;
  width: 30%;
  height: 3rem;
}

.log-in-footer button {
  margin-top: 1rem;
  width: 30%;
  background-color: var(--purple-color);
  color: var(--white-color);
  height: 40px;
  line-height: 30px;
}
.checkbox-text {
  display: flex;
  flex-direction: row;
  width: 31%;
}
</style>
