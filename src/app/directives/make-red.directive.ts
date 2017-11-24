import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[makeRed]'
})
export class MakeRedDirective {

    @HostBinding ('style.backgroundColor') bc;
    constructor(private elRef:ElementRef) {
    }

    @HostListener('click')
    itemCliked() {
        if (this.bc ==='red') {
            this.bc= null;
        } else {
            this.bc = 'red'
        }

    }
}
