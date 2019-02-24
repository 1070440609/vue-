<template>
<div>
    <mt-swipe >  
  <mt-swipe-item v-for="item in list" :key="item.id">
      <img :src="item.img" >
      </mt-swipe-item>  
  
</mt-swipe>  


  <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                     <router-link to="/home/NewsList">
		                 <img src="/src/images/menu1.png" alt="">
		                 <div class="mui-media-body">新闻</div>
                      </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		              <img src="/src/images/menu2.png" alt="">
		                    <div class="mui-media-body">广播</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                  <img src="/src/images/menu3.png" alt="">
		                    <div class="mui-media-body">购物</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="/src/images/menu4.png" alt="">
		                    <div class="mui-media-body">本地</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="/src/images/menu5.png" alt="">
		                    <div class="mui-media-body">搜索</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="/src/images/menu6.png" alt="">
		                    <div class="mui-media-body">电话</div></a></li>
		         
		        
		        </ul> 
</div>


</template>
<script>
 import { Toast } from 'mint-ui';
 export default{
    
     data(){
         return{
           list:[]
         }
     },
     created(){
         this.getList()
     },
     methods:{
        getList(){
            this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result=>{
                   if(result.body.status===0){
                       this.list=result.body.message
                 
                 
                       
                       
                   }else{
                       Toast('获取失败'); 
                      
                   }
            })
        }
     }
 }
</script>
<style lang="less">
.mint-swipe{
    height:200px;
   img{
       height: 100%;
       width: 100%;
   }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }

  .mui-media-body{
    font-size: 13px;
  
  }
}
.mui-table-view mui-grid-view mui-grid-9{
  border:none;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
body{
      background-color: #fff;
}
</style>
