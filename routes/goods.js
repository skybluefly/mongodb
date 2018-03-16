"use strict"
var express = require('express');
var router = express.Router(); // 拿到express框架的路由
var mongoose = require('mongoose');
var Goods = require('../server/goods');

// 链接MongoDB数据库,数据库的名称叫dumall
mongoose.connect('mongodb://127.0.0.1:27017/test');  // 若是带账号密码的：'mongodb://root:123456@127.0.0.1:27017/dumall'

// 连接成功操作
mongoose.connection.on("connected",function(){
	console.log("MongoDB connected success.")
})

// 连接失败操作
mongoose.connection.on("error",function(){
	console.log("MongoDB connected fail.")
})

// 连接断开操作
mongoose.connection.on("disconnected",function(){
	console.log("MongoDB connected disconnected.")
})


// 二级路由
// 查询商品列表数据
/* GET goods page. */
router.get('/', function(req, res, next) {


	Goods.find({},function(err, doc){
		if(err) {
			res.json({
				status:'1',
				msg:err.message
			})
		}else{
			res.json({
				status:'0',
				msg:'',
				result:{
					count:doc.length,
					list:doc
				}
			})
		}
	})

});
// 启动express
// node server/bin/www 或 pm2方式 或 webstorm 等
// localhost:3000/goods/    // '/goods'是app.js中的一级路由，'/'是本页的二级路由


// 加入到购物车
// 是二级路由，一级路由在app.js



module.exports = router;

