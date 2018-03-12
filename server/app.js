var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

//图片上传中间件
var multer  = require('multer');


var index = require('./routes/index');
var users = require('./routes/users');

var app = express();


//设置图片上传路径
app.use(multer({ dest: 'public/upload/'}).array('avatar'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: '12345', //secret的值建议使用随机字符串
    cookie: {maxAge: 60 * 1000 * 30}, // 过期时间（毫秒）
    saveUninitialized:false
}));

app.all('*',function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");//预检请求使用
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");//预检请求使用
    
//  console.log(req.cookies)
//	console.log('1>>',req.session)
//	if(req.session.sign) {//检查用户是否已经登录
//      console.log('2>>',req.session);//打印session的值
//      console.log('欢迎：'+ req.session.name + '再次登录')
//  } else {//否则展示index页面
//      req.session.sign = true;
//      req.session.name = "Davie kong";
//      console.log('>>欢迎登录',req.session)
//  }
    
    next();
})

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
