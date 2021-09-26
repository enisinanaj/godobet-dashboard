import React, { useState, useEffect } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import TokenManager from "../../App/auth/TokenManager";
import Aux from "../../hoc/_Aux";
import BASE_CONFIG from "../../store/config";
import { withRouter } from "react-router-dom";

import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PriceLabel from '../../App/components/PriceLabel';
import SubscriptionItem from "./SubscriptionItem";
import Swal from "sweetalert2";

const Wallet = (props) => {

  const [services, setServices] = useState([]);
  const [userSetUp, setUserSetUp] = useState(false);
  const [balance, setBalance] = useState({});
  const [loading, setLoading] = useState(true);
  const [bank, setBank] = useState();
  const [showWithdrawalProcedure, setShowWithdrawalProcedure] = useState(false);

  useEffect(() => {

    if (props.applicationState.user.stripeAccountId && props.applicationState.user.stripeAccountStatus === 'verified') {
      setUserSetUp(true)
    }

    callUrl(BASE_CONFIG.API_URL + "/users/" + props.applicationState.user.userCode + "/services?page=0&size=1000")
      .then((e) => e.json())
      .then((services) => {
        setServices(services._embedded.services);
      })
      .catch(() => Swal.fire({
          type: 'error',
          text: "C'è stato un errore di sistema. Se l'error persiste, ti preghiamo di contattare il supporto via telegram o email."
      }));
    
    callUrl(BASE_CONFIG.API_URL + "/pps/accounts/" + props.applicationState.user.userCode + "/balance")
      .then((e) => e.json())
      .then((balance) => {
        setBalance(balance);
        setLoading(false);
      })
      .catch(() => Swal.fire({
          type: 'error',
          text: "C'è stato un errore di sistema. Se l'error persiste, ti preghiamo di contattare il supporto via telegram o email."
      }));

      callUrl(props.applicationState.user._links.bankAccounts.href)
        .then((e) => e.json())
        .then((banks) => {
          if (!banks._embedded.bankAccounts) {
            return;
          }

          var sortedBanks = banks._embedded.bankAccounts.sort(
            (a, b) =>
              new Date(b.insertedOn).getTime() -
              new Date(a.insertedOn).getTime()
          );
          setBank(sortedBanks.length > 0 ? sortedBanks[0] : {});
        })
        .catch(e => {
          Swal.fire({
            type: 'error',
            text: "C'è stato un errore di sistema. Se l'error persiste, ti preghiamo di contattare il supporto via telegram o email."
          });
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const callUrl = (url, method = 'GET') => {
    return TokenManager.getInstance().getToken().then(jwt => {
      return fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "X-Auth": jwt,
        },
      })
    });
  };

  const startWithdrawalProcedure = () => {
    setShowWithdrawalProcedure(true);
  };

  const submitWithdrawalRequest = () => {
    callUrl(BASE_CONFIG.API_URL + "/pps/accounts/payout/" + props.applicationState.user.userCode, 'POST')
    .then((e) => {
      if (e.status !== 200) {
        setShowWithdrawalProcedure(false);
        throw new Error("not successful");
      }
      return e.json()
    })
    .then(() => Swal.fire({
      type: 'success',
      text: "La richiesta di prelievo è stata inviata con successo. I soldi arriveranno entro 2 giorni lavorativi."
    }))
    .catch(() => {
      Swal.fire({
        type: 'error',
        text: "C'è stato un errore di sistema. Se l'error persiste, ti preghiamo di contattare il supporto via telegram o email."
      });
    });
  };

  return (
    <Aux>
      <div>
        <Row className="">
          {/* mb-n4 */}
          <Col md={4} lg={4} sm={12} xs={12} xl={4}>
            <Card className="user-card">
              <Card.Body className="">
                <Card.Title><h4>Bilancio</h4></Card.Title>
                {/* pt-0 */}
                {loading && <div className="d-flex justify-content-center"><div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div></div>}
                { !loading && userSetUp &&
                  <Row>
                    <Col>
                      <h5>Saldo contabile</h5>
                      <PriceLabel amount={balance.pending[0].amount/100} />
                    </Col>
                    <Col>
                      <h5>Saldo disponibile</h5>
                      <PriceLabel amount={balance.available[0].amount/100} />
                    </Col>
                  </Row>
                }
                { !loading && userSetUp && balance.available[0].amount > 0 &&
                  <Row style={{marginTop: 20, flexDirection: 'row', justifyContent: 'flex-start', padding: "0 20px"}}>
                    <Button variant="primary" style={{flex: 1}} onClick={startWithdrawalProcedure} >
                      <em className={"fa fa-money"} style={{marginRight: 10}}></em>
                      Prelieva ora
                    </Button>
                  </Row>
                }
              </Card.Body>
            </Card>
          </Col>
          {!loading && services && <Col xl={8} md={8} lg={8} sm={12} xs={12} >
            <Card className="user-card">
              <Card.Body className="">
                <Card.Title><h4>Iscritti negli ultimi 30 giorni</h4></Card.Title>
                  {services.filter(service => service.subscriptions.filter(sub => sub.paymentSystemToken !== "self" && sub.valid).length > 0).map(service => {
                  return (
                    <SubscriptionItem service={service} key={service.id} />
                  )}
                )}
              </Card.Body>
            </Card>
            <Modal show={showWithdrawalProcedure} onHide={() => setShowWithdrawalProcedure(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title as="h4">
                            Prelieva il saldo disponibile 
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{marginTop: 0, borderBottom: '1px solid #e8e8e8'}}>
                        Cliccando su conferma, attivi il processo di prelievo dell'intero saldo contabile ( <strong><PriceLabel amount={balance.available[0].amount/100} /></strong> ). Il saldo verrà depositato all'IBAN <strong>{bank.iban}</strong>.
                    </Modal.Body>
                    <Modal.Body style={{marginTop: 0, borderBottom: '1px solid #e8e8e8'}}>
                        Controlla che l'IBAN sia corretto prima di proseguire. Se l'IBAN non risultasse corretto, contatta il supporto via telegram o email.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => submitWithdrawalRequest()}>Continua</Button>
                        <Button variant="secondary" onClick={() => setShowWithdrawalProcedure(false)}>Chiudi</Button>
                    </Modal.Footer>
                </Modal>
          </Col>}
        </Row>
      </div>
    </Aux>
  );
};

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wallet));