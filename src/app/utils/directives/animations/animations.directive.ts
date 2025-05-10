import {
  Directive,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appAnimate]',
})
export class AnimationsDirective implements OnChanges {
  @Input('appAnimate') animationClass!: string;
  @Output() animationEnd = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['animationClass'] && changes['animationClass'].currentValue) {
      const newClass = changes['animationClass'].currentValue;
      this.applyAnimation(newClass);
    }
  }

  private applyAnimation(animationClass: string) {
    const element = this.el.nativeElement;

    element.classList.forEach((cls: string) => {
      if (cls.startsWith('animate-')) {
        element.classList.remove(cls);
      }
    });

    element.classList.add(animationClass);

    setTimeout(() => {
      element.classList.remove(animationClass);

      //add here the specific condition for emit end of animation
      if (animationClass == 'side-off') this.animationEnd.emit(true);
    }, 500);
  }
}
