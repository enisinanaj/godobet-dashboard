import React, { Component } from 'react';
import {Dropdown} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import md5 from 'md5';

import Aux from "../../../../../hoc/_Aux";
import * as actions from "../../../../../store/actions";

class NavRight extends Component {
    state = {
        listOpen: false
    };

    avatar = (email) => {
        return 'http://www.gravatar.com/avatar/' + md5(email.email.toLowerCase().trim()) + '?s=32';
    }

    render() {

        return (
            <Aux>
                <ul className="navbar-nav ml-auto">
                    <li>
                        <Dropdown alignRight={!this.props.rtlLayout} className="drp-user">
                            <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                <i className="icon feather icon-user"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu alignRight className="profile-notification">
                                <div className="pro-head">
                                    <img src={this.avatar(this.props.user)} className="img-radius" alt="User Profile"/>
                                    <span>{ this.props.user?.name }</span>
                                    <a onClick={() => this.props.actions.userLogout(null)} href="#logout" className="dud-logout" title="Logout">
                                        <i className="feather icon-log-out"/>
                                    </a>
                                </div>
                                <ul className="pro-body">
                                    <li><a href="/users" className="dropdown-item"><i className="feather icon-settings"/> All Users</a></li>
                                    <li><a href="/profile" className="dropdown-item"><i className="feather icon-user"/> Profile</a></li>
                                </ul>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => ({ user: state.user, loggedIn: state.loggedIn });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavRight);
