import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthUtils } from '../utility/auth-utils';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private fetchurl: any = "http://localhost:5000/api/user/fetch";
  constructor(private httpClient: HttpClient) { }
  fetchMe() {
    const mydataobservable = this.httpClient.get(this.fetchurl, { headers: AuthUtils.getAuthHeaders() });
    return mydataobservable;
  }
}
