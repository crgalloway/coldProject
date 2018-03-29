import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  updateUser: any; 
  id: any; 
  errors: any; 
  constructor(
    private _http: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router 
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.id = params['id']
    })
    this.getUser(this.id)
    this.updateUser = {firstname: '', lastname: '', username: '', email: '', password: '', confirm: ''}
    this.errors = {first: '', last: '', username: '', email: '', password: '', confirm: ''}
  }

  getUser(id){
    var status = this._http.getUser(id)
    status.subscribe(data =>{
      this.updateUser = data; 
    })
  }

  goback(){
    this._router.navigate(['/viewuser/'+this.id])
  }

  updateuser(){
    if(this.updateUser['password']!= this.updateUser['confirm']){
      this.errors['confirm'] = 'Passwords must match!'
    }
    else{
      var status = this._http.updateuser(this.id, this.updateUser)
      status.subscribe(data =>{
        if(data['errors']){
          if(data['errors']['firstname']){
            if(data['errors']['firstname']['kind']== 'required'){
              this.errors = {first: 'First Name is Required!', last: '', username: '', email: '', password: '', confirm: ''}
            }
            else if(data['errors']['firstname']['kind']=='minlength'){
              this.errors = {first: 'First Name Must Be Greater Than 3 Characters!', last: '', username: '', email: '', password: '', confirm: ''}
            }
          }
          else if(data['errors']['lastname']){
            if(data['errors']['lastname']['kind']== 'required'){
              this.errors = {first: '', last: 'Last Name is Required!', username: '', email: '', password: '', confirm: ''}
            }
            else if(data['errors']['lastname']['kind']=='minlength'){
              this.errors = {first: '', last: 'Last Name Must Be Greater Than 3 Characters!', username: '', email: '', password: '', confirm: ''}
            }
          }
          else if(data['errors']['username']){
            if(data['errors']['username']['kind']== 'required'){
              this.errors = {first: '', last: '', username: 'Username is Required!', email: '', password: '', confirm: ''}
            }
            else if(data['errors']['username']['kind']=='minlength'){
              this.errors = {first: '', last: '', username: 'Username Must Be Greater Than 3 Characters!', email: '', password: '', confirm: ''}
            }
          }
          else if(data['errors']['password']){
            if(data['errors']['password']['kind']== 'required'){
              this.errors = {first: '', last: '', username: '', email: '', password: 'Password is Required!', confirm: ''}
            }
            else if(data['errors']['password']['kind']=='minlength'){
              this.errors = {first: '', last: '', username: '', email: '', password: 'Password must be at least 6 characters', confirm: ''}
            }
          }
          else if(data['errors']['email']){
            if(data['errors']['email']['kind']== 'required'){
              this.errors = {first: '', last: '', username: '', email: 'Email is required', password: '', confirm: ''}
            }
            else if(data['errors']['email']['kind']=='minlength'){
              this.errors = {first: '', last: '', username: '', email: 'Invalid Email', password: '', confirm: ''}
            }
          }
        }
        else if(data['code']){
          if(data['code']== '11000'){
            this.errors = {first: '', last: '', username: '', email: 'Email already exists!', password: '', confirm: ''}
          }
        }
        else{
          this._router.navigate(['/viewuser/'+this.id]);
        }
      })
    }
  }

}
