import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private _elementRef: ElementRef) {
    //el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseenter') onMouseEnter() {
      this.highlight('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
      this.highlight('');
  }

  private highlight(color: string) {
      this._elementRef.nativeElement.style.backgroundColor = color;
  }
}