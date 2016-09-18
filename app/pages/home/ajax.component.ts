import {Component, Inject} from '@angular/core';
import { Http ,Headers , HTTP_PROVIDERS } from '@angular/http';
import { youtubeUrlPipe } from './youtubeUrl.pipe';
import 'rxjs/Rx';
var testData = [{"name":"The Wrestler - Starring Mickey Rourke (2008) [720P]","link":"https://www.youtube.com/watch?v=isuY3Xg3Th4"},{"name":"Van Wilder (2002) [720p]","link":"https://www.youtube.com/watch?v=6Qb-AYqkNUE"},{"name":"Van Wilder (2002) [720p]","link":"https://www.youtube.com/watch?v=6Qb-AYqkNUE"},{"name":"Daddy and Them (2001) [240p] looks oK!","link":"https://www.youtube.com/watch?v=IIqr0GYfXx8"},{"name":"Daddy and Them (2001) [240p] looks oK!","link":"https://www.youtube.com/watch?v=IIqr0GYfXx8"},{"name":"The Other Me (2000) [480p]","link":"https://www.youtube.com/watch?v=RDghQWTpfmg"},{"name":"The Other Me (2000) [480p]","link":"https://www.youtube.com/watch?v=RDghQWTpfmg"},{"name":"Derren Brown: The Heist (2006) [360p]","link":"http://www.youtube.com/watch?v=PaHbACoYNSA"},{"name":"Derren Brown: The Heist (2006) [360p]","link":"http://www.youtube.com/watch?v=PaHbACoYNSA"},{"name":"American Splendor (2003) [480p]","link":"http://www.youtube.com/watch?v=HhMcbtGX2Q0"},{"name":"American Splendor (2003) [480p]","link":"http://www.youtube.com/watch?v=HhMcbtGX2Q0"},{"name":"Love Liza (2002) [360p]","link":"https://www.youtube.com/watch?v=aQuaH9PEyeA?reddit"},{"name":"Love Liza (2002) [360p]","link":"https://www.youtube.com/watch?v=aQuaH9PEyeA?reddit"},{"name":"The Warlords [投名狀] (2007) [1080p] - Great movie W/ jet Li, Andy Lau and Takeshi Kaneshiro","link":"https://www.youtube.com/watch?v=LqmmPmuoCD8"},{"name":"The Warlords [投名狀] (2007) [1080p] - Great movie W/ jet Li, Andy Lau and Takeshi Kaneshiro","link":"https://www.youtube.com/watch?v=LqmmPmuoCD8"},{"name":"Dogville - Lars Von Trier (2003) [720p]","link":"https://www.youtube.com/watch?v=4xx7T9FgJ00"},{"name":"Dogville - Lars Von Trier (2003) [720p]","link":"https://www.youtube.com/watch?v=4xx7T9FgJ00"},{"name":"Return to the Batcave: The Misadventures of Adam and Burt (2003) [480p]","link":"http://www.youtube.com/watch?v=fC-efhnPdKo"},{"name":"Return to the Batcave: The Misadventures of Adam and Burt (2003) [480p]","link":"http://www.youtube.com/watch?v=fC-efhnPdKo"},{"name":"Ursinho da Pesada (2008) [480p]","link":"https://www.youtube.com/watch?v=z8s-agVDrEg"},{"name":"Ursinho da Pesada (2008) [480p]","link":"https://www.youtube.com/watch?v=z8s-agVDrEg"},{"name":"Crooked Features (2005) [480p]","link":"https://www.youtube.com/watch?v=SQmsQ_3W6qM"},{"name":"Crooked Features (2005) [480p]","link":"https://www.youtube.com/watch?v=SQmsQ_3W6qM"}];

@Component({
  selector: 'ajax',
  templateUrl: 'build/pages/home/partials/ajax-movie-item.html',
  pipes: [youtubeUrlPipe],
  viewProviders: [HTTP_PROVIDERS]
  // template: 'woohoo!',
  // providers: [HTTP_PROVIDERS]
})
export class AjaxComponent {
  http: Http;
  ajaxData;
  constructor(http: Http) {
    let cleanData = (data) => JSON.parse(data._body)
    this.ajaxData = testData
    // http.get('http://localhost:8100/api')
    //   .subscribe(data => this.ajaxData = cleanData(data)); // Subscribe to the observable to get the parsed people object and attach it to the component
    //   // .map(res => res.json()) // Call map on the response observable to get the parsed people object
  }

}
