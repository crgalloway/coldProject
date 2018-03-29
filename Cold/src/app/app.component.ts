import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  feed: any;
  feedExist: Boolean;
  constructor(private _httpService: HttpService){};

  ngOnInit(){
    this.feedExist=false;
    this.feed=[];
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
}

