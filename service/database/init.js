// 此文件用来作数据库的连接和一些初始化的事情
const mongoose = require('mongoose');
const db = "mongodb://localhost/simle-db";

const glob = require('glob')
const {resolve} = require('path')

exports.initSchemas = ()=>{
  glob.sync(resolve(__dirname,'./schema','**/*.js')).forEach(require)
}

// mongoose.Promise = global.Promise;

exports.connect = ()=>{
  //连接数据库
  mongoose.connect(db);

  let maxConnectTimes = 0;

  return new Promise((resolve,reject)=>{
    //增加数据库连接监听
    mongoose.connection.on('Disconnected!', ()=>{
      //连接失败，进行重新连接
      console.log('**********数据库已断开**********')
      if(maxConnectTimes<3){
        maxConnectTimes++
        mongoose.connect(db)
      }else{
        reject()
        throw new Error('发生未知错误')
      }
    })
  
    //数据库出现错误的时候
    mongoose.connection.on('Error!', (err)=>{
      console.log('**********数据库错误**********')
      if(maxConnectTimes<3){
        maxConnectTimes++
        mongoose.connect(db)
      }else{
        reject(err)
        throw new Error('发生未知错误')
      }
    })
  
    //链接打开的时候
    mongoose.connection.once('Open!', ()=>{
      console.log('MongoDB Connected Successfully!');
      resolve();
    })
  })
}
