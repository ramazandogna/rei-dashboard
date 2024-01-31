export const sideMenuItems = [
  {
    title: 'Dashboard',
    icon: 'i-material-symbols-display-settings-rounded',
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
    icon: 'i-material-symbols-person-pin-rounded',
    to: '/user',
    hasSubMenu: false
  },
  {
    title: 'UI',
    icon: 'i-material-symbols-view-quilt-sharp',
    to: '/ui',
    hasSubMenu: false
  },
  {
    title: 'Erros',
    icon: 'i-material-symbols-partner-reports',
    to: '/errors',
    hasSubMenu: false
  },
  {
    title: 'Modals',
    icon: 'i-material-symbols-deployed-code-update-outline-sharp',
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
    icon: 'i-material-symbols-table-bar-rounded',
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
    title: 'Language',
    to: '',
    hasDropDown: false,
    color: ''
  },
  {
    title: 'Dark',
    to: '',
    hasDropDown: false,
    color: ''
  },
  {
    title: 'Logout',
    hasDropDown: false,
    color: 'text-black',
    logout: 1
  }
]
