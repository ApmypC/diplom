<template>
  <div>
    <h2>Мой профиль</h2>
    <div class="my-profile-data">
      <table>
        <tr>
          <td class="td-left">Email:</td>
          <td>proba228@yandex.ru</td>
        </tr>
        <tr>
          <td class="td-left">Имя пользователя:</td>
          <td>Proba</td>
        </tr>
        <tr>
          <td class="td-left">Телефон:</td>
          <td><input placeholder="введите номер телефона" /></td>
        </tr>
        <tr>
          <td class="td-left">ФИО:</td>
          <td><input placeholder="введите ФИО" /></td>
        </tr>
        <tr>
          <td class="td-left">Пароль:</td>
          <td><input placeholder="изменить пароль" /></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.my-profile-data td {
  padding-bottom: 1rem;
  padding-left: 1rem;
}
.td-left{
  text-align: right;
}
input {
  border: 0;
  padding: 10px;
}
table{
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>
