import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import md5 from "md5";

import Aux from "../../../../../hoc/_Aux";
import * as actions from "../../../../../store/actions";
import { withRouter, Link } from "react-router-dom";
import "./nav.css";
import ConfirmBox from "../../../../../Dashboard/ConfirmBox/ConfirmBox";
import TokenManager from "../../../../auth/TokenManager";

class NavRight extends Component {
  state = {
    listOpen: false,
    showConfirmBox: false,
  };

  avatar = (email) => {
    if (
      this.props.user._embedded &&
      this.props.user._embedded.media &&
      this.props.user._embedded.media.filter((m) => m.mediaType === "avatar")
        .length > 0
    ) {
      return this.props.user._embedded.media
        .filter((m) => m.mediaType === "avatar")
        .sort((a, b) => b.id - a.id)[0].url;
    }
    return null;
  };

  handleLogout = (value) => {
    if (value) {
      this.props.actions.userLogout(null);
    } else {
      this.setState({showConfirmBox: false})
    }
  };

  componentDidMount() {
    //this.reloadUser();
  }

  reloadUser = () => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(this.props.user._links.self.href, {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        })
          .then((e) => e.json())
          .then((localUser) => {
            this.props.actions.userLogin({
              ...this.props.user,
              ...localUser,
            });
          });
      });
  };

  render() {
    return (
      <Aux>
        {this.state.showConfirmBox ? (
          <ConfirmBox
            title="Sei sicuro di voler fare il logout?"
            confirm="Sì, sono sicuro"
            callback={this.handleLogout}
          />
        ) : null}
        <ul className="navbar-nav ml-auto">
          <li>
            <Link
              to="/dashboard/marketplace"
              aria-expanded="false"
              className="nav-link has-ripple"
            >
              <i className="fas fa-shopping-cart f-18"></i>
              <span className="d-none d-lg-inline-block m-l-10">
                Servizi
              </span>
            </Link>
          </li>
          <li>
            <Dropdown className="drp-user">
              <Dropdown.Toggle variant={"link"} id="dropdown-basic">
                <i className="icon feather icon-user" />
              </Dropdown.Toggle>
              <Dropdown.Menu alignRight className="profile-notification">
                <div className="pro-head">
                  {this.avatar(this.props.user) && <img
                    src={this.avatar(this.props.user)}
                    style={{ objectFit: "cover", height: 40 }}
                    className="img-radius"
                    alt="User Profile"
                  /> }
                  { !this.avatar(this.props.user) 
                    && <img src={require('../../../../../assets/images/godobet-placeholder.jpg')} className={"img-radius"} style={{ objectFit: 'cover', height: 40}} alt={"logo"} />}
                  <span>
                    {this.props.user?.username
                      ? this.props.user?.username
                      : this.props.user?.email}
                  </span>
                  <a
                    onClick={() => {
                      this.setState({
                        showConfirmBox: true,
                      });
                    }}
                    href="#logout"
                    className="dud-logout"
                    title="Logout"
                  >
                    <i className="feather icon-log-out" />
                  </a>
                </div>
                <ul className="pro-body">
                  <li>
                    <Link to="/profile" className="dropdown-item">
                      <i className="feather icon-user" /> Profile
                    </Link>
                  </li>
                  {this.props.user.roleValue >= 6 ? (
                    <li>
                      <Link to="/users" className="dropdown-item">
                        <i className="feather icon-settings" /> All Users
                      </Link>
                    </li>
                  ) : (
                    <></>
                  )}
                  <li>
                    <Link to="/settings" className="dropdown-item">
                      <i className="feather icon-settings" /> Impostazioni
                    </Link>
                  </li>
                </ul>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  loggedIn: state.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavRight)
);
