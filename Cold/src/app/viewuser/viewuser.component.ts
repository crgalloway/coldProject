import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  id: any; 
  User: any; 
  constructor(
    private _http: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.id = params['id']
    });
    this.User = {firstname: '', lastname: '', email: '', username: ''}
    this.getUser(this.id);

  }
  getUser(id){
    var status = this._http.getUser(id);
    status.subscribe(data =>{
      this.User = data; 
      console.log(this.User);
    })
  }

  deleteuser(id){
    var status = this._http.deleteuser(id)
    status.subscribe(data => {
      this.removeUserFromLab(this.User.lab._id, this.User)
      this._router.navigate(['/main/allusers']);
    })
  }

  edituser(id){
    this._router.navigate(['/main/edituser/'+id]);
  }
  removeUserFromLab(id, user){
    this._http.removeUserFromLab(id, user).subscribe(data=>{
    })
  }
}
