<template>
    <div>
        
    </div>
</template>

<script lang="ts">
import { defineComponent,PropType } from "vue";
export interface ColumnProps {
    id: number;
    title: string;
    avatar: string;
    description:string
}
export default defineComponent ({
    name:'ColumnList',
    props:{
        list:{
            type:Array as PropType<ColumnProps[]>, //将array的构造函数返回传入的泛型类型
            required:true
        }
    },
    setup(props){
        props.list[0].
    }
})
</script>