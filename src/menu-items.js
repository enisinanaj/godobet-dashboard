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
          title: "Pending Tips",
          type: "item",
          icon: "feather icon-clock",
          url: "/dashboard/pending-tips",
          role: 4,
        },
        {
          id: "balance",
          title: "Bilancio",
          type: "item",
          icon: "feather icon-credit-card",
          url: "/dashboard/balance",
          role: 4,
        },
        {
          id: "active-services",
          title: "Servizi attivi",
          type: "item",
          icon: "feather icon-box",
          url: "/dashboard/my-services",
          role: 4,
        },
        {
          id: "marketplace",
          title: "Marketplace",
          type: "item",
          icon: "feather icon-shopping-cart",
          url: "/dashboard/marketplace",
          role: 3
        },
        {
          id: "manage",
          title: "Gestione",
          type: "collapse",
          icon: "feather icon-settings",
          role: 5,
          children: [
            {
              id: "my-services",
              title: "I miei servizi",
              type: "item",
              icon: "feather icon-book",
              url: "/dashboard/tipster/services",
              role: 5,
              rightButton: <CreateNewServiceButton />,
            },
            {
              id: "my-tips",
              title: "I miei Tip",
              type: "item",
              icon: "feather icon-bookmark",
              url: "/dashboard/tipster/pools",
              role: 5,
              rightButton: <CreateTipButton />,
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
          ],
        },
        {
          id: "settings",
          title: "Impostazioni",
          type: "collapse",
          icon: "feather icon-user",
          role: 3,
          children: [
            {
              id: "account",
              title: "Account",
              type: "item",
              icon: "feather icon-at-sign",
              url: "/settings",
              role: 3,
            },
            {
              id: "wallet",
              title: "Wallet",
              type: "item",
              icon: "feather icon-briefcase",
              url: "#",
              role: 5,
            }
          ]
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
              role: 5,
              hidden: true,
            },
          ],
        },
        {
          id: "profile",
          title: "Profilo",
          type: "item",
          icon: "feather icon-user",
          url: "/profile",
          role: 0,
          hidden: true,
        },
        {
          id: "details",
          title: "Details",
          type: "item",
          icon: "feather icon-user",
          url: "/dashboard/details",
          role: 0,
          hidden: true,
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
  ],
};
