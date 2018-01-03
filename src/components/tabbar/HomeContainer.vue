<template>
    <div class="">
        <mt-swipe :auto="4000">
           <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
         <ul class="mui-table-view mui-grid-view mui-grid-9">
		           
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">about</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div></a></li>
		        </ul> 
    </div>
    
</template>

<script>
    export default {
        data () {
            return {
                 lunbotuList: []  // 保存轮播图的数组
                
            }
        },
         created() {
            this.getLunbotu()
        },
        methods:{
            getLunbotu(){
                // alert("1")
                this.$http.get('http://vue.studyit.io/api/getlunbo').then(result=>{
                    console.log(result.body);
                   if(result.body.status===0){
                           this.lunbotuList = result.body.message;
                    }else{
                    
                        Toast("加载轮播图失败111……")
                    } 
                    
                })

            }
            
        }
    }
</script>

<style lang="scss" scoped>
.mint-swipe {
        height: 200px;

        .mint-swipe-item {
            &:nth-child(1) {
                background-color: red;
            }
            &:nth-child(2) {
                background-color: blue;
            }
            &:nth-child(3) {
                background-color: cyan;
            }
           
        }
        img{
            width: 100%;
            height: 100%;
        }
    }
    
</style>