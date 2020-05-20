import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public first=true;
  public username;
  public password;
  result: boolean;
  ngOnit(){
    
  }
  public login()  {
    if(this.username == 'admin' && this.password == 'admin'){
      this.result=true;
      this.first=false;
    }else {
      alert("Invalid credentials");
      this.result=false;
    }
  }

}
