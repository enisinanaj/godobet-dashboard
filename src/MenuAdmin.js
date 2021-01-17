const MenuAdmin = [
  {
    heading: "Statistiche",
    role: 4,
  },
  {
    name: "Dashboard",
    icon: "icon-graph",
    path: "/dashboard",
    role: 4,
  },
  {
    name: "Abbonamenti",
    icon: "icon-people",
    path: "/mySubscribers",
    role: 5,
  },
  {
    heading: "Gestione servizi",
    role: 5,
  },
  {
    name: "I miei pacchetti",
    icon: "icon-layers",
    path: "/myServices",
    role: 5,
  },
  {
    name: "Le mie schedine",
    icon: "icon-grid",
    path: "/allPools",
    role: 5,
  },
  {
    heading: "Abbonamenti",
    role: 4,
  },
  {
    name: "I miei abbonamenti",
    icon: "icon-people",
    path: "/subscriptions",
    role: 4,
  },
  {
    name: "I miei pacchetti",
    icon: "icon-layers",
    path: "/subscriberServices",
    role: 10000, //disabled for now
  },
  {
    name: "Tutte le schedine",
    icon: "icon-grid",
    path: "/allSubscriberPools",
    role: 4,
  },
  {
    heading: "Marketplace",
    role: 0,
  },
  {
    name: "Sfoglia tutti i pacchetti",
    icon: "icon-organization",
    path: "/allServices",
    role: 0,
  },
  {
    heading: "Amministrazione",
    role: 6,
  },
  {
    name: "Gestione Utenti",
    icon: "icon-people",
    path: "/tipstersList",
    role: 6,
  },
  {
    heading: "Impostazioni",
    role: 0,
  },
  {
    name: "Profilo",
    icon: "icon-user",
    path: "/profile",
    role: 0,
  },
];

export default MenuAdmin;
