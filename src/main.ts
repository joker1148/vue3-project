import { createApp } from 'vue'
import axios from 'axios'
import store from './store'
import router from './router'
import App from './App.vue'

// console.log(store.state.count)
// store.commit('add')
// console.log(store.state.count)
axios.get('http://api.vikingship.xyz/api/columns').then(resp => {
  console.log(resp)
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
