<template>
    <div>
        <div>
            <van-nav-bar  title="会员中心" />
        </div>
        <div class="top">
           <img src="@/assets/images/myIcon.png" class="top-img" />
        </div>
        <div class="login">
            <div>
                <router-link to="./Login">
                    <van-button type="warning">我要登录</van-button>
                </router-link>
            </div>
            <div>
                <router-link to="./Register">
                    <van-button type="primary">我要注册</van-button>
                </router-link>
            </div>
        </div>
        <div>
            <van-cell-group>
                <van-cell title="会员卡" is-link />
                <van-cell title="地址管理" is-link  />
                <van-cell title="我的订单" is-link  />
                <van-cell title="会员权益" is-link />
                <van-cell title="联系我们" is-link  />
            </van-cell-group>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.top-img{
  width:70px;
  height: 70px;
  border-radius: 50px;
}
.top{
    height:5rem;
    text-align: center;
    padding-top:2rem;
    background-color: #EEA2AD;
}
.login{
  display: flex;
  flex-direction: row;
  background-color: #fff;
  padding:10px;
}
.login div{
  flex:1;
  text-align: center;
}
</style>