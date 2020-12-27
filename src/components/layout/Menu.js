const Menu = [
    {
        heading: 'Main Navigation',
        translate: 'sidebar.heading.HEADER'
    },
    {
        name: 'Dashboard',
        icon: 'icon-speedometer',
        path: '/dashboard',
        translate: 'sidebar.nav.DASHBOARD'
    },
    {
        name: 'I miei servizi',
        icon: 'icon-layers',
        path: '/my-services',
    },
    {
        name: 'Abbonamenti',
        icon: 'icon-people',
        path: '/subscribers',
    },
    {
        name: 'Le mie schedine',
        icon: 'icon-grid',
        path: '/myPools',
        label: { value: 30, color: 'success' },
        translate: 'sidebar.nav.MY_POOLS'
    },
    {
        heading: 'Amministrazione',
        translate: 'Amministrazione'
    },
    {
        name: 'Gestione Utenti',
        icon: 'icon-people',
        path: '/tipsters'
    },
    {
        heading: 'Impostazioni',
        translate: 'Impostazioni'
    },
    {
        name: 'Profilo',
        icon: 'icon-user',
        path: '/profile',
        translate: 'sidebar.nav.PROFILE'
    },
    {
        name: 'Tutti i servizi',
        icon: 'icon-organization',
        path: '/services'
    },
    {
        name: 'Bilancio',
        icon: 'icon-graph',
        path: '/books'
    }
];

export default Menu;