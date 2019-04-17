import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable()
export class SignUpService {

  constructor( private httpService: HttpService)
   { }

   registerUser(data) {

    return this.httpService.post('/api/Register', data);

} 


  }

