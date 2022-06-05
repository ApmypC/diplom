import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import components from '@/components/UI'
// import store from './vuex/store'
// import Axios from 'axios'

const app = createApp(App)

// app.use(createPinia())
// app.use(router)
// Vue.prototype.$http = Axios
// const token = localStorage.getItem('token')
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }

components.forEach(component => {
  app.component(component.name, component)
})

app.use(router).mount('#app')
