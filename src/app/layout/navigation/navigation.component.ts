import { Component, OnInit } from '@angular/core';
import { ChartComponent } from '../../components/chart/chart.component';
import { SoccerFieldComponent } from '../../components/workalone/soccer-field/soccer-field.component';
import { InputComponent } from '../../components/input/containers/input.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataViewComponent } from '../../components/data-view/data-view.component';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ExcelExportService } from '../../services/excel-export.service';
import { MetricsComponent } from '../../components/metrics/metrics.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    ChartComponent,
    InputComponent,
    DataViewComponent,
    MetricsComponent
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent implements OnInit {
  public form!: FormGroup;
  public items: any;

produtosMockados = [
  {
    name: 'Teclado Mecânico RGB',
    subtitle: 'Switch Azul, iluminação personalizável',
    ratingDescription: 'Excelente qualidade',
    rating: 4.8,
    price: 299.99,
    category: 'Periféricos',
    stock: 'Em estoque',
    images: ['https://example.com/img1.jpg']
  },
  {
    name: 'Mouse Gamer 16000 DPI',
    subtitle: 'Sensor óptico, 7 botões',
    ratingDescription: 'Ótimo custo-benefício',
    rating: 4.5,
    price: 149.90,
    category: 'Periféricos',
    stock: 'Estoque limitado',
    images: ['https://example.com/img2.jpg']
  },
  {
    name: 'Monitor 24" Full HD',
    subtitle: 'Painel IPS, 75Hz',
    ratingDescription: 'Imagem nítida',
    rating: 4.2,
    price: 899.00,
    category: 'Monitores',
    stock: 'Fora de estoque',
    images: ['https://example.com/img3.jpg']
  },
  {
    name: 'Headset Gamer 7.1',
    subtitle: 'Som surround, microfone removível',
    ratingDescription: 'Confortável e potente',
    rating: 4.6,
    price: 229.90,
    category: 'Áudio',
    stock: 'Em estoque',
    images: ['https://example.com/img4.jpg']
  },
  {
    name: 'SSD 1TB NVMe',
    subtitle: 'Alta velocidade, confiável',
    ratingDescription: 'Ótimo para jogos',
    rating: 4.9,
    price: 599.00,
    category: 'Armazenamento',
    stock: 'Em estoque',
    images: ['https://example.com/img5.jpg']
  },
  {
    name: 'Placa de Vídeo RTX 4070',
    subtitle: 'Ray tracing, 12GB GDDR6X',
    ratingDescription: 'Performance top',
    rating: 4.7,
    price: 4299.00,
    category: 'Componentes',
    stock: 'Estoque limitado',
    images: ['https://example.com/img6.jpg']
  },
  {
    name: 'Fonte 650W 80 Plus Bronze',
    subtitle: 'Eficiente e silenciosa',
    ratingDescription: 'Ótima relação custo-benefício',
    rating: 4.3,
    price: 399.00,
    category: 'Componentes',
    stock: 'Em estoque',
    images: ['https://example.com/img7.jpg']
  },
  {
    name: 'Gabinete Mid Tower',
    subtitle: 'Ventilação otimizada, vidro temperado',
    ratingDescription: 'Design elegante',
    rating: 4.0,
    price: 299.00,
    category: 'Gabinetes',
    stock: 'Em estoque',
    images: ['https://example.com/img8.jpg']
  },
];



  
  constructor(private httpClient: HttpClient) {}

    
    async ngOnInit() {
    this.form = new FormGroup({
      product: new FormControl<string | null>(''),
    });
  }

  async search() {
    const item = this.form.value.product;
    this.items = await firstValueFrom(
      this.httpClient.get(
        `http://localhost:3000/price-insight?url=${item}`
      )
    );
    // `http://localhost:3000/price-insight?url=https://lista.mercadolivre.com.br/${item}`
    // https://shopee.com.br/search?keyword=subwoofer%20bravox%2010p%27


    console.log('log do inputbalu: ', this.items);
  }




}
