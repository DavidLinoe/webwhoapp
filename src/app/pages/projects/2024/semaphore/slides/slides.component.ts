import { Component } from '@angular/core';
import { semaphoreSlides } from '../semaphore.const';
import { SlideComponent } from '../../../../../components/slide/slide.component';

@Component({
  selector: 'semaphore-slides',
  standalone: true,
  imports: [SlideComponent],
  templateUrl: './slides.component.html',
  styleUrl: './slides.component.scss'
})
export class SemaphoreSlidesComponent {
  public projectSections = semaphoreSlides

}
