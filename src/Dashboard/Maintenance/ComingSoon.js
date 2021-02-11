import React from 'react';
import {NavLink} from 'react-router-dom';

import Aux from "../../hoc/_Aux";
import '../../assets/scss/style.scss';
import Breadcrumb from "../../App/layout/AdminLayout/Breadcrumb";

import imgMaintenance from '../../assets/images/maintenance/maintance.png';

class ComingSoon extends React.Component {
    render() {
        return (
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper maintenance">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="text-center">
                                <img src={imgMaintenance} alt="" className="img-fluid" />
                                <h5 className="text-muted mb-4">Site Under Maintenance!, Visit after some times</h5>
                                <NavLink to="/" className="btn btn-primary mb-4"><i className="feather icon-refresh-ccw mr-2"/>Reload</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default ComingSoon;