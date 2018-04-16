<template>
    <div style="height: 100%">
        <transition name="slide-fade">
            <router-view v-show="!isLoadView"></router-view>
        </transition>
        <div class="spinner" v-show="isLoadView">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
        </div>
    </div>
</template>
<style>
    .slide-fade-enter-active {
        transition: all .1s ease;
    }
    .slide-fade-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
    html,body{
        background: #ffffff;
    }
</style>

<script>
    export default {
        name: 'app',
        data(){
            return {
                isLoadView:true
            }
        },
        mounted(){
            this.isLoadView = false;
        }
    }
</script>


