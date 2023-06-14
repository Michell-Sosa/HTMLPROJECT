import { Component } from '@angular/core';
import { LoginData } from './classes/loginData.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userData : LoginData;
  
  constructor(){
    this.userData = new LoginData();
  }

  login(){
    console.log(this.userData);
  }
}
