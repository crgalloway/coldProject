const ctrl = require('../controllers/controller')
const path = require('path');

module.exports = (app) => {
	//Lab routes ==>
	app.get('/labs', (req,res)=>{
		ctrl.getLabs(req,res);
	})
	app.get('/labs/:id', (req,res)=>{
		ctrl.getOneLab(req,res)
	})
	app.post('/labs', (req,res)=>{
		ctrl.createLab(req,res)
	})
	app.delete('/labs/:id', (req,res)=>{
		ctrl.deleteLab(req,res)
	})
	app.put('/labs/:id',(req,res)=>{
		ctrl.updateLab(req,res)
	})
	app.put('/labs/storage/add/:id',(req,res)=>{
		ctrl.addStorLab(req,res)
	})
	app.put('/labs/storage/remove/:id',(req,res)=>{
		ctrl.removeStorLab(req,res)
	})
	app.put('/labs/researcher/add/:id',(req,res)=>{
		ctrl.addResLab(req,res)
	})
	app.put('/labs/researcher/remove/:id',(req,res)=>{
		ctrl.removeResLab(req,res)
	})
	//<== end lab routes
	//Storage routes ==>
	app.get('/storage', (req,res)=>{
		ctrl.getStorage(req,res);
	})
	app.get('/storage/:id', (req,res)=>{
		ctrl.getOneStorage(req,res)
	})
	app.post('/storage', (req,res)=>{
		ctrl.createStorage(req,res)
	})
	app.delete('/storage/:id', (req,res)=>{
		ctrl.deleteStorage(req,res)
	})
	app.put('/storage/:id',(req,res)=>{
		ctrl.updateStorage(req,res)
	})
	//<== end storage routes
	app.all("*", (req,res,next)=>{
		res.sendFile(path.resolve("cold/dist/index.html"))
	})
}