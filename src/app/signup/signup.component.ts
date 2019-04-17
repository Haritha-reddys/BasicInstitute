import { Component, OnInit } from '@angular/core';
import { SignupModel } from './signup.model';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignUpService]
})
export class SignupComponent implements OnInit {
  signup: SignupModel;
  submited = false;
  message: string = '';

  constructor(private signupservice: SignUpService, private route: Router) { }

  ngOnInit() {
    this.signup = { name: '', email: '', mobile: '', password: '' };
  }


  onSignup(form) {
    if (form.invalid) {
      this.submited = true;
      return;
    }
    else {
      // this.submited=false;
      //  this.signupservice;

      this.signupservice.registerUser(this.signup).then((response: any) => {
        if (response.hasErrors == false) {
          alert('Account has created successfully.');
        //  this.message = 'Account has created successfully.'
         this.route.navigate(['/signin']);
          // setTimeout(() => {
          //   this.route.navigate(['/signin']);
          // }, 6000);

          } else {
          // this.message = response.errors[0].errorMessage;

          for (let index = 0; index < response.errors.length; index++) {
            this.message = this.message + response.errors[index].errorMessage;
          }

        }
        setTimeout(() => {
          this.message = '';
        }, 5000);




      });




    }

  }


}