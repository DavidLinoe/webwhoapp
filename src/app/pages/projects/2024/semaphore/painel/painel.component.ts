import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, firstValueFrom } from 'rxjs';

@Component({
  selector: 'semaphore-painel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class SemaphorePainelComponent implements AfterViewInit, OnInit, OnDestroy {

  @ViewChildren('semaforoCanvas1, semaforoCanvas2, semaforoCanvas3') canvasRefs!: QueryList<ElementRef<HTMLCanvasElement>>;
  private ctxList: CanvasRenderingContext2D[] = [];

  semaforos = [
    { estado: 'vermelho', ligado: false, intervalo: null as number | null },
    { estado: 'vermelho', ligado: false, intervalo: null as number | null },
    { estado: 'vermelho', ligado: false, intervalo: null as number | null }
  ];

  ngAfterViewInit() {
    this.canvasRefs.forEach(canvasRef => {
      const ctx = canvasRef.nativeElement.getContext('2d');
      if (ctx) this.ctxList.push(ctx);
    });
    this.desenharSemaforos();
  }

  desenharSemaforos() {
    this.semaforos.forEach((semaforo, index) => {
      const ctx = this.ctxList[index];
      if (ctx) {
        ctx.clearRect(0, 0, 100, 300);
        this.desenharLuz(ctx, 50, 50, semaforo.ligado && semaforo.estado === 'vermelho' ? 'red' : 'gray');
        this.desenharLuz(ctx, 50, 150, semaforo.ligado && semaforo.estado === 'amarelo' ? 'yellow' : 'gray');
        this.desenharLuz(ctx, 50, 250, semaforo.ligado && semaforo.estado === 'verde' ? 'green' : 'gray');
      }
    });
  }

  desenharLuz(ctx: CanvasRenderingContext2D, x: number, y: number, color: string) {
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  }

  alternarEstado(semaforoIndex: number) {
    const semaforo = this.semaforos[semaforoIndex];
    if (semaforo.ligado) {
      let delay;

      if (semaforo.estado === 'vermelho') {
        semaforo.estado = 'verde';
        delay = 10000;
      } else if (semaforo.estado === 'verde') {
        semaforo.estado = 'amarelo';
        delay = 5000;
      } else {
        semaforo.estado = 'vermelho';
        delay = 15000;
      }

      this.desenharSemaforos();
      semaforo.intervalo = setTimeout(() => this.alternarEstado(semaforoIndex), delay) as unknown as number;
    }
  }

  ligarDesligar(semaforoIndex: number) {
    const semaforo = this.semaforos[semaforoIndex - 1];
    semaforo.ligado = !semaforo.ligado;

    if (semaforo.ligado) {
      semaforo.estado = 'vermelho';
      this.desenharSemaforos();
      this.alternarEstado(semaforoIndex - 1);
    } else {
      if (semaforo.intervalo !== null) clearTimeout(semaforo.intervalo);
      semaforo.intervalo = null; // Reseta o intervalo
      this.desenharSemaforos();
    }
  }

  public dashForm1!: FormGroup;
  public dashForm2!: FormGroup;
  public dashForm3!: FormGroup;
  public apiUrl = 'http://127.0.0.1:5001/';
  private ciclo: number = 30000; // Ciclo de 30 segundos
  private intervalId: any;
  private routerSubscription!: Subscription;

  constructor(
    public http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Inicializa os três formulários
    this.dashForm1 = this.formBuilder.group({
      prioridade: [''],
      tempo_amarelo: [''],
      tempo_vermelho: [''],
      tempo_verde: [''],
      tempo_total: [''],
      quantidade: ['']
    });

    this.dashForm2 = this.formBuilder.group({
      prioridade: [''],
      tempo_amarelo: [''],
      tempo_vermelho: [''],
      tempo_verde: [''],
      tempo_total: [''],
      quantidade: ['']
    });

    this.dashForm3 = this.formBuilder.group({
      prioridade: [''],
      tempo_amarelo: [''],
      tempo_vermelho: [''],
      tempo_verde: [''],
      tempo_total: [''],
      quantidade: ['']
    });

    // Começa o setInterval para atualizar os dados periodicamente
    // this.startInterval();npm 

    // Monitora as mudanças de rota
  
  }

  ngOnDestroy(): void {
    // Limpa o intervalo ao destruir o componente
    this.clearInterval();
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    this.semaforos.forEach(semaforo => {
      if (semaforo.intervalo !== null) clearTimeout(semaforo.intervalo);
    });
  }

  clearInterval(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      console.log('Intervalo parado');
    }
  }

  async getInsights(id: number, form: FormGroup) {
    try {
      const res: any = await firstValueFrom(
        this.http.get(`${this.apiUrl}semaphore/${id}`)
      );
      if (res) {
        console.log(`Dados do semáforo ${id}: `, res);

        // Atualiza o formulário específico com os valores recebidos
        form.patchValue({
          prioridade: res.prioridade,
          tempo_amarelo: res.tempo_amarelo,
          tempo_vermelho: res.tempo_vermelho,
          tempo_verde: res.tempo_verde,
          tempo_total: res.tempo_total,
          quantidade: res.ultima_quantidade
        });
      }
    } catch (error) {
      console.error(`Erro ao buscar dados do semáforo ${id}: `, error);
    }
  }

  startInterval(): void {
    this.intervalId = setInterval(() => {
      // Faz chamadas para cada semáforo e atualiza o respectivo formulário
      this.getInsights(1, this.dashForm1);
      this.getInsights(2, this.dashForm2);
      this.getInsights(3, this.dashForm3);
    }, this.ciclo);
  }
}
