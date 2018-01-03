<template>
    <div class="">
        <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
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
                this.$http.get('http://vue.studyit.io/api/getlunbo').then(result=>{
                   if(result.body.status===0){
                           this.lunbotuList = result.body.message;
                    }else{
                    
                        Toast("加载轮播图失败……")
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
    }
    
</style>