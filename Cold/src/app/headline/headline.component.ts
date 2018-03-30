import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute, 
    private _router: Router
  ){};

  ngOnInit(){
    
  }

}


