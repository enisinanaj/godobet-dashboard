import React from 'react';
import {NavLink} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import logoDark from '../../../assets/images/logo-dark.png';

class ResetPassword1 extends React.Component {
    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="card">
                            <div className="row align-items-center text-center">
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <img src={logoDark} alt="" className="img-fluid mb-4"/>
                                        <h4 className="mb-3 f-w-400">Reset your password</h4>
                                        <div className="input-group mb-4">
                                            <input type="email" className="form-control" placeholder="Email address" />
                                        </div>
                                        <button className="btn btn-block btn-primary mb-4">Reset password</button>
                                        <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-1" className="f-w-400">Signup</NavLink></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default ResetPassword1;