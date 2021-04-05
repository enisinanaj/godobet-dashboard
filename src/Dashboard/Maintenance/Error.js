import React from "react";

import Aux from "../../hoc/_Aux";
import "../../assets/scss/style.scss";
import Breadcrumb from "../../App/layout/AdminLayout/Breadcrumb";
import img404 from "../../assets/images/maintenance/404.png";

class Error extends React.Component {
  render() {
    return (
      <Aux>
        <Breadcrumb />
        <div className="auth-wrapper maintenance">
          <div className="container">
            <div className="row justify-content-center">
              <div className="text-center">
                <img src={img404} alt="" className="img-fluid" />
                <h5 className="text-muted mb-4">Oops! Pagina non trovata!</h5>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Error;
