import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceMainService {
  public url_back: string = environment.api_url;
  public _headers
  

  constructor(public _http:HttpClient) {
    const _headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'username':'gramirez'});
  }

  public get(): Observable<any>{
    return this._http.get<any>(this.url_back,{headers: {'username': 'gramirez'}} );
  }
}
