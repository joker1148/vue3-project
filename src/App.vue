<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>
     <validate-form @form-submit="onFormSubmit">
       <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input ref="inputRef" :rules="emailRules" v-model="emailVal" placeholder="请输入邮箱地址" type="text"></validate-input>
        <!-- {{emailVal}} -->
       </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <validate-input :rules="emailRules" v-model="emailVal" placeholder="请输入密码" type="password"></validate-input>
      </div>
      <template #submit>
        <span class="btn btn-danger">Submit</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
/* eslint-disable */ 
import { defineComponent, reactive, toRefs, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'
import ValidateForm  from './components/ValidateForm.vue'
const currentUser: UserProps = {
  isLogin: true,
  name: 'leo',
  id: 1235
}
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧'
    // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 3,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 4,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  }
]
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput,
    ValidateForm
  },
  setup () {
    const inputRef = ref<any>()
    const emailVal = ref('viking@qq.com')
    const passwordVal = ref('123')
    const emailRules: RulesProp = [
      { type: 'required', message: '不能为空'},
      { type: 'email', message: 'real email'},
    ]
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const onFormSubmit = () => {
      console.log(inputRef.value.validateInput())
      console.log("1234")
    }
    const validateEmail = ()=>{
      if (emailRef.val.trim() === ''){
        emailRef.error = true
        emailRef.message = '不为空'
      } else if(!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = 'should be correct email'
      }
    }
    console.log(emailRef.error)
    // console.log(...toRefs(emailRef))
    return {
      list: testData,
      currentUser,
      emailRef,
      validateEmail,
      emailRules,
      emailVal,
      onFormSubmit,
      inputRef,
      passwordVal
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
