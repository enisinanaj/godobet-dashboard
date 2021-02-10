import React from 'react';
import {NavLink} from 'react-router-dom';

import Aux from "../../hoc/_Aux";
import '../../assets/scss/style.scss';
import Breadcrumb from "../../App/layout/AdminLayout/Breadcrumb";

import imgSparcle1 from '../../assets/images/maintenance/sparcle-1.png';
import imgSparcle2 from '../../assets/images/maintenance/sparcle-2.png';
import imgShip from '../../assets/images/maintenance/ship.svg';
import imgSark from '../../assets/images/maintenance/sark.svg';

class OfflineUI extends React.Component {
    render() {
        return (
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper offline">
                    <div className="offline-wrapper">
                        <img src={imgSparcle1} alt="User-1" className="img-fluid s-img-1" />
                        <img src={imgSparcle2} alt="User-2" className="img-fluid s-img-2" />
                        <div className="container off-main">
                            <div className="row justify-content-center">
                                <div className="col-6">
                                    <div className="text-center">
                                        <div className="moon"/>
                                        <img src={imgShip} alt="" className="img-fluid boat-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="row m-0 justify-content-center off-content">
                                <div className="col-sm-12 p-0">
                                    <div className="text-center">
                                        <h1 className="text-white text-uppercase">Offline</h1>
                                        <h5 className="text-white font-weight-normal m-b-30">The site is temporarily down</h5>
                                        <NavLink to="/" className="btn btn-warning mb-4"><i className="feather icon-refresh-ccw mr-2"/>Reload</NavLink>
                                    </div>
                                </div>
                                <div className="sark">
                                    <img src={imgSark} alt="" className="img-fluid img-sark" />
                                        <div className="bubble"/>
                                </div>
                            </div>
                        </div>
                        <svg width="100%" height="70%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="wave">
                            <title>Wave</title>
                            <defs/>
                            <path id="feel-the-wave" d="" />
                        </svg>
                        <svg width="100%" height="70%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="wave">
                            <title>Wave</title>
                            <defs/>
                            <path id="feel-the-wave-two" d="" />
                        </svg>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default OfflineUI;