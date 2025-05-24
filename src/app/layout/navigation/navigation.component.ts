import { Component, OnInit } from '@angular/core';
import { ChartComponent } from '../../components/chart/chart.component';
import { SoccerFieldComponent } from "../../components/workalone/soccer-field/soccer-field.component";
import { InputComponent } from '../../components/input/containers/input.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataViewComponent } from "../../components/data-view/data-view.component";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [ChartComponent, SoccerFieldComponent, InputComponent, DataViewComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
  public form!:FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      product: new FormControl<string | null>(''),
    });
  }
  print(){
    console.log( 'log do inputbalu: ',this.form.value)
  }
  
}
