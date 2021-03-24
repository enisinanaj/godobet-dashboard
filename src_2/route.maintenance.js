import React from "react";

const Error = React.lazy(() => import("./Dashboard/Maintenance/Error"));
const OfflineUI = React.lazy(() => import("./Dashboard/Maintenance/OfflineUI"));
const ComingSoon = React.lazy(() =>
  import("./Dashboard/Maintenance/ComingSoon")
);

const route = [
  { path: "/maintenance/error", exact: true, name: "Error", component: Error },
  {
    path: "/maintenance/coming-soon",
    exact: true,
    name: "Coming Soon",
    component: ComingSoon,
  },
  {
    path: "/maintenance/offline-ui",
    exact: true,
    name: "Offline UI",
    component: OfflineUI,
  },
];

export default route;
