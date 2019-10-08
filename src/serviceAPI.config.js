// 接口配置文件
const BASEURL = "https://www.easy-mock.com/mock/5d8dce28c57d672775597f96/myVueDemo/";
const LOCALURL = "http://localhost:8888/";

const URL = {
  getShopingMallInfo : BASEURL+'index',                        //商城首页所有信息
  getGoodsInfo : BASEURL+'getGoodsInfo',
  registerUser : LOCALURL+'user/register',                     //用户注册接口
  login : LOCALURL+'user/login',                               //用户登录接口
  getDetailGoodsInfo : LOCALURL+'goods/getDetailGoodsInfo',    //获取商品详情
  getCateGoryList : LOCALURL+'goods/getCateGoryList',          //得到大类信息
  getCateGorySubList : LOCALURL+'goods/getCategorySubList',    //得到小类信息
  getGoodsListByCategorySubID : LOCALURL+'goods/getGoodsListByCategorySubID',
  //得到小类商品信息
}

module.exports = URL