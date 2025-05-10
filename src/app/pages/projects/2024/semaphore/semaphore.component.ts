import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectComponent } from '../../../../components/project/project.component';
import { ColorService } from '../../../../utils/services/color.service';

@Component({
  selector: 'app-semaphore',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './semaphore.component.html',
  styleUrl: './semaphore.component.scss'  
})
export class SemaphoreComponent implements OnInit, OnDestroy {

  constructor(public colorService: ColorService) {}

  ngOnInit(): void {
    this.colorService.changeColor('#1a1f19');
    this.colorService.changeTextColor('#089d64');

  }

  ngOnDestroy(): void {
    this.colorService.default();
  }
}
