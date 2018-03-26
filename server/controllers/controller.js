const mongoose =require('mongoose')
mongoose.Promise = global.Promise
const User = mongoose.model('User')
//
mongoose.connect('mongodb://localhost/cold')

module.exports = {
	//route details/functions
}