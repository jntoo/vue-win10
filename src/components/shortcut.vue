<template>
    <div class="shortcut" :class="{animated:!hidden, flipInX:!hidden}" @click="clickShortCut">
        <i :class="short.iconClass" class="icon" v-if="short.iconClass" :style="short.iconStyle"></i>
        <img class="icon" :src="formatImage(short.icon)" v-if="short.icon" :style="short.iconStyle" />
        <div class="title" v-text="short.title"></div>
    </div>
</template>

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
            formatImage(src){
                return  win10Config.baseUrl+src;
            },
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