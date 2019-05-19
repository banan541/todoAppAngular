import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes'
  password = ''
  errorMessage = 'Invalid credential'
  invalidLogin = false

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username);
    // console.log(this.password);
    if(this.username === "in28minutes" && this.password === 'dummy')
    {
      this.invalidLogin = false
    } else  {
      this.invalidLogin = true
    }
  }

}
