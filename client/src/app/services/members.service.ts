import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from '../models/member';

// const httpOptions = {
//   headers: new HttpHeaders({
//     Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')!)?.token //non-null assertion
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private _http: HttpClient) { 2
  }

  getMembers() {
    return this._http.get<Member[]>(this.baseUrl + 'users');
  }

  getMember(userName: string) {
    return this._http.get<Member>(this.baseUrl + 'users/' + userName);
  }
}
