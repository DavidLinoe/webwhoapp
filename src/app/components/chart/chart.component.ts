import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [RouterLink,NgxChartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  view: [number, number] = [700, 400]; // Tamanho do gráfico

  // Dados do gráfico
  data = [
    { name: 'Angular', value: 5000 },
    { name: 'React', value: 8000 },
    { name: 'Vue', value: 3000 }
  ];

  // Opções de estilo
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Framework';
  showYAxisLabel = true;
  yAxisLabel = 'Popularidade';
  
}
