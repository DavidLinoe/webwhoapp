import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/containers/header.component';
import { ColorService } from './utils/services/color.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, FormsModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public selectedColor = '';
  public selectedTextColor = '';
  constructor(public colorService: ColorService) {}

  ngOnInit(): void {//todo: save in storage color
   
  }
  changeColor() {
    this.colorService.changeColor(this.selectedColor);
  }
  changeTextColor() {
    this.colorService.changeTextColor(this.selectedTextColor);
  }
}
