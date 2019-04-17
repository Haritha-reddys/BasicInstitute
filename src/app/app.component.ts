import { Component } from '@angular/core';
import { SigninService } from './signin/signin.service';
import { NavigationStart, NavigationEnd, Router, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'jobconsultancy';
  loggedUser = 'Admin'
  isLogged: boolean = false;


  constructor(private signinService: SigninService, private router: Router) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {

        if (event.url !== '/signin' && event.url !== '/signup') {
          this.isLogged = new Boolean(sessionStorage.getItem('isValid')).valueOf();
          if (this.isLogged == false) {
            this.router.navigate(['/signin'])
          }
        }
        console.log("NavigationStart")

      }
      if (event instanceof NavigationEnd) {
        console.log("NavigationEnd")

      }

      if (event instanceof NavigationError) {
        console.log(event.error)

      }
    });

  }
  ngOnInit() {
    this.isLogged = new Boolean(sessionStorage.getItem('isValid')).valueOf();
    this.signinService.loginPub.subscribe(data => {
    setTimeout(() => {
      this.isLogged = data;
    }, 500);
    })
  }
}




