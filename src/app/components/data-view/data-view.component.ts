import { Component, Input, OnInit } from '@angular/core';
import { ExcelExportService } from '../../services/excel-export.service';

@Component({
  selector: 'app-data-view',
  standalone: true,
  imports: [],
  templateUrl: './data-view.component.html',
  styleUrl: './data-view.component.scss',
})
export class DataViewComponent implements OnInit {
  @Input() public title: string = '';
  @Input() public items: any = [];
  constructor(private excelService: ExcelExportService) {}

  ngOnInit(): void {}
  number(number: number) {
    return Number(number);
  }
    public async exportProdutc(json:Record<string,any>[]){
        this.excelService.exportAsExcelFile(json, 'funcionarios');

  }
}
