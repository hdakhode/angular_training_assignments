import {Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

// Directive properties
// selector: the custom attribute name that will be applied on
// UI element. If the attribute is used for property binding then
// the selector will have proprty binding syntax [<SELECTOR-NAME>]

// use the following classes for HTML Element Reference and the Rendering
// ElementRef: Class to refer HTML element to apply directive
// Renderer2 : Class to define rendering based on the directive

@Directive({
  selector: '[setColor]'
})
export class ColorDirective {
   constructor(private ele: ElementRef, private renderer: Renderer2){
   }

   // define input property for the directive that will accept data
   // from HTML element using Property Binding
   // IMP** --> This property must map with directive selector
   // e.g. <div [setColor]="<value>"></div>

   @Input('setColor') setColor: string;

   // logic for directive
   private applyColor(color: string): void {
      this.renderer.setStyle(this.ele.nativeElement,
         'backgroundColor',
         color);
   }

   // host events inside the directive those will cause the
   // directive to be executed / activated and its logic to execute

   @HostListener('mouseenter')
   onmouseenter(): void {
     this.applyColor(this.setColor);
   }

   @HostListener('mouseleave')
   onmouseleave(): void {
    this.applyColor(null);
   }
}
