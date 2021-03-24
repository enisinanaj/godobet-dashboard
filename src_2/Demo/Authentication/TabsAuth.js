import React from 'react';
import {NavLink} from 'react-router-dom';

import '../../assets/scss/style.scss';
import Aux from "../../hoc/_Aux";
import Breadcrumb from "../../App/layout/AdminLayout/Breadcrumb";

import DEMO from "../../store/constant";

class TabsAuth extends React.Component {
    state = {
        isAuth: false
    };

    authSignUpHandler = () => {
        this.setState({isAuth: false});
    };

    authSignInHandler = () => {
        this.setState({isAuth: true});
    };

    render () {
        const authSignInClass = (this.state.isAuth) ? 'active' : 'toggle-btn';
        const authSignUpClass = (this.state.isAuth) ? 'toggle-btn' : 'active';
        const blockClass = ['toggle-block'];
        const blockSignInClass = (!this.state.isAuth) ? [...blockClass, 'collapse'] : blockClass;
        const blockSignUpClass = (this.state.isAuth) ? [...blockClass, 'collapse'] : blockClass;

        return(
            <Aux>
                <Breadcrumb/>
                <div className="blur-bg-images"/>
                <div className="auth-wrapper btn-page">
                    <div className="auth-content">
                        <div className="card text-center">
                            <div className="card-body">
                                <h3 className="mb-3">Welcome to <span className="text-c-blue">Able Pro</span></h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                <div className={blockSignInClass.join(' ')}>
                                    <ol className="position-relative carousel-indicators justify-content-center">
                                        <li className={authSignInClass} onClick={this.authSignInHandler} />
                                        <li className={authSignUpClass} onClick={this.authSignUpHandler} />
                                    </ol>
                                    <div className="input-group mb-2">
                                        <input type="email" className="form-control" placeholder="Email address" />
                                    </div>
                                    <div className="input-group mb-4">
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="form-group text-left">
                                        <div className="checkbox checkbox-primary d-inline">
                                            <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" defaultChecked={false} readOnly/>
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                        </div>
                                    </div>
                                    <button className="btn  btn-primary mb-4">Signin</button>
                                    <button className="btn  btn-outline-primary mb-4 toggle-btn">Create Profile</button>
                                    <p className="mb-2 text-muted">Forgot password? <NavLink to="/auth/reset-password-1" className="f-w-400">Reset</NavLink></p>
                                </div>
                                <div className={blockSignUpClass.join(' ')}>
                                    <ol className="position-relative carousel-indicators justify-content-center">
                                        <li className={authSignInClass} onClick={this.authSignInHandler} />
                                        <li className={authSignUpClass} onClick={this.authSignUpHandler} />
                                    </ol>
                                    <div className="input-group mb-2">
                                        <input type="text" className="form-control" placeholder="Username" />
                                    </div>
                                    <div className="input-group mb-2">
                                        <input type="email" className="form-control" placeholder="Email address" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="password" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="form-group text-left mt-2">
                                        <div className="checkbox checkbox-primary d-inline">
                                            <input type="checkbox" name="checkbox-fill-2" id="checkbox-fill-2" defaultChecked={false} readOnly/>
                                            <label htmlFor="checkbox-fill-2" className="cr">Send me the <a href={DEMO.BLANK_LINK}> Newsletter</a> weekly.</label>
                                        </div>
                                    </div>
                                    <button className="btn  btn-primary mb-4">Signup</button>
                                    <button className="btn  btn-outline-primary mb-4 toggle-btn">Existing user</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default TabsAuth;