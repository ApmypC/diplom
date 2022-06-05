<template>
  <div>
    <footer>
      <hr />
      <h1><a href="/">Фандом мой дом</a></h1>
      <div class="footer-all">
        <ul class="footer-ul">
          <li><a href="/">Главная</a></li>
          <li><a href="/clothes">Одежда</a></li>
          <li><a href="/different">Разное</a></li>
          <li><a href="/basket">Корзина</a></li>
        </ul>
        <ul class="footer-link">
          <li>
            <a href="https://vk.com/idapmyp">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2111/2111828.png"
                alt="vk"
                width="20"
                height="20"
              />
            </a>
          </li>
          <li>
            <a href="https://t.me/KZN_Arthur_Petryankin">
              <img
                src="https://cdn-icons.flaticon.com/png/128/739/premium/739260.png?token=exp=1654279103~hmac=3e0ca02484034884d6954ab4920a2402"
                alt="telegram"
                width="20"
                height="20"
              />
            </a>
          </li>
          <li>
            <a href="https://chat.whatsapp.com/DVAoW8zlSOCHpn9wyDZR4P">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png"
                alt="whatsapp"
                width="20"
                height="20"
              />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>© ООО «Фандом мой дом», 2022. Все права защищены.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.footer-all {
  display: flex;
  justify-content: space-between;
}
.footer-ul {
  margin: 0;
  display: flex;
  align-items: center;
}
.footer-link {
  margin: 0;
  display: flex;
  align-items: center;
}

.footer-ul li {
  display: inline;
  margin-right: 5px;
  padding: 1rem;
}
.footer-link li {
  display: inline;
  margin-right: 5px;
  padding: 1rem;
}

a {
  text-decoration: none;
  color: black;
}
</style>
