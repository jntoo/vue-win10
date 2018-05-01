<template>
    <div class="win10-full" @click="resetXiaoguo">
        <div id="win10" :style="{'backgroundImage':'url('+backgroundImage+')'}">
            <div class="desktop">
                <div id="win10-shortcuts" class="" ref="win10-shortcuts">
                    <Shortcut :hidden="hiddenShortcut" v-for="short in shortCuts" v-on:click-short="clickShortCut" :short="short"  :style="{top:short.top+'px',left:short.left+'px'}"></Shortcut>
                </div>
                <div id="win10-desktop-scene"></div>
            </div>
            <div id="win10-menu" :class="{hidden:hiddenWin10Menu}" @click.stop.prevent>
                <div class="list win10-menu-hidden animated animated-slideOutLeft">
                    <template v-for="v in win10Menu">
                        <div class="item" :class="{'has-sub-down':!v.open&&v.child,'has-sub-up':v.open&&v.child}" @click="clickMenu(v)">
                            <img class="icon" :src="v.icon" v-if="v.icon" />
                            <i :class="v.iconClass" v-if="v.iconClass"></i>
                            <span v-text="v.name"></span>
                        </div>
                        <template v-if="v.child && v.child.length>0" v-for="c in v.child">
                            <transition name="fade">
                                <div class="sub-item" v-show="v.open">
                                    <img class="icon" :src="c.icon" v-if="c.icon" />
                                    <i :class="c.iconClass" v-if="c.iconClass"></i>
                                    <span v-text="c.name"></span>
                                </div>
                            </transition>
                        </template>
                    </template>
                </div>
                <div class="blocks">
                    <!--
                    <win10-tile-area class="tile-area-scheme-dark">
                        <win10-tile-group width="2">
                            <win10-tile-title>General</win10-tile-title>
                            <win10-tile-container>
                                <win10-tile class="bg-indigo fg-white">
                                    <win10-tile-content type="iconic">
                                        <span class="icon fa fa-plus "></span>
                                    </win10-tile-content>
                                    <win10-tile-label>Calendar</win10-tile-label>
                                </win10-tile>
                                <win10-tile>
                                    <win10-tile-content type="iconic">
                                        <i class="fa fa-pencil-square-o"></i>
                                    </win10-tile-content>
                                    <win10-tile-label>Inbox</win10-tile-label>
                                </win10-tile>

                                <win10-tile size="large">
                                    <win10-tile-content type="iconic">
                                        <div class="padding10" id="weather_bg">
                                            <h1 id="weather_icon" style="font-size: 6em;position: absolute; top: 10px; right: 10px;"></h1>
                                            <h1 id="city_temp"></h1>
                                            <h2 id="city_name" class="text-light"></h2>
                                            <h4 id="city_weather"></h4>
                                            <p id="city_weather_daily"></p>
                                            <p class="no-margin text-shadow">Pressure: <span class="text-bold" id="pressure"></span> mm</p>
                                            <p class="no-margin text-shadow">Ozone: <span class="text-bold" id="ozone"></span></p>
                                            <p class="no-margin text-shadow">Wind bearing: <span class="text-bold" id="wind_bearing"></span></p>
                                            <p class="no-margin text-shadow">Wind speed: <span class="text-bold" id="wind_speed">0</span> m/s</p>
                                        </div>
                                    </win10-tile-content>
                                    <win10-tile-label>Weather</win10-tile-label>
                                </win10-tile>
                            </win10-tile-container>
                        </win10-tile-group>
                        <win10-tile-group width="2">
                            <win10-tile-title>Images</win10-tile-title>
                            <win10-tile-container>
                                <win10-tile size="wide">
                                    <win10-tile-content type="slideLeft">
                                        <a href="http://google.com/search?q=bear" class="live-slide"><img src="/static/images/1.jpg" data-role="fitImage" data-format="fill"></a>
                                        <a href="http://google.com/search?q=cat" class="live-slide"><img src="/static/images/2.jpg" data-role="fitImage" data-format="fill"></a>
                                        <a href="http://google.com/search?q=dog" class="live-slide"><img src="/static/images/3.jpg" data-role="fitImage" data-format="fill"></a>
                                        <a href="http://google.com/search?q=eagle" class="live-slide"><img src="/static/images/4.jpg" data-role="fitImage" data-format="fill"></a>
                                        <a href="http://google.com/search?q=fox" class="live-slide"><img src="/static/images/5.jpg" data-role="fitImage" data-format="fill"></a>
                                    </win10-tile-content>
                                    <win10-tile-label>Gallery</win10-tile-label>
                                </win10-tile>
                                <win10-tile>
                                    <win10-tile-content type="slideUpDown">
                                        <div class="live-slide"><img src="/static/images/me.jpg" data-role="fitImage" data-format="fill"></div>
                                        <div class="live-slide"><img src="/static/images/spface.jpg" data-role="fitImage" data-format="fill"></div>
                                    </win10-tile-content>
                                    <win10-tile-label>Photos</win10-tile-label>
                                </win10-tile>
                                <win10-tile size="small">
                                    <win10-tile-content type="iconic">
                                        <i class="icon fa fa-video-camera"></i>
                                    </win10-tile-content>
                                </win10-tile>
                                <win10-tile size="small">
                                    <win10-tile-content type="iconic">
                                        <i class="icon fa fa-gamepad"></i>
                                    </win10-tile-content>
                                </win10-tile>
                                <win10-tile size="small">
                                    <win10-tile-content type="iconic">
                                        <i class=" fa fa-headphones"></i>
                                    </win10-tile-content>
                                    <win10-tile-label>gamepad</win10-tile-label>
                                </win10-tile>
                                <win10-tile size="small">
                                    <win10-tile-content type="iconic">
                                        <i class=" fa fa-lock"></i>
                                    </win10-tile-content>
                                    <win10-tile-label>headphones</win10-tile-label>
                                </win10-tile>
                                <win10-tile size="wide">
                                    <win10-tile-content type="image-set">
                                        <img src="/static/images/jeki_chan.jpg">
                                        <img src="/static/images/shvarcenegger.jpg">
                                        <img src="/static/images/vin_d.jpg">
                                        <img src="/static/images/jolie.jpg">
                                        <img src="/static/images/jek_vorobey.jpg">
                                    </win10-tile-content>
                                </win10-tile>
                            </win10-tile-container>
                        </win10-tile-group>
                        <win10-tile-group>
                            <win10-tile-title>Office</win10-tile-title>
                            <win10-tile size="small">
                                <win10-tile-content type="iconic">
                                    <img src="/static/images/outlook.png" class="icon">
                                </win10-tile-content>
                            </win10-tile>
                            <win10-tile size="small">
                                <win10-tile-content type="iconic">
                                    <img src="/static/images/word.png" class="icon">
                                </win10-tile-content>
                            </win10-tile>
                            <win10-tile size="small">
                                <win10-tile-content type="iconic">
                                    <img src="/static/images/excel.png" class="icon">
                                </win10-tile-content>
                            </win10-tile>
                            <win10-tile size="small">
                                <win10-tile-content type="iconic">
                                    <img src="/static/images/access.png" class="icon">
                                </win10-tile-content>
                            </win10-tile>
                            <win10-tile size="small">
                                <win10-tile-content type="iconic">
                                    <img src="/static/images/powerpoint.png" class="icon">
                                </win10-tile-content>
                            </win10-tile>
                        </win10-tile-group>
                        <win10-tile-group>
                            <win10-tile-title>Games</win10-tile-title>
                            <win10-tile-container>
                                <win10-tile class="bg-">
                                    <win10-tile-content>
                                        <img src="/static/images/grid2.jpg" data-role="fitImage" data-format="square">
                                    </win10-tile-content>
                                </win10-tile>
                                <win10-tile size="small">
                                    <win10-tile-content>
                                        <img src="/static/images/Battlefield_4_Icon.png" data-role="fitImage" data-format="square" data-frame-color="bg-steel">
                                    </win10-tile-content>
                                </win10-tile>
                                <win10-tile size="small">
                                    <win10-tile-content>
                                        <img src="/static/images/Crysis-2-icon.png" data-role="fitImage" data-format="square" data-frame-color="bg-steel">
                                    </win10-tile-content>
                                </win10-tile>
                                <win10-tile size="small">
                                    <win10-tile-content>
                                        <img src="/static/images/WorldofTanks.png" data-role="fitImage" data-format="square" data-frame-color="bg-steel">
                                    </win10-tile-content>
                                </win10-tile>
                                <win10-tile size="small">
                                    <win10-tile-content>
                                        <img src="/static/images/halo.png" data-role="fitImage" data-format="square">
                                    </win10-tile-content>
                                </win10-tile>
                                <win10-tile size="wide">
                                    <win10-tile-content type="iconic">
                                        <img src="/static/images/x-box.png" data-role="fitImage" data-format="square">
                                    </win10-tile-content>
                                    <win10-tile-label>X-Box Live</win10-tile-label>
                                </win10-tile>
                            </win10-tile-container>
                        </win10-tile-group>
                    </win10-tile-area>
                    -->
                </div>
                <div id="win10-menu-switcher"></div>
            </div>
            <div id="win10_command_center" v-bind:class="{ 'hidden-command-center':openCommandCenter===false }" @click.stop.prevent>
                <div class="title">
                    <h4 style="float: left">消息中心 </h4>
                    <span id="win10_btn_command_center_clean_all" @click="messageList=[]">全部清除</span>
                </div>
                <div class="msgs">
                    <!-- 消息列表 -->
                    <win10-message v-for="m in messageList" :title="m.title" :content="m.content" @clickMsg="clickCommandMsg(m)" @closeMsg="$remove(messageList,m)"></win10-message>
                </div>
            </div>
            <div id="win10_task_bar">
                <div id="win10_btn_group_left" class="btn_group">
                    <div id="win10_btn_win" class="btn" @click.stop.prevent="hiddenWin10Menu=!hiddenWin10Menu"><span class="fa fa-windows"></span></div>
                    <div class="btn" id="win10-btn-browser"><span class="fa fa-internet-explorer"></span></div>
                </div>
                <div id="win10_btn_group_middle" class="btn_group">
                    <div id="win10_1" v-for="bar in taskBar" @click="clickTaskBar(bar)" :key="bar.index" index="1" class="btn" :class="{show:bar.show,active:bar.index==taskBarActove}" style="width: calc(50% - 1px);">
                        <div class="btn_title">
                            <i class="icon purple" v-if="bar.iconClass" :class="bar.iconClass"></i>
                            <img class="icon" :src="bar.icon" v-if="bar.icon">
                            {{ bar.title }}
                        </div>
                        <div class="btn_close fa fa-close" @click.prevent.stop="closeWin(bar.index)"></div>
                    </div>
                </div>
                <div id="win10_btn_group_right" class="btn_group">
                    <WinTimer class="btn"></WinTimer>
                    <div class="btn" id="win10_btn_command" @click.stop.prevent="commandCenterToggle">
                        <span id="win10-msg-nof" class="fa fa-comment-o" :class="{'fa-commenting-o':onNewMsg && newStart,'on-new-msg':onNewMsg}"></span>
                    </div>
                    <div class="btn" id="win10_btn_show_desktop"></div>
                </div>
            </div>
        </div>


        <!--
        <div class="wrapp" >
            <div class="text">
                <h1>Win 腾市</h1>
            </div>
            <div class="logo">
                <span class="top-left"></span>
                <span class="bottom-right"></span>
            </div>
        </div>
        -->
    </div>
