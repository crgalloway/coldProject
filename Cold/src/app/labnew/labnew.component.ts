import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-labnew',
	templateUrl: './labnew.component.html',
	styleUrls: ['./labnew.component.css']
})
export class LabnewComponent implements OnInit {
	newLab:any
	constructor(
		private _httpService: HttpService,
		private _route: ActivatedRoute,
		private _router: Router
	) { }

	ngOnInit() {
		this.newLab = {
			name:" ",
			BSL:1
		}
	}
	goLabView(){
		this._router.navigate(['main/labview'])
	}
	onSubmit(){
		this._httpService.createLab(this.newLab).subscribe(data=>{
			if(!data['error']){
				this.goLabView()
			}
		})
	}
}
	