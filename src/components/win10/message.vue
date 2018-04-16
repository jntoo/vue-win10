<template>
    <div class="win10-message msg" @click="clickMsg">
        <div class="title">{{ title }}</div>
        <div class="content" v-html="content"></div>
        <span class="btn_close_msg fa fa-close" @click.stop.prevent="closeMessage"></span>
    </div>
</template>
<style type="text/less">

</style>
<script>
    export default {
        name: "win10-message",
        props:{
            title:String,
            content:String
        },
        data(){
            return {}
        },
        watch: {},
        computed: {},
        methods: {
            closeMessage:function (e) {
                this.$emit('closeMsg' , e);
            },
            clickMsg:function (e) {
                this.$emit('clickMsg' , e);
            }
        },
        created(){

        },
        mounted(){
        },
        destroyed(){
        }
    }
</script>