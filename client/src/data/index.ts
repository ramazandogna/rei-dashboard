export const sideMenuItems = [
  {
    title: 'Dashboard',
    icon: 'i-material-symbols-connected-tv',
    to: '/profile',
    hasSubMenu: false
  },
  {
    title: 'Dropmenu',
    icon: 'i-material-symbols-event-list',
    hasSubMenu: true,
    subItems: [
      {
        title: 'Sub1',
        to: '/sub1'
      },
      {
        title: 'Sub2',
        to: '/sub2'
      }
    ]
  },
  {
    title: 'Users',
    icon: 'i-material-symbols-person-pin-sharp',
    to: '/users',
    hasSubMenu: false
  },
  {
    title: 'UI',
    icon: 'i-material-symbols-style-outline',
    to: '/ui',
    hasSubMenu: false
  },
  {
    title: 'Errors',
    icon: 'i-material-symbols-error-circle-rounded-sharp',
    to: '/errors',
    hasSubMenu: false
  },
  {
    title: 'Modals',
    icon: 'i-material-symbols-branding-watermark-outline-rounded',
    to: '/modals',
    hasSubMenu: false
  },
  {
    title: 'Forms',
    icon: 'i-material-symbols-dynamic-form',
    to: '/forms',
    hasSubMenu: false
  },
  {
    title: 'Tables',
    icon: 'i-material-symbols-table-chart',
    to: '/tables',
    hasSubMenu: false
  }
]

export const navbarItems = [
  {
    title: 'User - Menu',
    hasDropDown: true,
    subItems: [
      {
        title: 'Alt1',
        to: '/alt1'
      },
      {
        title: 'Alt2',
        to: '/alt2'
      }
    ]
  },
  {
    title: '',
    to: '',
    hasDropDown: false,
    color: '',
    icon: 'i-ph-github-logo-fill'
  },
  {
    // title: 'Dark',
    to: '',
    hasDropDown: false,
    color: '',
    icon: 'i-mdi-theme-light-dark'
  },
  {
    // title: 'Logout',
    hasDropDown: false,
    color: 'text-black',
    logout: 1,
    icon: 'i-solar-logout-2-broken'
  }
]
