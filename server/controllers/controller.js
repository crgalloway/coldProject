const mongoose =require('mongoose')
mongoose.Promise = global.Promise
const User = mongoose.model('User')
const Lab = mongoose.model('Lab')
//
mongoose.connect('mongodb://localhost/cold')

module.exports = {
	//route details/functions
	getLabs: (req,res)=>{
		Lab.find({}, (err, labs)=>{
			if(!err){
				res.json({message: "Success", data: labs})
			}
			else{
				res.json({message: "Error", error: err})
			}
		})
	}
}