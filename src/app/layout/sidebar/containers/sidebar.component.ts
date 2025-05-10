import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icons } from '../../../utils/icons/icons';
import { CommonModule } from '@angular/common';
import { AnimationsDirective } from '../../../utils/directives/animations/animations.directive';
import { SIDEBAR_NODES, SidebarNode } from '../models/sidebar.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, AnimationsDirective],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  @Input() public open: boolean = false;
  @Output() public toggle: EventEmitter<any> = new EventEmitter<any>();

  public items: SidebarNode[] = SIDEBAR_NODES;
  public expanded: number | null = 1;
  public index: number = 0;
  public animation: string = 'side-in';

  Icons = Icons;

  constructor(
    public router: Router,
    private title: Title,
    public cdr: ChangeDetectorRef
  ) {
    this.title.setTitle('Price Insigth');
  }

  ngOnInit(): void {}

  public expandLabel(index: number) {
    this.expanded = this.expanded === index ? null : index;
    this.index = index;
  }

  public toggleSidebar() {
    this.toggle.emit();

    this.animation = 'side-in';
  }

  public closeSidebar() {
    this.animation = 'side-off';
  }

  public onAnimationEnd() {
    this.toggleSidebar();
  }
}
