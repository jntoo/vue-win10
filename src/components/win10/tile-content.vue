<template>
    <div class="tile-content" :class="type">
        <slot></slot>
    </div>
</template>

<style type="text/less">

</style>

<script>
    export default{
        name: "win10-tile-content",
        props:{
            type:String
        },
        data(){
            return {}
        },
        methods: {},
        created(){
        },
        /* 计算属性 */
        computed: {},
        /*监听变量变化*/
        watch: {},
        /*挂载元素完成后*/
        mounted(){
        },
        /*实例销毁后调用*/
        destroyed(){
        },
        /*过滤函数*/
        filters: {}
    }
</script>