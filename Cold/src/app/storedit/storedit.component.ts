import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-storedit',
	templateUrl: './storedit.component.html',
	styleUrls: ['./storedit.component.css']
})
export class StoreditComponent implements OnInit {
	storage:any
	allLabs:any
	currentLabID:string
	constructor(
		private _httpService: HttpService,
		private _route: ActivatedRoute,
		private _router: Router
	) { }

	ngOnInit() {
		this.storage = {
			name:"",
			type:"",
			temp:"",
			location:{
				name:""
			}
		}
		this.allLabs = []
		this._route.params.subscribe((params: Params) =>{
			this.getStorageInfo(params['id'])
		})
		this.getLabs()
	}
	getStorageInfo(id){
		this._httpService.getStorageInfo(id).subscribe(data =>{
			this.storage = data['data']
			this.currentLabID = this.storage.location._id
		})
	}
	goStorageView(){
		this._router.navigate(['storview'])
	}
	getLabs(){
		this._httpService.getLabs().subscribe(data=>{
			if(!data['error']){
				this.allLabs = data['data']
			}
		})
	}
	onSubmit(){
		this._httpService.updateStorage(this.storage).subscribe(data=>{
			if(!data['error']){
				this.removeStorageFromLab()
				this.addStorageToLab(this.storage)
				this.goStorageView()
			}
		})
	}
	removeStorageFromLab(){
		this._httpService.removeStorageFromLab(this.currentLabID,this.storage).subscribe(data=>{
		})
	}
	addStorageToLab(storage){
		this._httpService.addStorageToLab(storage).subscribe(data=>{
			console.log(data)
		})
	}
}
