import { Injectable } from '@angular/core'
import { Events } from 'ionic-angular';

@Injectable()
export class GenreService {
  constructor(public events: Events) {}
  genre = '201';
  // change = function(genre: number) {
  change = function() {
    this.genre = '404';
    this.events.publish('genreChanged', this.genre)
  }
}
