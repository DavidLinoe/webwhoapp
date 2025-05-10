import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Icons } from "../../../utils/icons/icons";

export interface SidebarNode {
    label: string;
    icon: string | IconDefinition;
    link: string;
    children: SidebarNode[];
  }
  
  export const SIDEBAR_NODES: SidebarNode[] = [
    {
      label: 'Início',
      icon: Icons.HOME,
      link: '/home',
      children: [],
    },
    {
      label: 'Agendamentos',
      icon: Icons.SETTINGS,
      link: '/schedule',
      children: [
        {
          label: 'Meus Agendamentos',
          icon: Icons.SETTINGS,
          link: '/schedule/my',
          children: [],
        },
        {
          label: 'Novo Agendamento',
          icon: Icons.SETTINGS,
          link: '/schedule/new',
          children: [],
        },
      ],
    },
    {
      label: 'Espaços',
      icon: Icons.SETTINGS,
      link: '/spaces',
      children: [
        {
          label: 'Disponibilidade',
          icon: Icons.SETTINGS,
          link: '/spaces/availability',
          children: [],
        },
        {
          label: 'Cadastrar Espaço',
          icon: Icons.SETTINGS,
          link: '/spaces/add',
          children: [],
        },
      ],
    },
    {
      label: 'Pagamentos',
      icon: Icons.SETTINGS,
      link: '/payments',
      children: [
        {
          label: 'Meus Meios de Pagamento',
          icon: Icons.SETTINGS,
          link: '/payments/methods',
          children: [],
        },
        {
          label: 'Histórico de Pagamentos',
          icon: Icons.HOME,
          link: '/payments/history',
          children: [],
        },
      ],
    },
    {
      label: 'Avaliações',
      icon: Icons.STAR,
      link: '/reviews',
      children: [
        {
          label: 'Avaliar Espaço',
          icon: Icons.SETTINGS,
          link: '/reviews/add',
          children: [],
        },
        {
          label: 'Minhas Avaliações',
          icon: Icons.SETTINGS,
          link: '/reviews/my',
          children: [],
        },
      ],
    },
    {
      label: 'Perfil',
      icon: Icons.USER,
      link: '/profile',
      children: [
        {
          label: 'Meu Perfil',
          icon: Icons.SETTINGS,
          link: '/profile/edit',
          children: [],
        },
        {
          label: 'Alterar Senha',
          icon: Icons.SETTINGS,
          link: '/profile/change-password',
          children: [],
        },
      ],
    },
    {
      label: 'Suporte',
      icon: Icons.SETTINGS,
      link: '/support',
      children: [
        {
          label: 'FAQs',
          icon: Icons.SETTINGS,
          link: '/support/faqs',
          children: [],
        },
        {
          label: 'Contato',
          icon: Icons.SETTINGS,
          link: '/support/contact',
          children: [],
        },
      ],
    },
    {
      label: 'Configurações',
      icon: Icons.SETTINGS,

      link: '/settings',
      children: [],
    },
  ];