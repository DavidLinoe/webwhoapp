import { Component, Input } from '@angular/core';
import { SidebarComponent } from '../../sidebar/containers/sidebar.component';
import { AnimationsDirective } from '../../../utils/directives/animations/animations.directive';
import { Router } from '@angular/router';
import { HeaderNode } from '../models/header.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SidebarComponent, AnimationsDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() public labels: HeaderNode[] = [];
  @Input() public title: string = '';

  public toggleNavbar: boolean = false;

  constructor(public router: Router) {}
}
