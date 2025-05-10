import { Component } from '@angular/core';
import { ProjectComponent } from '../../components/project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [ProjectComponent]
})
export class ProjectsComponent  {

}
