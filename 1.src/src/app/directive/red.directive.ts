import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#FA8072';
    el.nativeElement.style.color = 'white';
 }

}
