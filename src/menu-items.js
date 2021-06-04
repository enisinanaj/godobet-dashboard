import React from "react";
import CreateNewServiceButton from "./App/components/CreateNewServiceButton";
import CreateTipButton from "./App/components/CreateTipButton";

export default {
  items: [
    {
      id: "menu utente",
      title: "Menu utente",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
          id: "dashboard",
          title: "Dashboard",
          type: "item",
          icon: "feather icon-home",
          url: "/dashboard/default",
          role: 4,
        },
        {
          id: "pending-tips",
          title: "Tips",
          type: "item",
          icon: "feather icon-inbox",
          url: "/dashboard/pending-tips",
          role: 4,
        },
        {
          id: "balance",
          title: "Bilancio",
          type: "item",
          icon: "feather icon-trending-up",
          url: "/dashboard/balance",
          role: 4,
        },
        {
          id: "active-services",
          title: "Iscrizioni",
          type: "item",
          icon: "feather icon-box",
          url: "/dashboard/my-services",
          role: 4,
        },
        {
          id: "details",
          title: "Detaglio Servizio",
          type: "item",
          icon: "feather icon-user",
          url: "/dashboard/details",
          role: 0,
          hidden: true
        },
        {
          id: "details",
          title: "Detaglio Tip",
          type: "item",
          icon: "feather icon-user",
          url: "/tip/detail",
          role: 0,
          hidden: true
        },
        {
          id: "payments",
          title: "Storico Pagamenti",
          type: "item",
          icon: "fa fa-history",
          url: "/profile/payments",
          role: 0,
        },
        {
          id: "profile",
          title: "Profilo",
          type: "item",
          icon: "feather icon-user",
          url: "/profile",
          role: 0,
        },
        {
          id: "settings",
          title: "Impostazioni",
          type: "item",
          icon: "feather icon-settings",
          role: 3,
          url: "/settings",
        },
        {
          id: "admin",
          title: "Amministratore",
          type: "collapse",
          icon: "feather icon-settings",
          hidden: true,
          role: 5,
          children: [
            {
              id: "Users",
              title: "Utenti",
              type: "item",
              icon: "feather icon-users",
              url: "/users",
              role: 6,
              hidden: true,
            },
          ],
        },
        {
          id: "account",
          title: "Impostazioni profilo",
          type: "item",
          icon: "feather icon-user",
          url: "/settings",
          role: 0,
          hidden: true,
        },
      ],
    },
    {
      id: "menu-generica",
      title: "Sfoglia",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
          id: "marketplace",
          title: "Servizi",
          type: "item",
          icon: "feather icon-shopping-cart",
          url: "/dashboard/marketplace",
          role: 3
        },
        {
          id: "tipsters",
          title: "Tipsters",
          type: "item",
          icon: "feather icon-users",
          role: 0,
          url: "/tipsters",
        },
        {
          id: "bookmakerstable",
          title: "Bookmakers",
          type: "item",
          icon: "feather icon-book",
          role: 0,
          url: "/bookmakersTable",
        },
      ]
    },
    {
      id: "menu tipster",
      title: "Menu tipster",
      type: "group",
      icon: "icon-navigation",
      role: 5,
      children: [
        {
          id: "my-services",
          title: "I miei servizi",
          type: "item",
          icon: "feather icon-package",
          url: "/dashboard/tipster/services",
          role: 5,
          rightButton: <CreateNewServiceButton />,
        },
        {
          id: "my-tips",
          title: "Le mie Tips",
          type: "item",
          icon: "fa fa-rss",
          url: "/dashboard/tipster/pools",
          role: 5,
          rightButton: <CreateTipButton />,
        },
        {
          id: "create-service",
          title: "Pubblica un servizio",
          type: "item",
          icon: "feather icon-book",
          url: "/dashboard/tipster/createService",
          role: 5,
          hidden: true
        },
        {
          id: "new-tips",
          title: "Crea tip",
          type: "item",
          icon: "feather icon-bookmark",
          url: "/dashboard/tipster/createTip",
          hidden: true,
          role: 5,
        },
        {
          id: "wallet",
          title: "Wallet",
          type: "item",
          icon: "feather icon-credit-card",
          url: "/wallet",
          role: 5,
        }
      ]
    }
  ],
};
