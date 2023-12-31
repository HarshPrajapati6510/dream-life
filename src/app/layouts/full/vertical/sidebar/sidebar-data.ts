import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Analytical',
    iconName: 'aperture',
    route: '/dashboards/dashboard1',
  },
  {
    navCap: 'Apps',
  },
  {
    displayName: 'Chat',
    iconName: 'message-2',
    route: 'apps/chat',
  },
  {
    displayName: 'Calendar',
    iconName: 'calendar-event',
    route: 'apps/calendar',
  },
  {
    displayName: 'Notes',
    iconName: 'note',
    route: 'apps/notes',
  },
  {
    displayName: 'Taskboard',
    iconName: 'checklist',
    route: 'apps/taskboard',
  },
 
  {
    navCap: 'Chart',
  },
  {
    displayName: 'Line',
    iconName: 'chart-line',
    route: '/charts/line',
  },
  {
    displayName: 'Gredient',
    iconName: 'chart-arcs',
    route: '/charts/gredient',
  },
  {
    displayName: 'Area',
    iconName: 'chart-area',
    route: '/charts/area',
  },
  {
    displayName: 'Candlestick',
    iconName: 'chart-candle',
    route: '/charts/candlestick',
  },
  {
    displayName: 'Column',
    iconName: 'chart-dots',
    route: '/charts/column',
  },
  {
    displayName: 'Doughnut & Pie',
    iconName: 'chart-donut-3',
    route: '/charts/doughnut-pie',
  },
  {
    displayName: 'Radialbar & Radar',
    iconName: 'chart-radar',
    route: '/charts/radial-radar',
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'login',
    route: '/authentication',
    children: [
      {
        displayName: 'Side Login',
        iconName: 'point',
        route: '/authentication/side-login',
      },
      {
        displayName: 'Boxed Login',
        iconName: 'point',
        route: '/authentication/boxed-login',
      },
    ],
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication',
    children: [
      {
        displayName: 'Side Login',
        iconName: 'point',
        route: '/authentication/side-register',
      },
      {
        displayName: 'Boxed Login',
        iconName: 'point',
        route: '/authentication/boxed-register',
      },
    ],
  },
  {
    displayName: 'Forgot Password',
    iconName: 'rotate',
    route: '/authentication',
    children: [
      {
        displayName: 'Side Forgot Password',
        iconName: 'point',
        route: '/authentication/side-forgot-pwd',
      },
      {
        displayName: 'Boxed Forgot Password',
        iconName: 'point',
        route: '/authentication/boxed-forgot-pwd',
      },
    ],
  },
  {
    displayName: 'Two Steps',
    iconName: 'zoom-code',
    route: '/authentication',
    children: [
      {
        displayName: 'Side Two Steps',
        iconName: 'point',
        route: '/authentication/side-two-steps',
      },
      {
        displayName: 'Boxed Two Steps',
        iconName: 'point',
        route: '/authentication/boxed-two-steps',
      },
    ],
  },
  {
    displayName: 'Error',
    iconName: 'alert-circle',
    route: '/authentication/error',
  },
  {
    displayName: 'Maintenance',
    iconName: 'settings',
    route: '/authentication/maintenance',
  },
];
