import { Pipe, PipeTransform } from '@angular/core';
import { faClosedCaptioning } from '@fortawesome/free-solid-svg-icons';
import { element } from 'protractor';

@Pipe({
  name: 'mayuscula'
})
export class MayusculaPipe implements PipeTransform {

  transform(text: string): string {
    const arrayText = Array.from(text);
    let mayus: string;
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < arrayText.length; index++) {
      const ELEMNET = arrayText[0].toUpperCase();
      mayus = ELEMNET;
    }
    arrayText.shift();
    console.log();
    return `${mayus}${arrayText.join('')}`;
  }

}
