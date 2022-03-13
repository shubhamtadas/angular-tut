import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEl]'
})
export class RedElDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor ="#9696d9";
    el.nativeElement.style.color ="red";
    el.nativeElement.style.font ="italic bold 20px arial,serif";
   }

}
