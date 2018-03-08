var mongoose = require('../lib/db.js');

var Schema = mongoose.Schema;

var Artile = new Schema({
	authorId:{type:Schema.Types.ObjectId},
	classify:{type:String},
	title:{type:String},
	content:{type:String},
	createdtime:{type:Date},
	stars:{type:Number},
	views:{type:Number}
})

module.exports = mongoose.model("Article",Artile)
