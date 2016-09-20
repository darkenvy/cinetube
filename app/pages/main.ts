import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from './home/home'


@Component({
  templateUrl: 'build/pages/main.html'
})
export class mainPage {
  homePage: any = HomePage;

  constructor(public navCtrl: NavController) {

  }
}
