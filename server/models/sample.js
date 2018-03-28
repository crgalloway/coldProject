const mongoose = require('mongoose')
module.exports = new mongoose.Schema({
	name:{type:String, required:true, minlength:3},
	type:{type:String, required:true, minlength:3},
	container:{type:String, required:true, minlength:3},
	location:{
		lab:{
			_id:{type:String, required:true},
			name:{type:String, required:true}
		},
		storage:{
			_id:{type:String, required:true},
			name:{type:String, required:true}
		},
	}
	
}, {timestamps:true})