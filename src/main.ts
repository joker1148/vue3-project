import { createApp } from 'vue'
import axios from 'axios'
import store from './store'
import router from './router'
import App from './App.vue'

// console.log(store.state.count)
// store.commit('add')
// console.log(store.state.count)
axios.defaults.baseURL = 'http://apis.imooc.com/api/'
axios.interceptors.request.use(config => {
  config.params = { ...config.params, icode: '898F8DC30015CE9F' }
  config.data = { ...config.data, icode: '898F8DC30015CE9F' }
  store.commit('setLoading', true)
  store.commit('setError', { status: false, message: '' })
  return config
})
// axios.get('/columns', { params: { key: 'hello' } }).then(resp => {
//   console.log(resp.data)
// })
axios.interceptors.response.use(config => {
  setTimeout(() => {
    store.commit('setLoading', false)
  }, 5000)
  return config
}, e => {
  console.log(e.response)
  const { error } = e.response.data
  console.log(error)
  store.commit('setError', { status: true, message: error })
  store.commit('setLoading', false)
  return Promise.reject(error)
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
