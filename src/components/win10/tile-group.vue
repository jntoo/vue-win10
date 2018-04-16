<template>
    <div class="tile-group" :class="{'one':width==1,'two':width==2,three:width==3}">
        <slot></slot>
    </div>
</template>

<style type="text/less">

</style>

<script>
    export default{
        name: "win10-tile-group",
        props:{
            width:{
                type:[Number,String],
                default:2
            }
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