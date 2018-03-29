const mongoose = require('mongoose')
const beautifyunique = require('mongoose-beautiful-unique-validation');
module.exports = new mongoose.Schema({
	firstname: {type: String, required: true, minlength: 3},
    lastname: {type: String, required: true, minlength: 3},
	username: {type: String, required: true, unique: true, minlength: 3},
	email: {type: String, required: true, unique: true, minlength: 3},
	password: {type: String, required: true, minlength: 6},
	lab:{
		_id:{type:String},
		name:{type:String}
	}
},{timestamps: true});