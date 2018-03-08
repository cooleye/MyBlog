var express = require('express');
var router = express.Router();

var Classify = require('../Model/Classify');
var Article = require('../Model/Article');
var Comment = require('../Model/Comment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/classify',function(req,res){
	
	Classify.find({},function(err,result){
		if(err){
			console.log(err)
		}else{
//			console.log(result)
			res.send(result)
		}
	})
})

router.get('/addClass',function(req,res){
	var cl = req.query.clazz;
	var clazz = new Classify({
		classify:cl,
	    createdtime:new Date()
	})
	
	clazz.save(function(err,result){
		if(err){
			console.log(err)
		}else{
//			console.log(result)
			res.send(result)
		}
	})
})

router.get('/delClass',function(req,res){
	
	var id = req.query.id;
	
	Classify.findByIdAndRemove(id,function(err,result){
		if(err){
			console.log('Error',err)
		}else{
//			console.log('Res:',res)
			Classify.find({},function(err,result){
				if(err){
					console.log(err)
				}else{
//					console.log(result)
					res.send(result)
				}
			})
			
		}

	})
})

router.post('/publish',function(req,res){
	
	var content = req.body.content;
	var title = req.body.title;
	var classify = req.body.classify;
	
//	authorId:{type:Schema.Types.ObjectId},
//	classify:{type:String},
//	title:{type:String},
//	content:{type:String},
//	createdtime:{type:Date},
//	stars:{type:Number},
//	views:{type:Number}
	var classify = new Article({
		authorId:null,
		classify:classify,
		title:title,
		content:content,
		createdtime:new Date,
		stars:100,
		views:999
	})
	
	classify.save(function(err,result){
		if(err){
			console.log(err)
		}else{
//			console.log(result)
			res.send({msg:'success'})
		}
	})
	
})

router.get('/articles',function(req,res){
	
	Article.find({},function(err,result){
		if(err){
			console.log(err)
		}else{
//			console.log(result)
			res.send(result)
		}
	})
})

router.get('/delarticle',function(req,res){
	var id = req.query.id;
	
	Article.findByIdAndRemove(id,function(err,result){
		if(err){
			console.log('Error',err)
		}else{
//			console.log('Res:',res)
			Article.find({},function(err,result){
				if(err){
					console.log(err)
				}else{
//					console.log(result)
					res.send(result)
				}
			})
			
		}

	})
})

router.get('/article',function(req,res){
	
	var id = req.query.id;
	Article.findById(id,function(err,article){
		if(err){
			console.log(err)
		}else{
			
			res.send(article)
//			Comment.find({articleId:id},function(err,comments){
//				if(err){
//					console.log(err)
//				}else{
//					var result = Object.assign(article,comments);
//					console.log(result)
//					res.json(result)
//				}
//			})
		}
	})
})

/*获取评论*/
router.get('/getcomment',function(req,res){
	var articleId = req.query.articleId;
	Comment.find({articleId:articleId},function(err,result){
		if(err){
			console.log(err)
		}else{
			console.log(result)
			res.send(result)
		}
	})
})

/*添加评论*/
router.post('/addcomment',function(req,res){

	var articleId = req.body.articleId;
	var author = req.body.author;
	var content = req.body.content;
	
	var com = new Comment({
			articleId:articleId,
			author:author,
			content:content,
			createtime:new Date
	})
	
	com.save(function(err,result){
		if(err){
			console.log(err)
		}else{
			Comment.find({articleId:articleId},function(err,result){
				if(err){
					console.log(err)
				}else{
					res.send(result)
				}
			})
		}
	})
})


router.post('/addstar',function(req,res){
	var id = req.body.articleId;
	var stars = req.body.stars;
	var updatestr = {stars:parseInt(stars) + 1}
	Article.findByIdAndUpdate(id,updatestr,function(err,result){
		if(err){
			console.log('Error',err)
		}else{
			console.log('Res:',res)
			res.send(result)
		}
	})
})



module.exports = router;
