var mongoose = require('mongoose');

var DB_URL = 'mongodb://localhost:27017/blog'; 

mongoose.connect(DB_URL);

mongoose.connection.on('connected',function(){
	console.log('数据库连接成功：',DB_URL)
})

mongoose.connection.on('error',function(err){
	console.log('连接失败',err)
})

mongoose.connection.on('disconnected',function(){
	console.log('断开连接....')
})

module.exports = mongoose;