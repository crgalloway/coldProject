import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any; 
  errors: any; 
  errorcheck: boolean; 
  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute, 
    private _router: Router
  ) { }

  ngOnInit() {
    this.login = {email: '', password: ''};
    this.errors = ''
    this.errorcheck = false; 
  }

  loginuser(){
    var status = this._http.login(this.login);
    status.subscribe(data => {
      if(data['error']){
        this.errors = data['error']
        this.errorcheck = true; 
      }
      else{
        this._router.navigate(['/main']);
      }
    })
  }


}
