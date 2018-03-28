import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-stordetails',
	templateUrl: './stordetails.component.html',
	styleUrls: ['./stordetails.component.css']
})
export class StordetailsComponent implements OnInit {
	storage:any
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
		this._route.params.subscribe((params: Params) =>{
			this.getStorageInfo(params['id'])
		})
	}
	getStorageInfo(id){
		this._httpService.getStorageInfo(id).subscribe(data =>{
			this.storage = data['data']
		})
	}
	goStorageView(){
		this._router.navigate(['storview'])
	}
	deleteStorage(id){
		this.removeStorageFromLab()
		this._httpService.deleteStorage(id).subscribe(data=>{
			this.goStorageView()
		})
	}
	editStorage(id){
		this._router.navigate(['storedit/'+id])
	}
	removeStorageFromLab(){
		this._httpService.removeStorageFromLab(this.storage.location._id,this.storage).subscribe(data=>{
		})
	}
}
