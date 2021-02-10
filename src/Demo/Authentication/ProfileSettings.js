import React from 'react';
import {NavLink} from 'react-router-dom';

import '../../assets/scss/style.scss';
import Aux from "../../hoc/_Aux";
import Breadcrumb from "../../App/layout/AdminLayout/Breadcrumb";

import avatar from '../../assets/images/user/avatar-3.jpg';

class ProfileSettings extends React.Component {

    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <h5 className="mb-4">Profile Settings</h5>
                                <img src={avatar} className="img-radius mb-4" alt="User-Profile"/>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Name"/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="User Name"/>
                                </div>
                                <div className="mb-4 text-left">
                                    <div className="form-group d-inline">
                                        <div className="radio d-inline">
                                            <input type="radio" name="radio-in-1" id="radio-in-1" checked />
                                                <label htmlFor="radio-in-1" className="cr">Private Profile</label>
                                        </div>
                                    </div>
                                    <div className="form-group d-inline">
                                        <div className="radio d-inline">
                                            <input type="radio" name="radio-in-1" id="radio-in-2" />
                                                <label htmlFor="radio-in-2" className="cr">Public Profile</label>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary shadow-2 mb-4">Register</button>
                                <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-1">Signup</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default ProfileSettings;