import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  adduser(data){
    return this._http.post('/user', data);
  }

  login(body){
    return this._http.put('/user', body);
  }

}
