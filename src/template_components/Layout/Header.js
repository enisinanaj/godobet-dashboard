import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/actions";

import HeaderRun from "./Header.run";
import { auth } from "../../components/auth/firebase";

class Header extends Component {
  componentDidMount() {
    HeaderRun();
  }

  toggleUserblock = (e) => {
    e.preventDefault();
    this.props.actions.toggleSetting("showUserBlock");
  };

  toggleOffsidebar = (e) => {
    e.preventDefault();
    this.props.actions.toggleSetting("offsidebarOpen");
  };

  toggleCollapsed = (e) => {
    e.preventDefault();
    this.props.actions.toggleSetting("isCollapsed");
    this.resize();
  };

  toggleAside = (e) => {
    e.preventDefault();
    this.props.actions.toggleSetting("asideToggled");
  };

  resize() {
    // all IE friendly dispatchEvent
    var evt = document.createEvent("UIEvents");
    evt.initUIEvent("resize", true, false, window, 0);
    window.dispatchEvent(evt);
    // modern dispatchEvent way
    // window.dispatchEvent(new Event('resize'));
  }

  logout() {
    auth.signOut().then((e) => {
      this.props.actions.userLogin(null);
      this.props.actions.serviceDetails(null);
      this.props.actions.poolDetails(null);
    });
  }

  addCredits() {
    //ToDo
  }

  render() {
    return (
      <header className="topnavbar-wrapper">
        {/* START Top Navbar */}
        <nav
          className="navbar topnavbar"
          style={{
            borderRadius: 0,
            backgroundImage:
              "linear-gradient(-45deg, rgb(233, 233, 233), rgb(242, 242, 242))",
          }}
        >
          {/* START navbar header */}
          <div className="navbar-header">
            <a className="navbar-brand" href="/dashboard">
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="img/godobet_logo.png"
                  alt="App Logo"
                  width={100}
                />
              </div>
              <div className="brand-logo-collapsed">
                <img
                  className="img-fluid"
                  src="img/godobet_logo.png"
                  width={100}
                  alt="App Logo"
                />
              </div>
            </a>
          </div>
          {/* END navbar header */}

          {/* START Left navbar */}
          <ul className="navbar-nav mr-auto flex-row">
            <li className="nav-item">
                <a href=""  className="nav-link sidebar-toggle d-md-none" onClick={ this.toggleAside }>
                    <em className="fas fa-bars" style={{ color: "#000" }}></em>
                </a>
            </li>
          </ul>
          {/* END Left navbar */}
          
          {/* START Right Navbar */}
          <ul className="navbar-nav flex-row">
            <li className="nav-item">
              <a className="nav-link"
                style={{ color: "#000" }}
                href="#"
                onClick={() => this.logout()}>
                <em className="icon-logout"></em>
              </a>
            </li>
          </ul>
          {/* END Right Navbar */}

          {/* START Search form */}
          <form className="navbar-form" role="search" action="search.html">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Type and hit enter ..."
              />
              <div
                className="fa fa-times navbar-form-close"
                data-search-dismiss=""
              ></div>
            </div>
            <button className="d-none" type="submit">
              Submit
            </button>
          </form>
          {/* END Search form */}
        </nav>
        {/* END Top Navbar */}
      </header>
    );
  }
}

Header.propTypes = {
  actions: PropTypes.object,
  settings: PropTypes.object,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
  app: state.app,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
