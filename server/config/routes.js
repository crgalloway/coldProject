const ctrl = require('../controllers/controller')
const path = require('path');

module.exports = (app) => {
	//Routes go here, use this format
	//app.get('/users', (req,res)=>{
	// 	ctrl.addUser(req,res);
	// })
	app.get('/labs', (req,res)=>{
		ctr.getLabs(req,res);
	})
	app.get('/labs/:id', (req,res)=>{
		ctr.getOneLab(req,res)
	})
}