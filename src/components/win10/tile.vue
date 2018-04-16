<template>
    <div class="tile" ref="tile" :class="tileActive" @mousedown="addClass" @mouseup="removeClass" @mouseleave="removeClass">
        <slot></slot>
    </div>
</template>

<style type="text/less">

</style>

<script>
    function getObjXy(obj){
        var xy = obj.getBoundingClientRect();
        var top = xy.top-document.documentElement.clientTop+document.documentElement.scrollTop,//document.documentElement.clientTop 在IE67中始终为2，其他高级点的浏览器为0
            bottom = xy.bottom,
            left = xy.left-document.documentElement.clientLeft+document.documentElement.scrollLeft,//document.documentElement.clientLeft 在IE67中始终为2，其他高级点的浏览器为0
            right = xy.right,
            width = xy.width||right - left, //IE67不存在width 使用right - left获得
            height = xy.height||bottom - top;

        return {
            top:top,
            right:right,
            bottom:bottom,
            left:left,
            width:width,
            height:height,
            w:width,
            h:height
        }
    }
    export default{
        name: "win10-tile",
        props:{
            size:{
                type:String,
                default:''
            }
        },
        data(){
            return {
                tileActiveClass:''
            }
        },
        methods: {
            addClass(e){
                console.log()
                var dim = getObjXy(this.$refs['tile']);
                var X = e.pageX -  dim.left , Y = e.pageY - dim.top;
                var transform = 'top';

                if (X < dim.w * 1/3 && (Y < dim.h * 1/2 || Y > dim.h * 1/2 )) {
                    transform = 'left';
                } else if (X > dim.w * 2/3 && (Y < dim.h * 1/2 || Y > dim.h * 1/2 )) {
                    transform = 'right';
                } else if (X > dim.w*1/3 && X<dim.w*2/3 && Y > dim.h/2) {
                    transform = 'bottom';
                }



                this.tileActiveClass = 'tile-transform-'+transform;
            },
            removeClass(e){
                this.tileActiveClass = '';
            }
        },
        created(){
        },
        /* 计算属性 */
        computed: {
            tileActive(){
                return this.size+'-tile '+this.tileActiveClass;
            }
        },
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