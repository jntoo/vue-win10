<template>
    <div class="" v-html="timer" id="win10_btn_time">
    </div>
</template>
<style type="text/less">

</style>
<script>
    export default {
        name: "win10-timer",
        data(){
            return {
                timer:''
            }
        },
        watch: {},
        computed: {},
        methods: {},
        created(){
            setInterval(()=>{
                var myDate = new Date();
                var year=myDate.getFullYear();
                var month=myDate.getMonth()+1;
                var date=myDate.getDate();
                var hours=myDate.getHours();
                var mins=myDate.getMinutes();if (mins<10){mins='0'+mins}
                this.timer = hours+':'+mins+'<br/>'+year+'/'+month+'/'+date;
            },1000);
        },
        mounted(){
        },
        destroyed(){
        }
    }
</script>