import { Component, Inject } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { Http ,Headers , HTTP_PROVIDERS } from '@angular/http';
import { youtubeUrlPipe } from './youtubeUrl.pipe';
import { GenreService } from './genre.service';
import 'rxjs/Rx';

var testData2000 = [{"name":"The Wrestler - Starring Mickey Rourke (2008) [720P]","link":"https://www.youtube.com/watch?v=isuY3Xg3Th4"},{"name":"Double Down (2005) [480p]","link":"https://youtu.be/O_eSGhRCdgo"},{"name":"Van Wilder (2002) [720p]","link":"https://www.youtube.com/watch?v=6Qb-AYqkNUE"},{"name":"Day of the wacko (2002) [360] Polish, English subs in CC","link":"https://www.youtube.com/watch?v=MmQqpEy96r4"},{"name":"Daddy and Them (2001) [240p] looks oK!","link":"https://www.youtube.com/watch?v=IIqr0GYfXx8"},{"name":"Nuremberg (2000) [360p] - A TV movie about the Nuremberg trials starring Alec Baldwin","link":"https://www.youtube.com/watch?v=VnqgCQ7Uk8g"},{"name":"The Other Me (2000) [480p]","link":"https://www.youtube.com/watch?v=RDghQWTpfmg"},{"name":"A Day Without a Mexican (2004) [240p]","link":"http://www.youtube.com/watch?v=3Hf8hS1G9OU"},{"name":"Derren Brown: The Heist (2006) [360p]","link":"http://www.youtube.com/watch?v=PaHbACoYNSA"},{"name":"5 Centimeters Per Second (2007) [1080p]","link":"https://www.youtube.com/watch?v=iVbnt4vQE6w"},{"name":"American Splendor (2003) [480p]","link":"https://youtu.be/t7Ktb1D4NFE"},{"name":"Chuck Jones: Extremes and In-Betweens - A Life in Animation (2000) [360p]","link":"http://www.youtube.com/watch?v=HhMcbtGX2Q0"},{"name":"Demobbed (2000)[640p] Russian military comedy w/best english subs ever.","link":"https://www.youtube.com/watch?v=cVyDqY56yL0"},{"name":"Love Liza (2002) [360p]","link":"https://www.youtube.com/watch?v=aQuaH9PEyeA?reddit"},{"name":"Dear Zachary (2008) [1080p]","link":"https://www.youtube.com/watch?v=8DZlbA-8dRo"},{"name":"The Warlords [投名狀] (2007) [1080p] - Great movie W/ jet Li, Andy Lau and Takeshi Kaneshiro","link":"https://www.youtube.com/watch?v=LqmmPmuoCD8"},{"name":"Moog (2004) [480p]","link":"https://www.youtube.com/watch?v=y5HRa9nEVVUhttps://www.youtube.com/watch?v=y5HRa9nEVVU"},{"name":"Dogville - Lars Von Trier (2003) [720p]","link":"https://www.youtube.com/watch?v=4xx7T9FgJ00"},{"name":"Seraphine (2008) [480p] [FRENCH] [ENGLISH SUBS]","link":"http://www.youtube.com/watch?v=rjMQV0FFGSs"},{"name":"Return to the Batcave: The Misadventures of Adam and Burt (2003) [480p]","link":"http://www.youtube.com/watch?v=fC-efhnPdKo"},{"name":"Hacking Democracy (2006) [240p]","link":"https://www.youtube.com/watch?v=eFJeVsOy5Xo"},{"name":"Ursinho da Pesada (2008) [480p]","link":"https://www.youtube.com/watch?v=z8s-agVDrEg"},{"name":"Eloise at the Plaza (2003) [240p]","link":"https://www.youtube.com/watch?v=BlvQPsFtAEY"},{"name":"Crooked Features (2005) [480p]","link":"https://www.youtube.com/watch?v=SQmsQ_3W6qM"},{"name":"Dark Days (2000) [480p]","link":"http://www.youtube.com/watch?v=cTNeG9m_3Uw"}];
var testData1920 = [{"name":"The General (1926) [480p]","link":"https://www.youtube.com/watch?v=ilPk-SCHv30"},{"name":"The Three Musketeers (1921) [240p]","link":"https://youtu.be/IlkTP3zjbA0?t=6"},{"name":"The Cameraman (1928) [720p]","link":"https://www.youtube.com/watch?v=set8aZUDvIs"},{"name":"Battleship Potemkin (1925) [240p]","link":"https://www.youtube.com/watch?v=8hBUigQagcU"},{"name":"Steamboat Bill Jr. with Buster Keaton (1928) [480p]","link":"https://www.youtube.com/watch?v=ZIWN5V_qZdI"},{"name":"The Monkey Talks (1927)[cam]","link":"https://www.youtube.com/watch?v=cP7E4UT3yuk"},{"name":"Paris Bound (1929) [480p]","link":"https://www.youtube.com/watch?v=uuAZSlD0CAU"},{"name":"Hallelujah (1929) [360p]","link":"https://www.youtube.com/watch?v=mcSrnkwiwEM"},{"name":"The Dance of Life (1929) [480p]","link":"https://www.youtube.com/watch?v=M11o9ov0nYw"},{"name":"Sergei Eisenstein: Strike (1925) [360p]","link":"https://www.youtube.com/watch?v=89xFy1H0UbA"},{"name":"Romance of a Fruit Peddler (1922) [240p]","link":"https://www.youtube.com/watch?v=1MNPe4CcvPg"},{"name":"Sally of the Sawdust (1925) [480p]","link":"https://www.youtube.com/watch?v=3_9Y9Q5FLvo"}];

@Component({
  templateUrl: 'build/pages/home/home.html',
  pipes: [youtubeUrlPipe],
  viewProviders: [HTTP_PROVIDERS],
  styles: [`
    img {
      width: 100%;
      height: auto;
    }
  `]
})
export class HomePage {
  http: Http;
  ajaxData;
  selectedGenre: string;

  constructor(public events: Events, http: Http, genreSvc: GenreService) {
    this.selectedGenre = genreSvc.genre; // Load genre from service to var
    let cleanData = (data) => JSON.parse(data._body)
    this.ajaxData = testData2000;
    // http.get('http://localhost:8100/api')
    //   .subscribe(data => this.ajaxData = cleanData(data)); // Subscribe to the observable to get the parsed people object and attach it to the component
    //   // .map(res => res.json()) // Call map on the response observable to get the parsed people object
    this.events.subscribe('genreChanged', (genre) => {
      this.selectedGenre = genre;
    })
  }


}




// constructor(public navCtrl: NavController) {}
// selector: 'ajax',
// templateUrl: 'build/pages/home/partials/ajax-movie-item.html',
// directives: [AjaxComponent],
// template: 'woohoo!',
// providers: [HTTP_PROVIDERS]


