<!-- Created in 2019.9.29 by wuzl; -->
<!-- 使用vue-awesome-swiper组件 -->
<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="(item, index) in slide" :key="index">
        Slide {{item}}
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
  export default {
    data(){
      return{
        slide:['页面一','页面二','页面三','页面四','页面五','页面六','页面七'],
        swiperOption:{
          loop:true,          //循环滚动
          pagination:{
            el:'.swiper-pagination',
            clickable:true    //分页器可点击
          }
        }
      }
    },
    components:{
      swiper,swiperSlide
    }
  }
</script>

<style scoped>
.swiper-slide{
  height: 4rem;
  text-align: center;
  padding-top: 3rem;
  border-bottom: 1px solid #ccc;
}
</style>