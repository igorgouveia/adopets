import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { empty } from 'rxjs';
const host = '/v1/';
const ApiUrl = `http://${host}`;
const ApiKey = "505763d6-4202-4b05-9efc-93b366939bcf";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public access_key: any;
  constructor(private httpClient: HttpClient, private cookie: CookieService) { }

  sessionRequest() {
    let json = {
      "system_api_key": ApiKey
    }
    return this.httpClient.post(`${host}/auth/session-request`, json).toPromise();
  }
  sessionRegister(email, password) {
    let key = this.cookie.get('authKey');
    let json = { "organization_user": { "email": email, "password": password } }
    return this.httpClient.post(`${host}/auth/session-register`, json, { headers: { 'Authorization': key } }).toPromise();
  }
  search(sex_key?, size_key?, age_key?, sort?, limit?, page?) {
    let key = this.cookie.get('authToken');
    let json = {
      "search": {
        "sex_key": sex_key?sex_key:empty,
        "size_key": size_key?size_key:empty,
        "age_key": age_key?age_key:empty,
      },
      "options": {
        "page": page,
        "limit": limit,
        "sort":sort?[sort]:[]
      }
    }
    return this.httpClient.post(`${host}/pet/search`, json, { headers: { 'Authorization': key } }).toPromise();
  }

}
