import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'youtubeUrl'})
export class youtubeUrlPipe implements PipeTransform {
  transform(url: string) {
    let result = url.match(/(?:(?:com\/watch\?v=)|(?:be\/))(.*?)$/);
    if (result.length > 1) {
      return 'http://img.youtube.com/vi/' + result[1] + '/0.jpg';
    }
  }
}
