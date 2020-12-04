<template>
  <div class="home-page">
    <h2>{{biggerColumnLen}}</h2>
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50"/>
          <h2 class="font-weight-light">随心写作，自由表达111</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <uploader action="/upload" :beforeUpload="beforeUpload" @file-uploaded="onFileUploaded">
      <!-- <h2>loading</h2>
      <template #loading>
        load
      </template> -->
      <template #uploaded="i">
        <img :src="i.uploadedData.data.url" alt="" width="500">
      </template>
    </uploader>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
// import { testData } from '../testData'
import { GlobalDataProps, ResponseType, ImageProps } from '../store'
import { useStore } from 'vuex'
import ColumnList from '../components/ColumnList.vue'
import Uploader from '../components/Uploader.vue'
import createMessage from '../components/createMessage'
export default defineComponent({
  name: 'Home',
  components: {
    ColumnList,
    Uploader
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    onMounted(() => {
      store.dispatch('fetchColumns')
    })
    const list = computed(() => store.state.columns)
    const beforeUpload = (file: File) => {
      console.log(file)
      const isJPG = file.type === 'image/jpeg'
      if (!isJPG) {
        createMessage('上传的图片只能为jpg格式', 'error')
      }
      return isJPG
    }
    const onFileUploaded = (rawData: ResponseType<ImageProps>) => {
      createMessage(`上传图片ID${rawData.data._id}`, 'success')
    }
    const biggerColumnLen = computed(() => store.getters.biggerColumnLen)
    return {
      list,
      biggerColumnLen,
      Uploader,
      beforeUpload,
      onFileUploaded
    }
  }
})
</script>
