import { Component } from '@angular/core';
import { Icons } from '../../../utils/icons/icons';

@Component({
  selector: 'app-soccer-field',
  imports: [],
  templateUrl: './soccer-field.component.html',
  standalone:true,
  styleUrl: './soccer-field.component.scss'
})
export class SoccerFieldComponent {
  public items = [
    {
      label: 'Início',
      icon: Icons.HOME,
      link: '/home',
    },
    {
      label: 'Espaços',
      icon: Icons.SETTINGS,
      link: '/spaces',
  
    },
    {
      label: 'Pagamentos',
      icon: Icons.SETTINGS,
      link: '/payments',
    },
    {
      label: 'Avaliações',
      icon: Icons.STAR,
      link: '/reviews',

    },
    {
      label: 'Perfil',
      icon: Icons.USER,
      link: '/profile',
  
    },
    {
      label: 'Suporte',
      icon: Icons.SETTINGS,
      link: '/support',
     
    },
    {
      label: 'Configurações',
      icon: Icons.SETTINGS,
      link: '/settings',
    },
  ];
}
