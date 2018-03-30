import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  feed: any;
  feedExist: Boolean;
  innerWidth: any; 
  showSearch:Boolean
  currentRoute: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute, 
    private _router: Router
  
  ) { }

  ngOnInit() {
    this.currentRoute = this._route.snapshot.url
    console.log(this.currentRoute)
    this.feedExist=false;
    this.feed=[];
    this.getCdcFeed();
    this.innerWidth = window.innerWidth;
    this.showSearch = false
  }
  getCdcFeed(){
    this._httpService.getCdcFeed().subscribe(data=>{
      if (data['error']){
        console.log("Error");
      }
      else {
        this.feed = data['rss']['items'];
        this.feedExist=true;
        console.log(this.feed);
      }
    });
  } 
  toggleSearch(){
    if(this.showSearch){
      this.showSearch=false
    }else{
      this.showSearch=true
    }
  }
}
