import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-sampview',
	templateUrl: './sampview.component.html',
	styleUrls: ['./sampview.component.css']
})
export class SampviewComponent implements OnInit {
	allSamples:any
	constructor(
		private _httpService: HttpService,
		private _route: ActivatedRoute,
		private _router: Router
	) { }

	ngOnInit() {
		this.getSamples()
	}
	getSamples(){
		this._httpService.getSamples().subscribe(data=>{
				this.allSamples = data['data']
		})
	}
}
