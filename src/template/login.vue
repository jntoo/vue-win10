<template>
    <div class="win10-login" id="win10-login">
        <div style="height: 10%;min-height: 120px"></div>
        <div id="win10-login-box">
            <div class="win10-login-box-square">
                <img src="/static/img/avatar.jpg" class="content"/>
            </div>
            <p style="font-size: 24px;color: white;text-align: center">APP后台管理系统</p>
            <form target="_self" method="get" action="#">
                <!--用户名-->
                <input type="text" placeholder="请输入登录名" class="login-username">
                <!--密码-->
                <input type="password" placeholder="请输入密码" class="login-password">
                <!--登陆按钮-->
                <input type="submit"  value="登录" id="btn-login" class="login-submit"/>
            </form>
        </div>
    </div>
</template>
<style type="text/less">
    #win10-login {
        background: url('/static/img/wallpapers/login.jpg') no-repeat fixed;
        right: 0;
        bottom: 0;
        background-size: 100% 100%;
        position: fixed;
        top: 0;
        left: 0;
    }
    #win10-login-box {
        width: 300px;
        overflow: hidden;
        margin: 0 auto;
    }
    .win10-login-box-square {
        width: 105px;
        margin: 0 auto;
        border-radius: 50%;
        background-color: darkgray;
        position: relative;
        overflow: hidden;
    }
    .win10-login-box-square::after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
    .win10-login-box-square .content {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    input {
        width: 90%;
        display: block;
        border: 0;
        margin: 0 auto;
        line-height: 36px;
        font-size: 20px;
        padding: 0 1em;
        border-radius: 5px;
        margin-bottom: 11px;
    }
    .login-username, .login-password {
        width: 91%;
        font-size: 13px;
        color: #999;
    }
    .login-password {
        width: calc(91% - 54px);
        -webkit-border-radius: 2px 0 0 2px;
        -moz-border-radius: 2px 0 0 2px;
        border-radius: 5px 0 0 5px;
        margin: 0px;
        float: left;
    }
    .login-submit {
        margin: 0px;
        float: left;
        -webkit-border-radius: 0 5px 5px 0;
        -moz-border-radius: 0 5px 5px 0;
        border-radius: 0 5px 5px 0;
        background-color: #009688;
        width: 54px;
        display: inline-block;
        height: 36px;
        line-height: 36px;
        padding: 0 auto;
        color: #fff;
        white-space: nowrap;
        text-align: center;
        font-size: 14px;
        border: none;
        cursor: pointer;
        opacity: .9;
        filter: alpha(opacity=90);
    }
</style>
<script>
    export default {
        name: "win10-login",
        data(){
            return {}
        },
        watch: {},
        computed: {},
        methods: {},
        created(){

        },
        mounted(){
        },
        destroyed(){
        }
    }
</script>