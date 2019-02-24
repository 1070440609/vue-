<template>
  <div class="newsinfo-container">
    <h3 class="title"></h3>
    <p class="subtitle">
      <span>发表时间</span>
      <span>评论数</span>
    </p>
    <div class="content"></div>
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import comments from '../sub/comment.vue'
export default {
  data(){
      id:this.$router.params.id
  },
  methods:{
    getnew(){
      this.$http.get('api/api/getnew/'+this.id).then(result=>{
        if(result.body.status===0){
          console.log(result.body);
          
        }
      })
    },
    compoents:{

    }
  }  
}
</script>
<style lang="scss">
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>

