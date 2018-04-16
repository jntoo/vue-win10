<template>
    <div class="shortcut" :class="{animated:!hidden, flipInX:!hidden}" @click="clickShortCut">
        <i :class="short.iconClass" class="icon" v-if="short.iconClass"></i>
        <img class="icon" :src="short.icon" v-if="short.icon" />
        <div class="title" v-text="short.title"></div>
    </div>
</template>
<style type="text/less">

</style>
<script>
    export default {
        name: "win10-shortcut",
        props:{
            hidden:{
                type:Boolean,
                default:false
            },
            short:Object
        },
        data(){
            return {
                left:0,
                top:0
            }
        },
        watch: {},
        computed: {},
        methods: {
            clickShortCut(e){
                this.$emit('click-short' , this.short);
            }
        },
        created(){
            this.$parent && this.$parent.createdShortCut(this);
        },
        mounted(){
        },
        destroyed(){
            this.$parent && this.$parent.destroyedShortCut(this);
        }
    }
</script>