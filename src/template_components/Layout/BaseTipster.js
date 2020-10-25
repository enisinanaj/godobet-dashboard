import React from "react";

import Header from "./Header";
import Sidebar from "./SidebarTipster";
import Offsidebar from "./Offsidebar";
import Footer from "./Footer";

const BaseTipster = (props) => (
  <div className="wrapper">
    <Header />

    <Sidebar />

    <Offsidebar />

    <section className="section-container">{props.children}</section>

    <Footer />
  </div>
);

export default BaseTipster;
