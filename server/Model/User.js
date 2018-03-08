var mongoose = require('./db.js'),
Schema=mongoose.Schema;

var User = new Schema({
	name:{type:String},
	pwd:{type:String},
	avatar:{type:String}
})

module.exports = mongoose.model('user',User);
