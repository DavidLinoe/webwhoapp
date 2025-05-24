import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-view',
  standalone: true,
  imports: [],
  templateUrl: './data-view.component.html',
  styleUrl: './data-view.component.scss',
})
export class DataViewComponent implements OnInit {
  @Input() public title: string = '';

  ngOnInit(): void {}

  public items:any[] = [
    {
      name: 'Shoe 2',
      rating: 5,
      price: 3,
      category: 'clothes',
      stock: 234,
      image:''
    },
    {
      name: 'Sneaker 1',
      rating: 2,
      price: 45,
      category: 'clothes',
      stock: 14,
      image:''
    },
    {
      name: 'Sandal 3',
      rating: 4,
      price: 35,
      category: 'clothes',
      stock: 414,
      image:''

    },
  ];
}
