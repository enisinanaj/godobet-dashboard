import React from "react";

import Header from "./Header";
import Sidebar from "./SidebarAdmin";
import Offsidebar from "./Offsidebar";
import Footer from "./Footer";

const BaseAdmin = (props) => (
  <div className="wrapper">
    <Header />

    <Sidebar />

    <Offsidebar />

    <section className="section-container">{props.children}</section>

    <Footer />
  </div>
);

export default BaseAdmin;
