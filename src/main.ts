import { createApp } from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'

// console.log(store.state.count)
// store.commit('add')
// console.log(store.state.count)

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
