import React from 'react';
import {NavLink} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

import authLogo from '../../../assets/images/auth/auth-logo.png';
import authLogoDark from '../../../assets/images/auth/auth-logo-dark.png';
import DEMO from "../../../store/constant";

class SignUp2 extends React.Component {
    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper align-items-stretch aut-bg-img">
                    <div className="flex-grow-1">
                        <div className="h-100 d-md-flex align-items-center auth-side-img">
                            <div className="col-sm-10 auth-content w-auto">
                                <img src={authLogo} alt="" className="img-fluid"/>
                                <h1 className="text-white my-4">Welcome you!</h1>
                                <h4 className="text-white font-weight-normal">Signup to your account and made member of the Able Pro Dashboard Template.<br/>Do not forget to play with live customizer</h4>
                            </div>
                        </div>
                        <div className="auth-side-form">
                            <div className=" auth-content">
                                <img src={authLogoDark} alt="" className="img-fluid mb-4 d-block d-xl-none d-lg-none" />
                                <h4 className="mb-3 f-w-400">Sign up</h4>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Username" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email address" />
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-group text-left mt-2">
                                    <div className="checkbox checkbox-primary d-inline">
                                        <input type="checkbox" name="checkbox-fill-2" id="checkbox-fill-2" />
                                        <label htmlFor="checkbox-fill-2" className="cr">Send me the <a href={DEMO.BLANK_LINK}> Newsletter</a> weekly.</label>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-block mb-4">Sign up</button>
                                <div className="text-center">
                                    <div className="saprator my-4"><span>OR</span></div>
                                    <button className="btn text-white bg-facebook mb-2 mr-2  wid-40 px-0 hei-40 rounded-circle"><i className="fab fa-facebook-f"/></button>
                                    <button className="btn text-white bg-googleplus mb-2 mr-2 wid-40 px-0 hei-40 rounded-circle"><i className="fab fa-google-plus-g"/></button>
                                    <button className="btn text-white bg-twitter mb-2  wid-40 px-0 hei-40 rounded-circle"><i className="fab fa-twitter"/></button>
                                    <p className="mt-4">Already have an account? <NavLink to="/auth/signin-2" className='f-w-400'>Signin</NavLink></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignUp2;