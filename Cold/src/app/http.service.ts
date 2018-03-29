import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

	constructor(private _http: HttpClient) { }

	getCdcFeed(){
		return this._http.get('/cdcrss');
	  }

	adduser(data){
		return this._http.post('/user', data);
	}

	login(body){
		return this._http.put('/user', body);
	}
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
	addSampleToStorage(storageID,sample){
		return this._http.put('storage/sample/add/'+storageID, sample)
	}
	//<==end storage services
	//Sample-replated services ==>
	createSample(newSample){
		return this._http.post('/sample',newSample)
	}
	getSamples(){
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
	findSampleByName(query, labsName){
		return this._http.get('/sampleFindByName/' + labsName + "/" + query );
	}
	findSampleByType(query, labsName){
		return this._http.get('/sampleFindByType/' + labsName + "/" + query );
	}

	//<==end sample services
}
