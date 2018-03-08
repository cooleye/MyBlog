var mongoose = require('../lib/db.js');

var Schema = mongoose.Schema;


var User = new Schema({
	name:{type:String},
	pwd:{type:String},
	avatar:{type:String},
	createtime:{type:Date}
})

module.exports = mongoose.model('User',User);
