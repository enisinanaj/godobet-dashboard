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
                    role: 0,
                },
                {
                    id: 'pending-tips',
                    title: 'Pending Tips',
                    type: 'item',
                    icon: 'feather icon-clock',
                    url: '/dashboard/pending-tips',
                    role: 0,
                },
                {
                    id: 'balance',
                    title: 'Bilancio',
                    type: 'item',
                    icon: 'feather icon-credit-card',
                    url: '/dashboard/balance',
                    role: 0,
                },
                {
                    id: 'active-services',
                    title: 'Servizi attivi',
                    type: 'item',
                    icon: 'feather icon-printer',
                    url: '/dashboard/allServices',
                    role: 0,
                },
                {
                    id: 'manage',
                    title: 'Gestione',
                    type: 'collapse',
                    icon: 'feather icon-settings',
                    role: 4,
                    children: [
                        {
                            id: 'my-services',
                            title: 'I miei servizi',
                            type: 'item',
                            icon: 'feather icon-book',
                            url: '/dashboard/subscriberServices',
                            role: 4,
                        },
                        {
                            id: 'my-tips',
                            title: 'I miei Tip',
                            type: 'item',
                            icon: 'feather icon-bookmark',
                            url: '/dashboard/allSubscriberPools',
                            role: 4,
                        },
                    ]
                },
            ]
        }
    ]
}