import { Component, Input, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  standalone: true,
  imports: [NgxChartsModule],
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {
  @Input() produtos: any= [];

  mediaPreco = 0;
  mediaAvaliacao = 0;
  totalEstoque = 0;

  melhorCustoBeneficio?: any;
  melhorDescricao?: any;
  top3Avaliacao: any[] = [];

  produtosPorCategoria: any = [];

  // Config gráfico
  view: [number, number] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Categoria';
  showYAxisLabel = true;
  yAxisLabel = 'Quantidade';

  ngOnInit() {
    if (!this.produtos.length) return;

    this.calcularMetricas();
  }

  private calcularMetricas() {
    this.calcularMediaPreco();
    this.calcularMediaAvaliacao();
    this.calcularTotalEstoque();
    this.calcularProdutosPorCategoria();
    this.calcularMelhorCustoBeneficio();
    this.calcularMelhorDescricao();
    this.calcularTop3Avaliacao();
  }

  private calcularMediaPreco() {
    const total = this.produtos.reduce((acc:any, p:any) => acc + p.price, 0);
    this.mediaPreco = total / this.produtos.length;
  }

  private calcularMediaAvaliacao() {
    const total = this.produtos.reduce((acc:any, p:any) => acc + p.rating, 0);
    this.mediaAvaliacao = total / this.produtos.length;
  }

  private calcularTotalEstoque() {
    // Pode ser refinado para só produtos "Em estoque"
    this.totalEstoque = this.produtos.length;
  }

  private calcularProdutosPorCategoria() {
    const count = this.produtos.reduce((acc:any, p:any) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    this.produtosPorCategoria = Object.entries(count).map(([name, value]) => ({ name, value }));
  }

  private calcularMelhorCustoBeneficio() {
    this.melhorCustoBeneficio = this.produtos.reduce((melhor:any, atual:any) => {
      const cbMelhor = melhor.rating / melhor.price;
      const cbAtual = atual.rating / atual.price;
      return cbAtual > cbMelhor ? atual : melhor;
    });
  }

  private calcularMelhorDescricao() {
    this.melhorDescricao = this.produtos.reduce((melhor:any, atual:any) => {
      if (!melhor.ratingDescription) return atual;
      if (!atual.ratingDescription) return melhor;
      return atual.rating > melhor.rating ? atual : melhor;
    });
  }

  private calcularTop3Avaliacao() {
    this.top3Avaliacao = [...this.produtos]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3);
  }
}
