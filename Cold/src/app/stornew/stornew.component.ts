import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-stornew',
	templateUrl: './stornew.component.html',
	styleUrls: ['./stornew.component.css']
})
export class StornewComponent implements OnInit {
	newStorage:any
	allLabs:any
	constructor(
		private _httpService: HttpService,
		private _route: ActivatedRoute,
		private _router: Router
	) { }

	ngOnInit() {
		this.newStorage = {
			name:"",
			type:"",
			temp:"",
			location:{}
		}
		this.allLabs = []
		this.getLabs()
	}
	goStorageView(){
		this._router.navigate(['main/storview'])
	}
	onSubmit(){
		this._httpService.createStorage(this.newStorage).subscribe(data=>{
			if(!data['error']){
				this.addStorageToLab(data['data'])
				this.goStorageView()
			}
		})
	}
	getLabs(){
		this._httpService.getLabs().subscribe(data=>{
			if(!data['error']){
				this.allLabs = data['data']
			}
		})
	}
	addStorageToLab(storage){
		this._httpService.addStorageToLab(storage).subscribe(data=>{
			console.log(data)
		})
	}
}
	