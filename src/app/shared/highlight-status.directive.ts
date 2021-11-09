import { AfterViewInit, Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[highlightStatus]'
})
export class HighlightStatusDirective implements AfterViewInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.setStatusColor(this.elementRef.nativeElement.innerHTML);
  }

  private setStatusColor(status: string): void {
    switch (status) {
      case 'DO WYNAJĘCIA':
          this.renderer.setStyle(this.elementRef.nativeElement, 'color', `green`);
          break;
      case 'NA SPRZEDAŻ':
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', `green`);
          break;
      case 'ZAREZERWOWANY':
          this.renderer.setStyle(this.elementRef.nativeElement, 'color', `orange`);
          break;
      case 'WYNAJĘTY':
          this.renderer.setStyle(this.elementRef.nativeElement, 'color', `red`);
          break;
      case 'SPRZEDANY':
          this.renderer.setStyle(this.elementRef.nativeElement, 'color', `red`);
          break;
      default:
          break;
   }
  }
}
