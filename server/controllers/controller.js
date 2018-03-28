const mongoose =require('mongoose')
mongoose.Promise = global.Promise
const User = mongoose.model('User')
const Lab = mongoose.model('Lab')
const Storage = mongoose.model('Storage')
//
mongoose.connect('mongodb://localhost/cold')

module.exports = {
	//functions for labs ==>
	getLabs: (req,res)=>{
		Lab.find({}, (err, labs)=>{
			if(!err){
				res.json({message: "Success", data: labs})
			}
			else{
				res.json({message: "Error", error: err})
			}
		})
	},
	getOneLab: (req,res)=>{
		Lab.findOne({_id: req.params.id}, (err, lab)=>{
			if(err){
				res.json({message: "Error", error: err})
			}
			else{
				res.json({message: "Success", data:lab})
			}
		})
	},
	createLab: (req,res)=>{
		var lab = new Lab({name: req.body.name, BSL: req.body.BSL})
		lab.save(function(err){
			if(err){
				res.json({message: "Error", error: err})
			}
			else{
				res.json({message: "Success"})
			}
		})
	},
	deleteLab: (req,res)=>{
		Lab.remove({_id: req.params.id}, (err)=>{
			if(err){
				res.json({message: "Error", error: err})
			}
			else{
				res.json({message: "Success"})
			}
		})
	},
	updateLab: (req,res)=>{
		Lab.update({_id:req.params.id},{name: req.body.name, BSL: req.body.BSL}, {runValidators:true}, (err)=>{
			if(err){
				res.json({message: "Error", error: err})
			}
			else{
				res.json({message: "Success"})
			}
		})
	},
	addStorLab: (req,res)=>{
		Lab.findOne({_id: req.params.id}, (err, lab)=>{
			if(err){
				res.json({message: "Error", error: err})
			}
			else{
				lab.storageList.push({_id:req.body._id,name:req.body.name})
				lab.save(function(err){
					if(err){
						res.json({message: "Error", error: err})
					}
					else{
						res.json({message: "Success"})
					}
				})
			}
		})
	},
	removeStorLab: (req,res)=>{
		console.log(req.params.id)
		Lab.findOne({_id: req.params.id}, (err, lab)=>{
			if(err){
				res.json({message: "Error", error: err})
			}
			else{
				for(let i = 0; i < lab['storageList'].length; i++){
					if(lab.storageList[i]._id == req.body._id){
						lab.storageList.splice(i,1)
						lab.save(function(err){
							if(err){
								res.json({message: "Error", error: err})
							}
							else{
								res.json({message: "Success"})
							}
						})
					}
					break;
				}
			}
		})
	},
	addResLab: (req,res)=>{
		Lab.findOne({_id: req.params.id}, (err, lab)=>{
			if(err){
				res.json({message: "Error", error: err})
			}
			else{
				lab.resList.push({storageId:req.body.resId,storageName:req.body.resName})
				lab.save(function(err){
					if(err){
						res.json({message: "Error", error: err})
					}
					else{
						res.json({message: "Success"})
					}
				})
			}
		})
	},
	removeResLab: (req,res)=>{
		Lab.findOne({_id: req.params.id}, (err, lab)=>{
			if(err){
				res.json({message: "Error", error: err})
			}
			else{
				lab.resList.splice(req.body.index,1)
				lab.save(function(err){
					if(err){
						res.json({message: "Error", error: err})
					}
					else{
						res.json({message: "Success"})
					}
				})
			}
		})
	},
	//<== end functions for labs
	//functions for storage ==>
	getStorage: (req,res)=>{
		Storage.find({}, (err, storage)=>{
			if(!err){
				res.json({message: "Success", data: storage})
			}
			else{
				res.json({message: "Error", error: err})
			}
		})
	},
	getOneStorage: (req,res)=>{
		Storage.findOne({_id: req.params.id}, (err, storage)=>{
			if(err){
				res.json({message: "Error", error: err})
			}
			else{
				res.json({message: "Success", data:storage})
			}
		})
	},
	createStorage: (req,res)=>{
		var storage = new Storage({name: req.body.name, type:req.body.type, temp:req.body.temp, location:req.body.location})
		storage.save(function(err){
			if(err){
				res.json({message: "Error", error: err})
			}
			else{
				res.json({message: "Success", data:storage})
			}
		})
	},
	deleteStorage: (req,res)=>{
		Storage.remove({_id: req.params.id}, (err)=>{
			if(err){
				res.json({message: "Error", error: err})
			}
			else{
				res.json({message: "Success"})
			}
		})
	},
	updateStorage: (req,res)=>{
		Storage.update({_id:req.params.id},{name: req.body.name, type:req.body.type, temp:req.body.temp, location:req.body.location}, {runValidators:true}, (err)=>{
			if(err){
				res.json({message: "Error", error: err})
			}
			else{
				res.json({message: "Success"})
			}
		})
	},
	//<== end functions for storage
}