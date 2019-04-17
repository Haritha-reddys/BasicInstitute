import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor() { }
  GetCurrentDate(){
    return new Date().getDate();
  }
}
