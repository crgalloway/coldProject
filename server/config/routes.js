const ctrl = require('../controllers/controller')
const path = require('path');

module.exports = (app) => {
	//Routes go here, use this format
	//app.get('/users', (req,res)=>{
	// 	ctrl.addUser(req,res);
	// })
	app.post('/user', (req, res)=>{
		ctrl.adduser(req, res);
	})

	app.put('/user', (req, res)=>{
		ctrl.login(req, res);
	})

	app.all('*', (req, res, next)=> {
		res.sendFile(path.resolve('./Cold/dist/index.html'));
	})
}