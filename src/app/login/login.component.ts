import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

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

  //Router
  //Angular.giveMeRouter
  //Dependency Injection

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username);
    // console.log(this.password);
    if(this.username === "in28minutes" && this.password === 'dummy')
    //Redirect to Welcome page
    {
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    } else  {
      this.invalidLogin = true
    }
  }

}
