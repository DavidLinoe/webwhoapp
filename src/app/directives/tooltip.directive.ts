import {
    Directive,
    ElementRef,
    Input,
    Renderer2,
    HostListener,
    OnDestroy,
  } from '@angular/core';
  
  @Directive({
    selector: '[wTooltip]',
  })
  export class TooltipDirective implements OnDestroy {
    @Input('wTooltip') tooltipText = '';
    private tooltipElement: HTMLElement | null = null;
  
    constructor(private el: ElementRef, private renderer: Renderer2) {}
  
    @HostListener('mouseenter', ['$event'])
    onMouseEnter(event: MouseEvent) {
      if (!this.tooltipText) return;
  
      this.tooltipElement = this.renderer.createElement('div');
      this.renderer.addClass(this.tooltipElement, 'tooltip');
      this.renderer.appendChild(document.body, this.tooltipElement);
      this.tooltipElement!.innerText = this.tooltipText;
  
      this.setPosition(event);
      this.renderer.setStyle(this.tooltipElement, 'opacity', '1');
    }
  
    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
      if (this.tooltipElement) {
        this.setPosition(event);
      }
    }
  
    @HostListener('mouseleave')
    onMouseLeave() {
      this.destroyTooltip();
    }
  
    ngOnDestroy(): void {
      this.destroyTooltip();
    }
  
    private setPosition(event: MouseEvent) {
      const offset = 12; // distância acima do cursor
      const tooltipRect = this.tooltipElement!.getBoundingClientRect();
  
      const top = event.clientY - tooltipRect.height - offset;
      const left = event.clientX - tooltipRect.width / 2;
  
      this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
      this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
    }
  
    private destroyTooltip() {
      if (this.tooltipElement) {
        this.renderer.removeChild(document.body, this.tooltipElement);
        this.tooltipElement = null;
      }
    }
  }
  