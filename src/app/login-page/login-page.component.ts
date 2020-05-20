import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }
  username: string;
password: string;
result:boolean=null;
  ngOnInit() {
  }
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
      this.router.navigate([`/success`])
    }else {
      alert("Invalid credentials");
      // this.result=false;
    }
  }
  
}
