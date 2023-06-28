import { Component } from '@angular/core';
import { LoginData } from './classes/loginData.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userData : LoginData;
  
  user:number;
  passwrd:number;
  title_system:string;

  constructor(){
    this.userData = new LoginData();

    this.title_system = "sistema;"
    this.user=0;
    this.passwrd=0;
  }

  login(){
    console.log(this.userData);
  }

  validUser(){
    let blankspace;
    blankspace = this.userData.user.includes(' ');

    if(this.userData.user.length >= 0 && this.userData.user.length <= 8 && !blankspace){
      this.user=1;
    }else if(blankspace){
      this.user=2;
    }

    return this.user;
  }

  validPassword(){
    let blankpass;
    blankpass = this.userData.password.includes(' ');

    if(this.userData.password.length >=0 && this.userData.password.length <4 && !blankpass){
      this.passwrd=1;
    }else if(blankpass){
      this.passwrd=2;
    }

    return this.passwrd;
  }
}
