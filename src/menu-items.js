export default {
    items: [
        {
            id: 'menu utente',
            title: 'Menu utente',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    icon: 'feather icon-home',
                    url: '/dashboard/default',
                    role: 4,
                },
                {
                    id: 'pending-tips',
                    title: 'Pending Tips',
                    type: 'item',
                    icon: 'feather icon-clock',
                    url: '/dashboard/pending-tips',
                    role: 4,
                },
                {
                    id: 'balance',
                    title: 'Bilancio',
                    type: 'item',
                    icon: 'feather icon-credit-card',
                    url: '/dashboard/balance',
                    role: 4,
                },
                {
                    id: 'active-services',
                    title: 'Servizi attivi',
                    type: 'item',
                    icon: 'feather icon-printer',
                    url: '/dashboard/all-services',
                    role: 4,
                },
                {
                    id: 'manage',
                    title: 'Gestione',
                    type: 'collapse',
                    icon: 'feather icon-settings',
                    role: 5,
                    children: [
                        {
                            id: 'my-services',
                            title: 'I miei servizi',
                            type: 'item',
                            icon: 'feather icon-book',
                            url: '/dashboard/subscriber-services',
                            role: 5,
                        },
                        {
                            id: 'my-tips',
                            title: 'I miei Tip',
                            type: 'item',
                            icon: 'feather icon-bookmark',
                            url: '/dashboard/subscriber-pools',
                            role: 5,
                        },
                    ]
                },
                {
                    id: 'admin',
                    title: 'Amministratore',
                    type: 'collapse',
                    icon: 'feather icon-settings',
                    hidden: true,
                    role: 5,
                    children: [
                        {
                            id: 'Users',
                            title: 'Utenti',
                            type: 'item',
                            icon: 'feather icon-users',
                            url: '/users',
                            role: 5,
                            hidden: true,
                        },
                    ]
                },
                {
                    id: 'account',
                    title: 'Impostazioni profilo',
                    type: 'item',
                    icon: 'feather icon-user',
                    url: '/settings',
                    role: 0
                }
            ]
        }
    ]
}