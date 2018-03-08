var mongoose = require('../lib/db.js');

var Schema = mongoose.Schema;

var Classify = new Schema({
	classify:{type:String},
	createdtime:{type:Date}
})

module.exports = mongoose.model("Classify",Classify)
