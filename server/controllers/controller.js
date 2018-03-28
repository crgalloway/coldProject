const mongoose =require('mongoose')
mongoose.Promise = global.Promise
const User = mongoose.model('User')
//
mongoose.connect('mongodb://localhost/cold')

module.exports = {
	adduser: (req, res) => {
		var newUser = new User(req.body);
		newUser.save((err)=> {
			if(err){
				res.json(err);
			}
			else{
				res.json({success: 'added'})
			}
		});
	},

	login: (req, res) => {
		User.findOne({email: req.body.email}, (err, user)=>{
			if(err){console.log(err)}
			if(user){
				if(user.password == req.body.password){
					res.json({success: 'logged'})
				}
				else{
					res.json({error: 'Password does not match!'})
				}

			}
			else{
				res.json({error: 'User does not exist'})
			}
		})
	}
}