import React from "react";
import { NavLink, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./../../../assets/scss/style.scss";
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import { auth } from "../../../App/auth/firebase";
import * as actions from "../../../store/actions";
import config from '../../../store/config';

class Verify extends React.Component {
  state = {
    verified: false,
    statusMessage: "",
    errorMessage: ""
  };

  handleSubmit = () => {
    const q = new URLSearchParams(this.props.location.search);

    auth
    .applyActionCode(q.get('oobCode'))
    .then(() => {
      this.setState({
        statusMessage: "Il tuo account è stato verificato con successo."
      })
      
      setTimeout(() => {
        this.setState({
          verified: true
        });
      }, 3000);
    })
    .then()
    .catch((error) => {
      this.setState({
        errorMessage: error.code === "auth/invalid-action-code" ? "Codice di attivazione errato" : error.message
      });
    });
  };

  componentDidMount = () => {
    const q = new URLSearchParams(this.props.location.search);
    if (q.get('mode') !== 'verifyEmail') {
      this.props.history.push(`${config.GOOGLE_FIREBASE_ENDPOINT}/auth/action${this.props.location.search}`);
    } else {
      this.handleSubmit();
    }
  }

  render() {
    return (
      <Aux>
        <Breadcrumb />
        {this.state.verified ? <Redirect to="/signin" /> : <></>}
        <div className="auth-wrapper">
          <div className="auth-content">
            <div className="card">
              <div className="row align-items-center text-center">
                <div className="col-md-12">
                  <h4 className="mb-2 text-primary">
                    {this.state.statusMessage}
                  </h4>
                  <h5 className="mb-2 text-danger">
                    {this.state.errorMessage}
                  </h5>
                  {this.state.errorMessage && 
                    <p className="mb-2 text-muted">
                      <NavLink to="/auth/signin" className="f-w-400">
                        Clicca qui{" "}
                      </NavLink>
                      se non vieni reindirizzato automaticamente
                    </p>
                    }
                  {!this.state.errorMessage &&
                    <p className="mb-2 text-muted">
                      <NavLink to="/auth/signin" className="f-w-400">
                        Clicca qui{" "}
                      </NavLink>
                      se non vieni reindirizzato automaticamente
                    </p>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  loggedIn: state.loggedIn,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Verify));
