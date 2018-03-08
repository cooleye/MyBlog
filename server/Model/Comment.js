
var mongoose = require('../lib/db.js');

var Schema=mongoose.Schema;

var Comment = new Schema({
	articleId:{type:Schema.Types.ObjectId},
	author:{type:Schema.Types.Mixed},
	content:{type:String},
	createtime:{type:Date}
})

module.exports = mongoose.model('Comment',Comment);
