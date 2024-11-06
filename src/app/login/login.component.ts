import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  constructor(private alertService : AlertService, private authservice: AuthService,private router: Router) { }

  onSubmit() {
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);
    this.alertService.alertin('You have successfully logged in!');
    this.authservice.login();
    this.router.navigate(['/dashboard']);
  }
}
