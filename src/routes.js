import React from "react";
import $ from "jquery";
import CreateNewService from "./Dashboard/TipsterServices/CreateNewService";
import EditService from "./Dashboard/TipsterServices/EditService";
import ServiceDetail from "./Dashboard/Details/ServiceDetail";
import CreateTip from "./Dashboard/SubscriberPools/CreateTip";
import TipsterProfile from "./Dashboard/TipsterProfile/TipsterProfile";

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import("./Dashboard/Home"));
const Marketplace = React.lazy(() =>
  import("./Dashboard/Marketplace/Marketplace")
);

const PendingTips = React.lazy(() =>
  import("./Dashboard/PendingTips/PendingTips")
);
const Balance = React.lazy(() => import("./Dashboard/Balance/Balance"));
const MyServices = React.lazy(() =>
  import("./Dashboard/MyServices/MyServices")
);
const TipsterServices = React.lazy(() =>
  import("./Dashboard/TipsterServices/TipsterServices")
);
const SubscriberPools = React.lazy(() =>
  import("./Dashboard/SubscriberPools/SubscriberPools")
);

const Settings = React.lazy(() => import("./Dashboard/Profile/Settings"));
const Profile = React.lazy(() => import("./Dashboard/Profile/Profile"));

const routes = [
  {
    path: "/dashboard/default",
    exact: true,
    name: "Analytics",
    component: DashboardDefault,
    role: 4,
  },
  {
    path: "/dashboard/marketplace",
    exact: true,
    name: "Marketplace",
    component: Marketplace,
    role: 4,
  },

  {
    path: "/dashboard/pending-tips",
    exact: true,
    name: "Pending Tips",
    component: PendingTips,
    role: 4,
  },
  {
    path: "/dashboard/balance",
    exact: true,
    name: "Balance",
    component: Balance,
    role: 4,
  },
  {
    path: "/dashboard/my-services",
    exact: true,
    name: "Services",
    component: MyServices,
    role: 4,
  },
  {
    path: "/dashboard/tipster/services",
    exact: true,
    name: "My Services",
    component: TipsterServices,
    role: 4,
  },
  {
    path: "/dashboard/tipster/createService",
    exact: true,
    name: "Create new",
    component: CreateNewService,
    role: 4,
  },
  {
    path: "/dashboard/tipster/edit-card/",
    exact: false,
    name: "Edit Service",
    component: EditService,
    role: 4,
  },
  {
    path: "/dashboard/service/",
    exact: false,
    name: "Detaglio servizio",
    component: ServiceDetail,
    role: 4,
  },
  {
    path: "/dashboard/tipster/pools",
    exact: true,
    name: "My Tips",
    component: SubscriberPools,
    role: 4,
  },
  {
    path: "/dashboard/tipster/createTip",
    exact: true,
    name: "Create Tips",
    component: CreateTip,
    role: 5,
  },

  {
    path: "/settings",
    exact: true,
    name: "Settings",
    component: Settings,
    role: 3,
  },
  {
    path: "/profile",
    exact: true,
    name: "Profile",
    component: Profile,
    role: 3,
  },
  {
    path: "/tipsters",
    exact: false,
    name: "Tipster Profile",
    component: TipsterProfile,
    role: 3,
  },
];

export default routes;
