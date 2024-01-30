export const sideMenuItems = [
  {
    title: 'Profile',
    iconClass: 'i-material-symbols-account-balance',
    to: '/profile',
    hasSubMenu: false
  },
  {
    title: 'Styles',
    iconClass: 'i-material-symbols-account-balance',
    hasSubMenu: true,
    subItems: [
      {
        title: 'Sub1',
        iconClass: 'i-material-symbols-account-balance',
        to: '/sub1'
      },
      {
        title: 'Sub2',
        iconClass: 'i-material-symbols-account-balance',
        to: '/sub2'
      }
    ]
  },
  {
    title: 'Profile2',
    iconClass: 'i-material-symbols-account-balance',
    to: '/profile',
    hasSubMenu: false
  }
]

export const navbarItems = [
  {
    title: 'Anasayfa',
    to: '/',
    hasDropDown: false,
    color: 'bg-red text-white'
  },
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
    title: 'Profile',
    to: '/profile',
    hasDropDown: false,
    color: 'bg-blue text-white'
  },
  {
    title: 'Logout',
    hasDropDown: false,
    color: 'text-black',
    logout: 1
  }
]
