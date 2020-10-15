<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
/* eslint-disable */ 
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
export const emitter = mitt()
export default defineComponent({
  emits:['form-submit'],
  setup(props,context){
    const submitForm = () => {
      context.emit('form-submit',true)
    }
    const callbcak = (test:any) => {
      console.log(test)
    }
    emitter.on('form-item-created', callbcak)
    onUnmounted(() => {
      emitter.off('form-item-created', callbcak)
    })
    return {
      submitForm,
      callbcak
    }
  }
})
</script>
