import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  login(){
    this.navCtrl.push(LoginPage)
    //agregar lo que investigaron de hacer rootpage "Home" <-- en este caso LOGIN
  }
  register(){
  	this.navCtrl.push(RegisterPage)
  }

}