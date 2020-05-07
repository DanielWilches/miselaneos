import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appResultado]'
})
export class ResultadoDirective {
  @Input('appResultado') newColor: string;
  constructor( private elemento: ElementRef ) {
    // elemento.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('mouseenter') mouseEnter(  ) {
    this.resaltar(this.newColor  || 'yellow');
    // this.elemento.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('mouseleave') mouseleave(){
    this.resaltar(null);
  }
  private resaltar(color: string ) {
    this.elemento.nativeElement.style.backgroundColor = color;


  }


}
