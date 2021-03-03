import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Aux from "../../../../../../hoc/_Aux";
import NavCollapse from './../NavCollapse';
import NavItem from './../NavItem';

import * as actions from '../../../../../../store/actions';
import { withRouter } from 'react-router-dom';

const navGroup = (props) => {
    let navItems = '';
    if (props.group.children) {
        const groups = props.group.children;
        navItems = Object.keys(groups).map(item => {
            item = groups[item];

            if (props.user.roleValue < item.role) {
                return false;
            }

            if (item.hidden) {
                return false;
            }

            switch (item.type) {
                case 'collapse':
                    return <NavCollapse key={item.id} collapse={item} type="main" />;
                case 'item':
                    return <NavItem layout={props.layout} key={item.id} item={item} />;
                default:
                    return false;
            }
        });
    }

    return (
        <Aux>
            <li key={props.group.id} className="nav-item pcoded-menu-caption"><label>{props.group.title}</label></li>
            {navItems}
        </Aux>
    );
};



const mapStateToProps = (state) => ({ user: state.user, loggedIn: state.loggedIn, registered: state.registered });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(navGroup));
