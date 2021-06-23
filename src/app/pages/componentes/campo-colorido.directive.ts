import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
    this.renderer.setStyle(this.elementRef.nativeElement, 'color' ,'orange')
    this.renderer.setStyle(this.elementRef.nativeElement, 'mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline' ,'blue')
  }

}
