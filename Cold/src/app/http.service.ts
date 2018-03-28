import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

	constructor(private _http: HttpClient) { }
	//Lab-related services ==>
	createLab(newLab){
		return this._http.post('/labs',newLab)
	}
	getLabs(){
		return this._http.get('/labs')
	}
	getLabInfo(id){
		return this._http.get('/labs/'+id)
	}
	updateLab(lab){
		return this._http.put('/labs/'+lab._id, lab)
	}
	deleteLab(id){
		return this._http.delete('/labs/'+id)
	}
	addStorageToLab(storage){
		return this._http.put('/labs/storage/add/'+storage.location._id, storage)
	}
	removeStorageFromLab(labID, storage){
		return this._http.put('/labs/storage/remove/'+labID, storage)
	}
	//<==end lab services
	//Storage-related services ==>
	createStorage(newStorage){
		return this._http.post('/storage',newStorage)
	}
	getStorage(){
		return this._http.get('/storage')
	}
	getStorageInfo(id){
		return this._http.get('/storage/'+id)
	}
	updateStorage(storage){
		return this._http.put('/storage/'+storage._id, storage)
	}
	deleteStorage(id){
		return this._http.delete('/storage/'+id)
	}
	//<==end storage services
	//Sample-replated services ==>
	createSample(newSample){
		return this._http.post('/sample',newSample)
	}
	getSample(){
		return this._http.get('/sample')
	}
	getSampleInfo(id){
		return this._http.get('/sample/'+id)
	}
	updateSample(sample){
		return this._http.put('/sample/'+sample._id, sample)
	}
	deleteSample(id){
		return this._http.delete('/sample/'+id)
	}
	//<==end sample services
}
