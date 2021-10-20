import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appHighlight2]'
})
export class HighlighDirective2 {
    constructor(private _elementRef: ElementRef) {
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    }

    private highlight(color: string) {
        this._elementRef.nativeElement.style.backgroundColor = color;
    }
}