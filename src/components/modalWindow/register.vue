<template>
  <div class="register">
    <div class="register-header">
      <span><h1>Фондом мой дом</h1></span>
      <span>
        <button @click="$emit('closeregister')">X</button>
      </span>
    </div>
    <form action="">
      <div class="register-content">
        <h2>Регистрация</h2>
        <input v-model="message" placeholder="Введите Email" />
        <input placeholder="Введите имя пользователя" />
        <input placeholder="Введите пароль" />
        <input placeholder="Введите пароль повторно" />
      </div>
      <div class="register-footer">
        <div class="checkbox-text">
          <h6>
            <span>
              <input type="checkbox" />
            </span>
            Нажимая кнопку Регистрация, вы принимаете Условия, Политику
            использования данных и Политику в отношении файлов cookie. Вы можете
            получать от нас SMS-уведомления, отказаться от которых можно в любой
            момент
          </h6>
        </div>
        <button v-if="checkbox=true">Зарегистрироваться</button>
      </div>
    </form>
  </div>
</template>

<script>

</script>

<style scoped>

.register {
  padding: 16px;
  position: fixed;
  width: 100%;
  background-color: var(--white-color);
  display: flex;
  flex-direction: column;
}
.register-header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-header button {
  background-color: var(--main-color);
  color: var(--white-color);
  margin-left: 2rem;
}
.register-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.register-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.register-content input {
  margin-bottom: 1rem;
  width: 30%;
  height: 3rem;
}

.register-footer button {
  width: 30%;
  background-color: var(--purple-color);
  color: var(--white-color);
  height: 40px;
  line-height: 30px;
}
.checkbox-text {
  display: flex;
  flex-direction: row;
  width: 30%;
}
</style>
