import React from 'react';
import {NavLink} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

import logoDark from '../../../assets/images/logo-dark.png';

class SignUp1 extends React.Component {
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
                                        <img src={logoDark} alt="" className="img-fluid mb-4" />
                                        <h4 className="mb-3 f-w-400">Sign up</h4>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Nome" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="email" className="form-control" placeholder="Email address" />
                                        </div>
                                        <div className="input-group mb-4">
                                            <input type="password" className="form-control" placeholder="Password" />
                                        </div>
                                        <button className="btn btn-primary btn-block mb-4">Sign up</button>
                                        <p className="mb-2">Already have an account? <NavLink to="/auth/signin-1" className='f-w-400'>Signin</NavLink></p>
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

export default SignUp1;