import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

interface Step {
  name: string;
  description: string;
  completed: boolean;
}
@Component({
  selector: 'semaphore-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class SemaphoreProgressComponent  {
// Definindo as etapas do roadmap
steps: Step[] = [
  { name: 'Planejamento e Arquitetura', description: 'Definir a arquitetura do sistema e escolher as tecnologias, incluindo o ESP32, ESP32-CAM, e a API Python com OpenCV e YOLO.', completed: true },
  { name: 'Prototipação em Formato de Maquete', description: 'Construção da maquete simulando o fluxo de veículos e ajustando os semáforos com base nos dados. Testes para validar o conceito inicial.', completed: true },
  { name: 'Ajustes e Otimizações', description: 'Ajustes realizados após os testes iniciais, com melhorias nas câmeras e otimização da arquitetura do sistema.', completed: true },
  { name: 'Simulação em Condições Reais com Veículos', description: 'Teste com veículos reais para validar a precisão das câmeras e a eficácia do ajuste dos semáforos.', completed: true },
  { name: 'Desenvolvimento da Interface de Usuário', description: 'Reestruturação da interface de usuário com Angular 18, para exibição dos dados em tempo real e ajustes do sistema.', completed: true },
  { name: 'Implantação e Monitoramento', description: 'Implantação do sistema no ambiente real, com monitoramento contínuo e ajustes conforme a densidade do tráfego.', completed: false },
];

get progress() {
  const completedSteps = this.steps.filter(step => step.completed).length;
  return (completedSteps / this.steps.length) * 100;
}
}
