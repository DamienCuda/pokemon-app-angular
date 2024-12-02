import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    
    this.setHeight(this.defaultHeight);
    this.setBorderColor(this.initialColor);
  }

  @Input('pokemonBorderCard') borderColor: string|undefined ;

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorderColor(this.borderColor || this.defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorderColor(this.initialColor);
  }

  setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorderColor(color: string){
    this.el.nativeElement.style.border = `solid 4px ${color}`
  }


}
