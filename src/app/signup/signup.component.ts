import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  submitted: boolean = false;

  onSubmit(form: NgForm) {
    this.submitted = true;
    if ( this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    else if( this.username === "" || this.email === "" || this.password === "" || this.confirmPassword === "") {
      alert('Please fill out all fields!');
      return;
    }
    if (form.valid) {
      console.log('Username: ' + this.username);
    console.log('Email: ' + this.email);
    console.log('Password: ' + this.password);
    
    alert('You have successfully signed up!');
    }
  }

}