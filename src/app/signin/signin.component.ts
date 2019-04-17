import { Component, OnInit } from '@angular/core';
import { SigninModel } from './signin.model';
import { SigninService } from './signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
 
})
export class SigninComponent implements OnInit {
  signin: SigninModel;
  submited = false;
  message: string = '';

  constructor(private signService: SigninService, private route: Router) { }

  ngOnInit() {
    this.signService.setValid(false);
    // this.signin = { Email: '', Password: '' };
    this.signin = { username: '', password: '' };
  }

  onSignin(form) {
    if (form.invalid) {
      this.submited = true;
      return;
    }
    else {
  
      //  const loginObj = { UserName: this.signin.Email, Password: this.signin.Password }
      this.signService.validateUser(this.signin).then((respone:any) => {
        if (respone.hasErrors == true) {
          this.signService.setValid(false);
          // alert(respone.errors[0].errorMessage)
          this.message = 'Email or password is incorrect'//respone.errors[0].errorMessage;
          setTimeout(() => {
            this.message = '';
          }, 5000);
        }
        else if (respone.result.isSuccess == true) {
          this.signService.setValid(true);
          this.route.navigate(['/dashboard']);
        }

      }).catch(error => {
        // alert(error);

      });
    }

  }
}
