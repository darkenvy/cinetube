import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AjaxComponent } from './ajax.component';


@Component({
  directives: [AjaxComponent],
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
}
