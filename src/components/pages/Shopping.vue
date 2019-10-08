<template>
  <div>
    <!-- 搜索栏--start -->
    <div class="search-bar">
      <van-row>
        <van-col span="3">
          <img class="location-icon" :src="locationIcon" alt="404" width="75%">
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input" placeholder="在此搜索">
        </van-col>
        <van-col span="5">
          <van-button class="search-btn" round size="small">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <!-- 搜索栏--end -->
    <!-- 轮播图--start -->
    <div class="swiper">
      <van-swipe :autoplay="3000" indicator-color="black">
        <van-swipe-item v-for="(item, index) in bannerImg" :key="index">
          <img v-lazy="item.image" width="100%" height="167px">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 轮播图--end -->
    <!-- typeBar--start -->
    <div class="type-bar">
      <div v-for="(item, index) in mcategory" :key="index">
        <img v-lazy="item.image" width="90%" alt="">
        <span>{{item.mallCategoryName}}</span>
      </div>
    </div>
    <!-- typeBar--end -->
    <!-- 广告--start -->
    <div>
      <img v-lazy="adBanner" width="100%" alt="">
    </div>
    <!-- 广告--end -->
    <!-- 商品推荐--start -->
    <div class="recommend">
      <div class="recommend-title">
        商品推荐
      </div>
      <div class="recommend-body">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in recommendGoods" :key="index">
            <div class="recommend-item">
              <img :src="item.image" width="80%" alt="">
              <div>{{item.goodsName}}</div>
              <div>￥{{item.price|moneyFilter}}({{item.mallPrice|moneyFilter}})</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- 商品推荐--end -->
    <!-- <mSwiper></mSwiper> -->
    <!-- floor --start -->
    <floorComponent :floorData="floor1" :floorTitle="floorName.floor1"></floorComponent>
    <floorComponent :floorData="floor2" :floorTitle="floorName.floor2"></floorComponent>
    <floorComponent :floorData="floor3" :floorTitle="floorName.floor3"></floorComponent>
    <!-- floor --end -->
    <!-- 热卖商品--start -->
    <div class="hot">
      <div class="hot-title">热卖商品</div>
      <div class="hot-goods">
        <!-- 此处需要一个list组件 -->
        <van-list>
          <van-row gutter="20">
            <van-col span="12" v-for="(item, index) in hotGoods" :key="index">
              <goods-info :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goods-info>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
    <!-- 热卖商品--end -->
  </div>
</template>

<script>
import axios from 'axios'
// 引入vue-awesome-swiper组件
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
// 引入floorComponent组件
import floorComponent from '../component/floorComponent'
// 引入Filter 
import {toMoney} from '@/filter/moneyFilter.js'
// 引入商品显示公共组件
import goodsInfo from '../component/goodsInfoComponent'
// 引入接口配置文件
import mUrl from '@/serviceAPI.config.js'

// 引入swiper.vue
// import mSwiper from '@/components/swiper.vue'

  export default {
    data() {
      return {
        swiperOption:{
          slidesPerView:3//每个页面有几项
        },
        msg: "Shopping!",
        locationIcon:require('../../assets/images/location.png'),
        bannerImg:[],      //轮播图片
        mcategory:[],      //商品类别标签栏
        adBanner:'',       //广告
        recommendGoods:[], //推荐商品
        floor1:[],         //楼层一的数据
        floor2:[],         //楼层二的数据
        floor3:[],         //楼层三的数据
        // floor1_0:[],
        // floor1_1:[],
        // floor1_2:[],
        floorName:'',      //楼层名称
        hotGoods:[],       //热卖商品
      }
    },
    components: {
      swiper,
      swiperSlide,
      floorComponent,
      goodsInfo,
      // mSwiper
    },
    created() {
      axios({
        url: mUrl.getShoppingMallInfo,
        method:"get"
      })
      .then(response=>{
        console.log(response);
        if(response.status == 200){
          this.mcategory = response.data.data.category;
          this.adBanner = response.data.data.advertesPicture.PICTURE_ADDRESS;
          this.bannerImg = response.data.data.slides;
          this.recommendGoods = response.data.data.recommend;
          this.floor1 = response.data.data.floor1;  // 楼层一的数据
          this.floor2 = response.data.data.floor2;  // 楼层二的数据
          this.floor3 = response.data.data.floor3;  // 楼层三的数据
          this.floor1_0 = this.floor1[0];
          this.floor1_1 = this.floor1[1];
          this.floor1_2 = this.floor1[2];
          this.floorName = response.data.data.floorName;   //楼层名称
          this.hotGoods = response.data.data.hotGoods;     //热卖商品
        }
      })
      .catch(error=>{
        console.log(error);
      })
    },
    filters:{
      moneyFilter(money){
        return toMoney (money)
      }
    }
  }
</script>

<style scoped>
.search-bar{
  height: 2.2rem;
  background-color: #f20;
  line-height: 2.2rem;
  overflow: hidden;
}
.search-input{
  width: 100%;
  height: 1.3rem;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1.5px solid #fff !important;
  background-color: #f20;
  color: #fff;
}
.location-icon{
  padding-left: .3rem;
  padding-top: .2rem;
}
.search-btn{
  font-size: .8rem;
  left: .65rem;
  bottom: .05rem;
}
.swiper{
  clear: both;
  /* 解决懒加载时轮播图底部小点出现位置的bug */
  max-height: 18rem;
  overflow: hidden;
}
.type-bar{
  background-color: #fff;
  margin:0 .3rem .3rem .3rem;
  border-radius: .3rem;
  font-size:0.87rem;
  display: flex;
  flex-direction:row;
  flex-wrap:nowrap;
}
.type-bar div{
  padding: .3rem;
  font-size: 0.75rem;
  text-align: center;
  flex:1
}
.recommend{
  background-color: #fff;
  margin-top: .3rem;
}
.recommend-title{
  border-bottom: 1px solid #eee;
  font-size: .87rem;
  padding: .3rem;
  color: #E50;
}
.recommend-body{
  border-bottom: 1px solid #eee;
}
.recommend-item{
  width: 100%;
  border-right: 1px solid #eee;
  font-size: .75rem;
  text-align: center;
}
.floor-anomaly{
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
.floor-anomaly div{
  width: 10rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.floor-one{
  border-right: 1px solid #ddd;
}
.floor-one{
  border-bottom: 1px solid #ddd;
}
.floor-rule{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
}
.floor-rule div{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  width: 10rem;
  border-bottom: 1px solid #ddd;
}
.floor-rule div:nth-child(odd){
  border-right: 1px solid #ddd;
}
.hot{
  text-align: center;
  font-size: .875rem;
  height: 1.8rem;
  line-height: 1.8rem
}
.hot-goods{
  height: 130rem;
  overflow: hidden;
  background-color: #fff;
}
</style>