</template>
<style>
    * {
        font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu
    }
    .win10-full{
        position: absolute;
        left: 0px;
        top:0;
        right: 0;
        bottom: 0;
    }
    #statusbar-display {display:none !important;}
    /*磁贴自定义样式*/
    .win10-block-content-text {
        line-height: 44px;
        text-align: center;
        font-size: 16px;
    }
    #win10-menu .blocks {
        max-width: 650px;
        width: calc(100% - 240px);
    }
    .fade-enter-active, .fade-leave-active {
        transition: all .5s;
    }
    .fade-enter-active{
        height: 0px;
        visibility: visible;
    }
    #win10_command_center.hidden-command-center{
        right: -350px;
    }
    .fade-enter-active.fade-enter-to{
        height: 40px;
    }
    .fade-leave-active{
        height: 40px;
    }
    .fade-leave-to{
        height: 0px;
    }
    #win10-menu .list .sub-item{
        width: auto;
    }
    #win10-menu .list .item, .sub-item{
        width: auto;
    }

    body{
         margin: 0;
         padding: 0;
     }
    .wrapp{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 600px;
        height: 300px;
        margin: -150px 0 0 -300px;
        -webkit-perspective: 30px;
        -webkit-transform: translateX(0px);
        -webkit-animation: wrapp 400ms 800ms ease-in forwards;
        -moz-perspective: 30px;
        -moz-transform: translateX(0px);
        -moz-animation: wrapp 400ms 800ms ease-in forwards;
        -ms-perspective: 30px;
        -ms-transform: translateX(0px);
        -ms-animation: wrapp 400ms 800ms ease-in forwards;
        perspective: 30px;
        transform: translateX(0px);
        animation: wrapp 400ms 800ms ease-in forwards;
    }
    .text{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0px;
        height: 60px;
        margin: -30px 0 0 -160px;
        overflow: hidden;
        -webkit-transform: translateX(0px);
        -webkit-animation: text 400ms 800ms linear forwards;
        -moz-transform: translateX(0px);
        -moz-animation: text 400ms 800ms linear forwards;
        -ms-transform: translateX(0px);
        -ms-animation: text 400ms 800ms linear forwards;
        transform: translateX(0px);
        animation: text 400ms 800ms linear forwards;
    }
    h1{
        float: right;
        font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
        font-weight: normal;
        color: #fff;
        padding: 0;
        margin: 0;
        width: 320px;
        height: 60px;
        font-size: 60px;
        line-height: 60px;
    }
    .logo{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 90px;
        height: 90px;
        margin: -45px 0 0 -45px;
        background-color: #fff;
        -webkit-transform: translateX(0px) rotateY(10deg);
        -webkit-animation: logo 500ms 300ms ease-out forwards;
        -moz-transform: translateX(0px) rotateY(10deg);
        -moz-animation: logo 500ms 300ms ease-out forwards;
        -ms-transform: translateX(0px) rotateY(10deg);
        -ms-animation: logo 500ms 300ms ease-out forwards;
        transform: translateX(0px) rotateY(10deg);
        animation: logo 500ms 300ms ease-out forwards;
    }
    .logo .top-left{
        position: absolute;
        top: 0;
        left: 0;
        width: 44px;
        height: 44px;
        border-right: solid 2px #90da15;
        border-bottom: solid 2px #90da15;
    }
    .logo .bottom-right{
        position: absolute;
        bottom: 0;
        right: 0;
        width: 44px;
        height: 44px;
        border-left: solid 2px #90da15;
        border-top: solid 2px #90da15;
    }
    @-webkit-keyframes logo {
                 from {
                     -webkit-transform: translateX(0px) rotateY(10deg);
                 }
                 to {
                     -webkit-transform: translateX(0px) rotateY(-10deg);
                 }
             }
    @-webkit-keyframes text {
        from {
            width: 0px;
            -webkit-transform: translateX(0px);
        }
        60%{
            width: 0px;
        }
        to {
            width: 320px;
            -webkit-transform: translateX(240px);
        }
    }
    @-webkit-keyframes wrapp {
        from {
            -webkit-transform: translateX(0px);
        }
        to {
            -webkit-transform: translateX(-200px);
        }
    }
    @-moz-keyframes logo {
        from {
            -moz-transform: translateX(0px) rotateY(10deg);
        }
        to {
            -moz-transform: translateX(0px) rotateY(-10deg);
        }
    }
    @-moz-keyframes text {
        from {
            width: 0px;
            -moz-transform: translateX(0px);
        }
        60%{
            width: 0px;
        }
        to {
            width: 320px;
            -moz-transform: translateX(240px);
        }
    }
    @-moz-keyframes wrapp {
        from {
            -moz-transform: translateX(0px);
        }
        to {
            -moz-transform: translateX(-200px);
        }
    }
    @-ms-keyframes logo {
                 from {
                     -ms-transform: translateX(0px) rotateY(10deg);
                 }
                 to {
                     -ms-transform: translateX(0px) rotateY(-10deg);
                 }
             }
    @-ms-keyframes text {
        from {
            width: 0px;
            -ms-transform: translateX(0px);
        }
        60%{
            width: 0px;
        }
        to {
            width: 320px;
            -ms-transform: translateX(240px);
        }
    }
    @-ms-keyframes wrapp {
        from {
            -ms-transform: translateX(0px);
        }
        to {
            -ms-transform: translateX(-200px);
        }
    }
    @keyframes logo {
        from {
            transform: translateX(0px) rotateY(10deg);
        }
        to {
            transform: translateX(0px) rotateY(-10deg);
        }
    }
    @keyframes text {
        from {
            width: 0px;
            transform: translateX(0px);
        }
        60%{
            width: 0px;
        }
        to {
            width: 320px;
            transform: translateX(240px);
        }
    }
    @keyframes wrapp {
        from {
            transform: translateX(0px);
        }
        to {
            transform: translateX(-200px);
        }
    }
