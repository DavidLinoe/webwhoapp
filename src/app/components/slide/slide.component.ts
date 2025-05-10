import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent  {

  @Input() projectTitle: string = 'Default Title';
  @Input() projectSubtitle: string = 'Default Subtitle';
  @Input() sections: Section[] = [];
}

export interface Section {
  title: string;
  text: string;
  class: string;
  image: string;
  imageWidth: number;
  altText: string;
}
