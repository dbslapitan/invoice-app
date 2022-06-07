import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[toggleUnless]'
})
export class ToggleUnlessDirective implements OnInit{

  @Input() toggleUnless: HTMLElement[] = [];
  isChecked = false;

  @HostListener('change') updateIsChecked(){
    this.isChecked = this.elemRef.nativeElement.checked;
  }

  @HostListener('document:click', ['$event']) toggle(event: Event){
    let isWithin = this.toggleUnless.some(htmlElement => {
      return htmlElement.contains(event.target as HTMLElement);
    });
    if( this.isChecked && !isWithin){
      this.elemRef.nativeElement.checked = false;
    }
  }

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
      this.isChecked = this.elemRef.nativeElement.checked;
  }

}
