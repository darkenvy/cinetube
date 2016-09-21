import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { HomePage } from './home/home';
import { GenreService } from './home/genre.service';


@Component({
  templateUrl: 'build/pages/main.html',
  providers: [ GenreService ]
})
export class mainPage {
  homePage: any = HomePage;
  genre: string;
  changeGenre;

  constructor(public events: Events, public navCtrl: NavController, genreSvc: GenreService) {
    this.changeGenre = genreSvc.change;
    this.genre = genreSvc.genre;
  }

}
