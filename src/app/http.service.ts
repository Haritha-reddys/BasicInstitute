import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASEURL='http://72.52.191.166:90/';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url) {
    return this.http.get(BASEURL+url).toPromise();
  }

  post(url, data) {
    return this.http.post(BASEURL+url, data).toPromise();

  }
  delete(url) {
    return this.http.delete(BASEURL+url).toPromise();

  }
}
