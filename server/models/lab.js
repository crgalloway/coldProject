const mongoose = require('mongoose')
module.exports = new mongoose.Schema({
	name: {type:String, required:true, minlength:2},
	bioSec: {type:Number, required:true},
	freezerList: [{
		freezerId:{type:String, required:true},
		freezerName:{type:String, required:true}
	}],
	resList: [{
		resId:{type:String, required:true},
		resName:{type:String, required:true}
	}],
})