import React from 'react';

import '../../assets/scss/style.scss';
import Aux from "../../hoc/_Aux";
import Breadcrumb from "../../App/layout/AdminLayout/Breadcrumb";
import logoDark from '../../assets/images/logo-dark.png';

class ChangePassword extends React.Component {
    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="blur-bg-images"/>
                    <div className="auth-content">
                        <div className="card">
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <img src={logoDark} alt="" className="img-fluid mb-4" />
                                        <h4 className="mb-4 f-w-400">Change your password</h4>
                                        <div className="input-group mb-2">
                                            <input type="password" className="form-control" placeholder="Current Password" />
                                        </div>
                                        <div className="input-group mb-2">
                                            <input type="password" className="form-control" placeholder="New Password" />
                                        </div>
                                        <div className="input-group mb-4">
                                            <input type="password" className="form-control" placeholder="Re-Type New Password" />
                                        </div>
                                        <button className="btn btn-block btn-primary mb-4">Change password</button>
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

export default ChangePassword;