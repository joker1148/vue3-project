<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <!-- <h1 v-if="isLoading">正在读取</h1> -->
    <!-- <h1>{{error.message}}</h1> -->
    <loader v-if="isLoading" text="loading" background="rgba(0,0,0,0.8)"></loader>
    <!-- <message type="error" :message="error.message" v-if="error.status"></message> -->
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2020者也专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader from './components/GlobalHeader.vue'
import { GlobalDataProps } from './store'
import Loader from './components/Loader.vue'
import createMessage from './components/createMessage'
// import Message from './components/Message.vue'

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Loader
  },
  setup () {
    console.log('begin')
    const store = useStore<GlobalDataProps>()
    const isLoading = computed(() => store.state.loading)
    const currentUser = computed(() => store.state.user)
    // const token = computed(() => store.state.token)
    const error = computed(() => store.state.error)
    // onMounted(() => {
    //   if (!currentUser.value.isLogin && token.value) {
    //     axios.defaults.headers.common.Authorization = `Bearer ${token.value}`
    //     store.dispatch('fetchCurrentUser')
    //   }
    // })
    watch(() => error.value.status, () => {
      const { status, message } = error.value
      if (status && message) {
        createMessage(message, 'error')
      }
    })
    return {
      currentUser,
      isLoading,
      error
    }
  }
})
</script>

<style>

</style>
