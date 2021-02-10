import React from 'react';
import {NavLink} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

import authLogo from '../../../assets/images/auth/auth-logo.png';
import authLogoDark from '../../../assets/images/auth/auth-logo-dark.png';

class ResetPassword2 extends React.Component {
    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper align-items-stretch aut-bg-img">
                    <div className="flex-grow-1">
                        <div className="h-100 d-md-flex align-items-center auth-side-img">
                            <div className="col-sm-10 auth-content w-auto">
                                <img src={authLogo} alt="" className="img-fluid"/>
                                <h1 className="text-white my-4">Change securely!</h1>
                                <h4 className="text-white font-weight-normal">Change your account password and make your self more securely Able Pro Dashboard Template.<br/>Do not forget to play with live customizer</h4>
                            </div>
                        </div>
                        <div className="auth-side-form">
                            <div className=" auth-content">
                                <img src={authLogoDark} alt="" className="img-fluid mb-4 d-block d-xl-none d-lg-none"/>
                                <h4 className="mb-3 f-w-400">Reset your password</h4>
                                <div className="input-group mb-4">
                                    <input type="email" className="form-control" placeholder="Email address"/>
                                </div>
                                <button className="btn btn-block btn-primary mb-4">Reset password</button>
                                <div className="text-center">
                                    <div className="saprator my-4"><span>OR</span></div>
                                    <button className="btn text-white bg-facebook mb-2 mr-2  wid-40 px-0 hei-40 rounded-circle"><i className="fab fa-facebook-f"/></button>
                                    <button className="btn text-white bg-googleplus mb-2 mr-2 wid-40 px-0 hei-40 rounded-circle"><i className="fab fa-google-plus-g"/></button>
                                    <button className="btn text-white bg-twitter mb-2  wid-40 px-0 hei-40 rounded-circle"><i className="fab fa-twitter"/></button>
                                    <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-2" className="f-w-400">Signup</NavLink></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default ResetPassword2;