<template>
  <div>

   <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id" >
					<router-link :to="'/home/newsinfo/' + item.id">
						<img class="mui-media-object mui-pull-left" :src=item.img_url>
				 <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class='mui-ellipsis'>
              <span>发表时间：{{ item.add_time | my_filter('YYYY-MM-DD HH:mm:ss') }}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
				</router-link>
				</li>
			

			</ul>

  </div>

</template>
<script>

export default {
  data(){
    return{
      list:[]

    }
  },
  created(){
    this.getNewlist()
  },
methods:{
   getNewlist(){
     this.$http.get('api/getnewslist').then(result=>{
       if(result.body.status===0){
          this.list=result.body.message
         
       }
     })
   }
}
}
</script>
<style>
h1{
  font-size: 14px;
}
</style>