</style>
<script>
    import Shortcut from './components/shortcut.vue'
    import axios from 'axios'
    import jdk from './jdk/extend'
    import WinTimer from './components/timer.vue'
    import Win10Tile from './components/win10'
    import Vue from 'vue'
    Vue.use(Win10Tile)
    var timer = null;

    window.updateSystemMemu = function () {
        // 绑定更新菜单
        Win10.updateMenu();
    }

    export default {
        name: 'App',
        data () {
            return {
                win10Menu:[
                    /*
                    {
                        "name":"API测试",
                        "iconClass":"red icon fa fa-wrench fa-fw",
                        "open":false,
                        "child":[
                            {
                                "name":"父子页沟通"
                            },
                            {
                                "name":"打开消息中心"
                            },
                            {
                                "name":"发送带回调的消息"
                            },
                            {
                                "name":"关闭菜单"
                            },
                            {
                                "name":"打开消息中心"
                            }
                        ]
                    },
                    {
                        "name":"辅助工具",
                        "iconClass":"blue icon fa fa-gavel fa-fw",
                        "open":false,
                        "child":[
                            {
                                "name":"桌面图标代码生成器"
                            },
                            {
                                "name":"磁贴代码生成器"
                            },
                            {
                                "name":"菜单代码生成器"
                            }
                        ]
                    },
                    {
                        "name":"关于",
                        "iconClass":"purple icon fa fa-info-circle fa-fw"
                    },
                    {
                        "name":"关闭",
                        "iconClass":"black icon fa fa-power-off fa-fw"
                    }
                    */
                ],
                hiddenWin10Menu:true,
                onNewMsg:false,
                // 消息列表
                messageList:[],
                newStart:false,
                hiddenShortcut: false,
                shortCuts: [],
                timer:null,
                backgroundImage: '/static/img/wallpapers/main.jpg',
                openCommandCenter: false,
                _isLoaded : false,
                taskBar:{},
                taskBarActove:0,
                countTask:0
            }
        },
        watch:{
            messageList:function (val) {
                if(val.length>0){
                    if(timer === null){
                        this.onNewMsg = true;
                        setInterval(()=>{
                            this.newStart = !this.newStart;
                        },600);
                    }
                }else{
                    if(timer){
                        clearInterval(timer);
                        this.newStart = false;
                        this.onNewMsg = false;
                        timer = null;
                    }
                }
            }
        },
        methods:{
            clickShortCut(short){
                if(this[short['openType']]){
                    this[short['openType']](short);
                }
            },

            closeWin(index){
                layer.close(index);
                if(this.taskBarActove == index){
                    this.taskBarActove = 0;
                }
                this.$remove(this.taskBar , index);
            },
            clickTaskBar(bar){
                if(bar.show){
                    console.log(bar);
                    bar.layero.hide();
                    bar.show = false;
                    if(this.taskBarActove == bar.index){
                        this.taskBarActove = 0;
                    }
                }else{
                    bar.layero.show()
                    bar.show = true;
                    this.taskBarActove = bar.index;
                }
            },
            openRouter(short){
                this.$router.push(short.url);
            },
            openLink(short){
                window.open(short.url);
            },
            openUrl(short){
                this.countTask++;
                var icon = short.winIcon || short.icon;
                var iconClass = short.winIconClass || short.iconClass;
                var title = short.winTitle || short.title;
                var url = short.url;
                var areaAndOffset = short.areaAndOffset;
                var area,offset;
                if(url.substr(0,1) == '/'){
                    url = win10Config.baseUrl+url;
                }
                //console.log(this.countTask);
                if (this.isSmallScreen() || areaAndOffset==='max') {
                    area = ['100%', (document.body.clientHeight - 40) + 'px'];
                    offset = ['0', '0'];
                }else if(typeof areaAndOffset ==='object'){
                    area=areaAndOffset[0];
                    offset=areaAndOffset[1];
                }else {
                    area = ['80%', '80%'];
                    var topset, leftset;
                    topset = parseInt(jQuery(window).height());
                    topset = (topset - (topset * 0.8)) / 2 - 41;
                    leftset = parseInt(jQuery(window).width());
                    leftset = (leftset - (leftset * 0.8)) / 2 - 120;
                    offset = [Math.round((this.countTask % 10 * 20) + topset) + 'px', Math.round((this.countTask % 10 * 20 + 100) + leftset) + 'px'];
                }
                var layerObject = {
                    show:true,
                    title:title
                };
                var iconStr='';
                if(icon){
                    layerObject.icon = icon;
                    iconStr = '<img src="'+icon+'" class="icon"/>';
                }else{
                    layerObject.iconClass = iconClass;
                    iconStr = '<i class="'+iconClass+'" />';
                }
                //console.log(offset);
                short.layer = layerObject;
                var that = this;
                var index = layerObject.index = this.taskBarActove = layer.open({
                    type: 2,
                    shadeClose: true,
                    shade: false,
                    maxmin: true, //开启最大化最小化按钮
                    title: iconStr+' '+title,
                    content: url,
                    area: area,
                    success: function (layero) {

                    },
                    offset: offset,
                    isOutAnim: false,
                    skin:'win10-open-iframe',
                    cancel :(index, layero)=> {
                        this.$remove(this.taskBar , index)

                        //Win10._checkTop();
                        this._countTask--;//回退countTask数
                        //Win10._renderBar();
                    },
                    min: function (layero) {
                        layero.hide();
                        that.taskBar[index].show = false;
                        if(that.taskBarActove == index){
                            that.taskBarActove = 0;
                        }
                        //$("#win10_" + index).removeClass('show');
                        //Win10._checkTop();
                        return false;
                    },
                    full:function (layero) {
                        layero.find('.layui-layer-min').css('display','inline-block');
                    }
                });
                layerObject.layero = $('#layui-layer'+index);
                this.taskBar[index] = layerObject;
            },
            isSmallScreen: function (size) {
                if (!size) {
                    size = 768
                }
                var width = document.body.clientWidth;
                return width < size;
            },
            getLayeroByIndex: function (index) {
                return $('#' + 'layui-layer' + index)
            },
            // api 阶段
            // 关闭消息中心
            commandCenterClose () {
                this.openCommandCenter = false;
            },
            commandCenterOpen () {
                this.openCommandCenter = true;
                clearInterval(timer);
                this.newStart = false;
                this.onNewMsg = false;
                timer = null;
            },
            commandCenterToggle:function () {
                if(this.openCommandCenter){
                    this.commandCenterClose();
                }else{
                    this.commandCenterOpen();
                }
            },
            // 打开开始菜单
            menuOpen:function () {
                this.hiddenWin10Menu = false;
            },
            menuClose:function () {
                this.hiddenWin10Menu = true;
            },
            // 结束API 阶段
            clickMenu(v){
                v.open = !v.open;
            },
            resetXiaoguo(){
                if(!this.hiddenWin10Menu)this.hiddenWin10Menu = true;
                if(this.openCommandCenter) this.commandCenterClose(); // 打开了消息中心
            },
            createdShortCut(child){
                if(this.timer) clearTimeout(this.timer);
                this.timer = setTimeout( () => {
                    this.renderShortcuts();
                },100);
            },
            destroyedShortCut(child) {
                if(this.timer) clearTimeout(this.timer);
                this.timer = setTimeout( () => {
                    this.renderShortcuts();
                },100);
            },
            handlerShortcut( list ) {
                // 初始化数据
                jdk.each(list ,  (i , obj) => {
                    obj.left = 0;
                    obj.top = 0;
                });
                this.shortCuts = list;
            },
            // 渲染他的位置
            renderShortcuts(){
                if(!this._isLoaded){
                    return;
                }
                var x=0,y=0;
                var height = this.$el.querySelector('#win10-shortcuts').offsetHeight;
                var h=parseInt( height / 100);

                jdk.each(this.shortCuts , function (i , obj) {
                    obj.left =x*82+10;
                    obj.top = y*100+10;
                    y++;
                    if(y>=h){
                        y=0;
                        x++;
                    }
                })
            },
            newMsg(title, content,handle_click){
                // 插入消息
                this.messageList.unshift({
                    title,
                    content,
                    callback:handle_click
                })
            },
            updateMenu () {
                axios.get(win10Config.shortCutUrl).then(response=>{
                    //console.log(response);
                    if(response.data.code == 0){
                        this.handlerShortcut(response.data.data);
                        this.renderShortcuts();
                    }else if(response.data.code == 1056){
                        // 登录超时
                        this.$router.push('/login');
                    }

                }).catch(response=>{
                });
                axios.get(win10Config.menuCutUrl).then(res=>{
                    if(res.data.code == 0){
                        this.win10Menu = res.data.data;
                        //this.handlerMenuCut(res.data.data);
                        this.renderShortcuts();
                    }else if(response.data.code == 1056){
                        // 登录超时
                        this.$router.push('/login');
                    }

                });
            }
        },
        created(){
            document.body.onbeforeunload = function(event){
                var rel = '系统可能不会保存您所做的更改';
                if(!window.event){
                    event.returnValue=rel;
                }else{
                    window.event.returnValue=rel;
                }
            };
            window.Win10 = this;
        },
        mounted(){
            this._isLoaded = true;
            Vue.$eventUntil.addEvent(window,'resize' ,  ()=> {
                this.renderShortcuts();
            });
            this.updateMenu();
        },
        components: {
            Shortcut,
            WinTimer
        }
    }
</script>

