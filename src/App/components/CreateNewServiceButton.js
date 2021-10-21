import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Swal from "sweetalert2";
import * as actions from '../../store/actions';
import { withRouter } from "react-router-dom";

const CreateNewServiceButton = (props) => {

  const checkAccount = () => {
    if (!props.applicationState.user.stripeAccountId ||
      props.applicationState.user.stripeAccountStatus !== 'verified') {
        Swal.fire({
          title: 'Account non connesso al sistema di pagamento Stripe.',
          text: 'Per connettere il proprio account, vai sulle impostazione ed invia i tuoi dati cliccando su "Chiedi l\'attivazione del conto".',
          type: "warning"
        })
      } else {
        props.history.push("/dashboard/tipster/createService");
      }
  };

  return (
    <Button variant={"default"} className={"bg-light"} title={"Crea tip"} onClick={checkAccount}>
      Crea servizio
    </Button>
  );
};

const mapStateToProps = state => ({applicationState: state});
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateNewServiceButton));
