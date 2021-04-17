import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Swal from "sweetalert2";
import * as actions from "../../store/actions";
import TokenManager from "../auth/TokenManager";

const CreateTipButton = (props) => {

    const checkTipCreation = () => {

      console.warn(props.applicationState.user)

      if (!props.applicationState.user.stripeAccountId ||
          props.applicationState.user.stripeAccountStatus !== 'verified') {
          Swal.fire({
              title: 'Account non connesso al sistema di pagamento Stripe.',
              text: 'Per connettere il proprio account, vai sulle impostazione ed invia i tuoi dati cliccando su "Chiedi l\'attivazione del conto".',
              type: "warning"
          })
          return;
      }

      if (!props.applicationState.user._embedded || !props.applicationState.user._embedded.services || props.applicationState.user._embedded.services.length <= 0) {
          Swal.fire({
              title: 'Per publicare una tip devi prima creare un servizio.',
              text: 'Crea un servizio andando sul menu Gestione e successivamente scegliendo "I miei servizi". Trovi in alto a destra il pulsante "Crea servizio".',
              type: "warning"
          })
      } else {
          window.location = "/dashboard/tipster/createTip";
      }
    }

    const reloadUser = () => {
        TokenManager.getInstance()
          .getToken()
          .then((jwt) => {
            fetch(props.applicationState.user._links.self.href, {
              headers: {
                "Content-Type": "application/json",
                "X-Auth": jwt,
              },
            })
              .then((e) => e.json())
              .then((localUser) => {
                props.actions.userLogin({
                  ...props.applicationState.user,
                  ...localUser,
                });
              });
          });
    };

    useEffect(reloadUser, [])

    return (
        <Button variant={"default"} className={"bg-light"} title={"Crea tip"} onClick={checkTipCreation} >Crea tip</Button>
    );
}

const mapStateToProps = state => ({applicationState: state});
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTipButton);