const ctrl = require('../controllers/controller')
const path = require('path');

module.exports = (app) => {

	app.post('/user', (req, res)=>{
		ctrl.adduser(req, res);
	})

	app.put('/user', (req, res)=>{
		ctrl.login(req, res);
	})
	app.get('/user', (req, res)=>{
		ctrl.getallusers(req, res);
	})
	app.get('/user/:id', (req, res)=>{
		ctrl.getoneuser(req, res);
	})
	app.delete('/user/:id', (req, res)=>{
		ctrl.deleteuser(req, res);
	})
	app.put('/user/:id', (req, res)=>{
		ctrl.updateuser(req, res);
	})
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
	app.put('/labs/user/add/:id',(req,res)=>{
		ctrl.addUserLab(req,res)
	})
	app.put('/labs/user/remove/:id',(req,res)=>{
		ctrl.removeUserLab(req,res)
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
	app.put('/storage/sample/add/:id',(req,res)=>{
		ctrl.addSampStor(req,res)
	})
	app.put('/storage/sample/remove/:id',(req,res)=>{
		ctrl.removeSampStor(req,res)
	})
	//<== end storage routes
	//Sample routes ==>
	app.get('/sample', (req,res)=>{
		ctrl.getSamples(req,res);
	})

	app.get('/sampleFindByType/:labsname/:query', (req, res)=>{
		ctrl.findSamplesByType(req,res);
	});
	app.get('/sampleFindByName/:labsname/:query', (req, res)=>{
		ctrl.findSamplesByName(req,res);
	});

	app.get('/sample/:id', (req,res)=>{
		ctrl.getOneSample(req,res)
	})
	app.post('/sample', (req,res)=>{
		ctrl.createSample(req,res)
	})
	app.delete('/sample/:id', (req,res)=>{
		ctrl.deleteSample(req,res)
	})
	app.put('/sample/:id',(req,res)=>{
		ctrl.updateSample(req,res)
	})
	//<== end sample routes
	app.get('/cdcrss', (req,res)=>{
		ctrl.cdcRss(req,res);
	})

	app.all('*', (req, res, next)=> {
		res.sendFile(path.resolve('./Cold/dist/index.html'));
	})
}