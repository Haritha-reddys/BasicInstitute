import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';



@Injectable({
    providedIn:'root'
})
export class SigninService {
    isLogged = false;
    @Output() loginPub: EventEmitter<boolean> = new EventEmitter();
    constructor(private httpService: HttpService) { }

    validateUser(data) {
        // const loginObj={UserName:data.Email,Password:data.Password}
        return this.httpService.post('/api/SignIn', data);

    }

    setValid(value) {
        this.isLogged = value;
        sessionStorage.setItem('isValid',value);
        this.loginPub.emit(this.isLogged);
    }

}
