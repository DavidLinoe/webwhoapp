import { Component } from '@angular/core';
import { SoccerFieldComponent } from "../../components/workalone/soccer-field/soccer-field.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SoccerFieldComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
