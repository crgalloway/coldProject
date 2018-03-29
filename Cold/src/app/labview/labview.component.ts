import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-labview',
	templateUrl: './labview.component.html',
	styleUrls: ['./labview.component.css']
})
export class LabviewComponent implements OnInit {
	allLabs:any
	constructor(
		private _httpService: HttpService,
		private _route: ActivatedRoute,
		private _router: Router
	) { }

	ngOnInit() {
		this.getLabs()
	}
	getLabs(){
		this._httpService.getLabs().subscribe(data=>{
			if(!data['error']){
				this.allLabs = data['data'];
			}
		})
	}
}
