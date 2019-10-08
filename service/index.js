const Koa =require('koa');
const app = new Koa();
const Router = require('koa-router')
const mongoose = require('mongoose')
const {connect , initSchemas} = require('./database/init.js')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')


app.use(cors())
app.use(bodyParser());



let user = require('./appApi/user.js')
let home = require('./appApi/home.js')
let goods = require('./appApi/goods.js')

//装载所有子路由
let router = new Router();
router.use('/user',user.routes())
router.use('/home',home.routes())
router.use('/goods',goods.routes())

//加载路由中间件
app.use(router.routes())
app.use(router.allowedMethods())

//立即执行函数
;(async () =>{
  await connect()
  initSchemas()
})()

// //引入connect
// const {connect} = require('./database/init.js');
// //立即执行函数
// (async ()=>{
//     await connect()
// })()

app.use(async(ctx)=>{
  ctx.body = `<h1> Hello Wuzl</h1>`
})

app.listen(8888,()=>{
  console.log('[Server]:Started in port 8888');
})