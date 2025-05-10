import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class  ProjectComponent implements OnInit {
  @Input() public title: string = "";
  @Input() public image: string = "";
  @Input() public buttonLink: string = "";
  @Input() public buttonText: string = "";
  @Input() public project: "" | "semaphore" = "";

  ngOnInit(): void {
    if(this.buttonLink == 'assets/relatorio.pdf'){
      const link = document.createElement('a');
    link.href = 'assets/relatorio.pdf';
    link.download = 'relatorio.pdf';
    link.click();
    }
  }
  
}
