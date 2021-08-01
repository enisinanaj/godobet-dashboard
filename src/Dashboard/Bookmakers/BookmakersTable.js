import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import { withRouter } from "react-router-dom";

import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const BookmakersTable = () => {

  return (
    <Aux>
      <div>
        <Row className="">
          <Col>
            <Card style={{overflow: 'scroll'}} className={"p-2"}>
            <table id="filter-table" class="table-terms dataTable no-footer" data-hlogo="1" data-hbonus="2" data-hpaypal="3" data-hstreaming="4" data-hcashout="5" data-hrating="6" data-hwebsite="7" data-hterms="8" role="grid">
              <thead>
                <tr role="row">
                  <th>Sito scommesse AAMS </th>
                  <th>Bonus</th>
                  <th>Paypal</th>
                  <th>Live Streaming</th>
                  <th>Cashout</th>
                  <th>Valutazione</th>
                </tr>
              </thead>
              <tbody>
                <tr data-amount="100+" data-type="100_sul_deposito" data-app="ios android" data-payment="visa mastercard bank_transfer maestro paypal skrill postepay snai_card snai_voucher" data-streaming="on" data-cashout="off" role="row" class="odd">
                  <td class="td-logo mid snai"><a style={{textDecoration: 'underline'}} href="https://snai.it/"><span>SNAI </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="305"><strong data-before="" data-after=" ">100% fino a 305€ Primo deposito + Senza deposito</strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability yes">Sì</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>96</strong>/100</td>
                </tr>
                <tr data-amount="20" data-type="100_sul_deposito" data-app="ios" data-payment="visa mastercard paypal skrill neteller paysafecard postepay bank_transfer entropay carta_si" data-streaming="off" data-cashout="on" role="row" class="even">
                  <td class="td-logo mid betway"><a style={{textDecoration: 'underline'}} href="https://betway.it/"><span>Betway</span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="020"><strong data-before="" data-after="">100% fino a 20€ Primi due depositi</strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability no">No</td>
                  <td class="td-cash fil-cashout availability yes">Sì</td>
                  <td class="td-rating sorting_1"><strong>95</strong>/100</td>
                </tr>
                <tr data-amount="100+" data-type="cashback" data-app="ios android windows" data-payment="visa mastercard bank_transfer maestro paypal skrill neteller postepay paysafecard skrill_1tap bancoposta eurobet_card" data-streaming="on" data-cashout="off"
                  role="row" class="odd">
                  <td class="td-logo mid eurobet"><a style={{textDecoration: 'underline'}} href="https://eurobet.it/"><span>Eurobet </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="210"><strong>50% fino a 210€ Cashback</strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability yes">Sì</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>94</strong>/100</td>
                </tr>
                <tr data-amount="100" data-type="100_sul_deposito" data-app="ios android" data-payment="visa mastercard bank_transfer klarna paypal skrill neteller paysafecard postepay apple_pay eurocard" data-streaming="off" data-cashout="off" role="row" class="even">
                  <td class="td-logo mid sport888"><a style={{textDecoration: 'underline'}} href="https://888sport.it/"><span>888sport </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="100"><strong>100% fino a 100€ Primo deposito</strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability no">No</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>93</strong>/100</td>
                </tr>
                <tr data-amount="5" data-type="50_sul_deposito" data-app="ios android" data-payment="visa mastercard bank_transfer maestro bitcoin paypal skrill neteller postepay paysafecard skrill_1tap" data-streaming="off" data-cashout="off" role="row" class="odd">
                  <td class="td-logo mid netbet"><a style={{textDecoration: 'underline'}} href="https://netbet.it/"><span>NetBet </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="005"><strong >50% fino a 5€ Primo deposito</strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability no">No</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>92</strong>/100</td>
                </tr>
                <tr data-amount="100+" data-type="50_per_prima" data-app="ios android" data-payment="visa mastercard bank_transfer maestro paypal skrill neteller postepay paysafecard skrill_1tap bwin_card cashtocode muchbetter ticketpremium trustly" data-streaming="on"
                  data-cashout="off" role="row" class="even">
                  <td class="td-logo mid bwin"><a style={{textDecoration: 'underline'}} href="https://bwin.it/"><span>bwin </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="210"><strong>50% fino a 210€ Prima scommessa + cashback</strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability yes">Sì</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>91</strong>/100</td>
                </tr>
                <tr data-amount="0" data-type="nessuno" data-app="nessuna" data-payment="visa mastercard skrill neteller maestro" data-streaming="off" data-cashout="off" role="row" class="odd">
                  <td class="td-logo mid codere"><a style={{textDecoration: 'underline'}} href="https://codere.it/"><span>codere </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="000"><strong>Non disponibile</strong></td>
                  <td class="td-paypal availability no">No</td>
                  <td class="td-live fil-streaming availability no">No</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>90</strong>/100</td>
                </tr>
                <tr data-amount="80" data-type="50_sul_deposito" data-app="ios android" data-payment="visa mastercard bank_transfer maestro paypal skrill postepay paysafecard jcb" data-streaming="off" data-cashout="off" role="row" class="even">
                  <td class="td-logo mid merkur-win"><a style={{textDecoration: 'underline'}} href="https://merkur.it-win/"><span>Merkur Win </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="075"><strong>50% fino a 75€ Primo deposito</strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability no">No</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>89</strong>/100</td>
                </tr>
                <tr data-amount="100+" data-type="50_sul_deposito" data-app="ios android" data-payment="visa mastercard bank_transfer maestro paypal skrill neteller postepay paysafecard skrill_1tap" data-streaming="off" data-cashout="off" role="row" class="odd">
                  <td class="td-logo mid planetwin365"><a style={{textDecoration: 'underline'}} href="https://planetwin365.it/"><span>Planetwin365 </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="215"><strong>50% fino a 215€ Primo deposito </strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability no">No</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>88</strong>/100</td>
                </tr>
                <tr data-amount="100+" data-type="100_per_prima" data-app="ios android" data-payment="visa mastercard bank_transfer maestro kalibra paypal skrill neteller postepay paysafecard bank_transfer rapido entropay william_hill_voucher" data-streaming="on"
                  data-cashout="off" role="row" class="even">
                  <td class="td-logo mid williamhill"><a style={{textDecoration: 'underline'}} href="https://williamhill.it/"><span>William Hill </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="215"><strong>100% fino a 215€ Prima scommessa </strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability yes">Sì</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>87</strong>/100</td>
                </tr>
                <tr data-amount="100+" data-type="50_per_prima" data-app="ios android" data-payment="visa mastercard bank_transfer maestro bancoposta paypal skrill neteller postepay paysafecard skrill_1tap betflag_card" data-streaming="on" data-cashout="on" role="row"
                  class="odd">
                  <td class="td-logo mid betflag"><a style={{textDecoration: 'underline'}} href="https://betflag.it/"><span>BetFlag </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="1000"><strong>1.100% fino a 000€ Primo deposito</strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability yes">Sì</td>
                  <td class="td-cash fil-cashout availability yes">Sì</td>
                  <td class="td-rating sorting_1"><strong>86</strong>/100</td>
                </tr>
                <tr data-amount="100+" data-type="50_sul_deposito" data-app="ios android" data-payment="visa mastercard bank_transfer apple_pay paypal skrill neteller postepay paysafecard" data-streaming="on" data-cashout="on" role="row" class="even">
                  <td class="td-logo mid betfair"><a style={{textDecoration: 'underline'}} href="https://betfair.it/"><span>Betfair </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="210"><strong>50% fino a 210€* Primo deposito + coupon cashback</strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability yes">Sì</td>
                  <td class="td-cash fil-cashout availability yes">Sì</td>
                  <td class="td-rating sorting_1"><strong>86</strong>/100</td>
                </tr>
                <tr data-amount="100+" data-type="35_per_prima" data-app="ios android windows" data-payment="visa mastercard bancoposta paypal skrill neteller paysafecard maestro bank_transfer postale skrill_1tap" data-streaming="on" data-cashout="off" role="row"
                  class="odd">
                  <td class="td-logo mid sisal"><a style={{textDecoration: 'underline'}} href="https://sisal.it/"><span>Sisal </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="350"><strong>30% fino a 350€ Prima scommessa + coupon cashback </strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability yes">Sì</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>86</strong>/100</td>
                </tr>
                <tr data-amount="100+" data-type="50_per_prima" data-app="ios android" data-payment="visa mastercard bank_transfer maestro paypal skrill neteller postepay paysafecard skrill_1tap" data-streaming="off" data-cashout="off" role="row" class="even">
                <td class="td-logo mid sisal"><a style={{textDecoration: 'underline'}} href="https://sisal.it/"><span>Skybet </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="100"><strong>50% fino a 100€ Prima scommessa</strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability no">No</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>85</strong>/100</td>
                </tr>
                <tr data-amount="10" data-type="50_sul_deposito" data-app="ios android" data-payment="visa mastercard skrill neteller paypal maestro paysafecard postepay" data-streaming="on" data-cashout="off" role="row" class="odd">
                  <td class="td-logo mid marathonbet"><a style={{textDecoration: 'underline'}} href="https://marathonbet.it/"><span>Marathonbet</span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="10"><strong>50% fino a 10€ Primo deposito  </strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability yes">Sì</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>85</strong>/100</td>
                </tr>
                <tr data-amount="10" data-type="100_sul_deposito" data-app="ios android" data-payment="visa mastercard bank_transfer paypal skrill neteller apple_pay paysafecard trustly" data-streaming="on" data-cashout="off" role="row" class="even">
                  <td class="td-logo mid unibet"><a style={{textDecoration: 'underline'}} href="https://unibet.it/"><span>Unibet </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="010"><strong>100% fino a 10€ Primo deposito</strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability yes">Sì</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>84</strong>/100</td>
                </tr>
                <tr data-amount="100+" data-type="100_sul_deposito" data-app="ios android" data-payment="visa mastercard bank_transfer maestro paypal skrill neteller postepay paysafecard skrill_1tap" data-streaming="off" data-cashout="off" role="row" class="odd">
                  <td class="td-logo mid starvegas"><a style={{textDecoration: 'underline'}} href="https://starvegas.it/"><span>StarVegas </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="300"><strong>100% fino a 300€ Primo deposito</strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability no">No</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>84</strong>/100</td>
                </tr>
                <tr data-amount="5" data-type="15_sul_deposito" data-app="ios android" data-payment="visa mastercard maestro paypal skrill neteller postepay paysafecard bank_transfer rapido skrill_1tap gioco_digitale_voucher cashtocode muchbetter ticketpremium trustly"
                  data-streaming="on" data-cashout="off" role="row" class="even">
                  <td class="td-logo mid gioco-digitale"><a style={{textDecoration: 'underline'}} href="https://giocodigitale.it/"><span>Gioco Digitale </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="005"><strong>15% fino a 5€ Cashback</strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability yes">Sì</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>83</strong>/100</td>
                </tr>
                <tr data-amount="160" data-type="100_sul_deposito" data-app="ios android" data-payment="visa mastercard bank_transfer bancoposta paypal skrill postepay_voucher bank_transfer postale" data-streaming="on" data-cashout="off" role="row" class="odd">
                  <td class="td-logo mid goldbet"><a style={{textDecoration: 'underline'}} href="https://goldbet.it/"><span>GoldBet </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="100"><strong>100% fino a 160€ Primo deposito</strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability yes">Sì</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>80</strong>/100</td>
                </tr>
                <tr data-amount="30" data-type="50_sul_deposito" data-app="ios android" data-payment="visa mastercard bank_transfer emoney paypal skrill neteller paysafecard bank_transfer rapido skrill_1tap bank_transfer postale" data-streaming="off" data-cashout="off"
                  role="row" class="even">
                  <td class="td-logo mid admiralyes"><a style={{textDecoration: 'underline'}} href="https://admiralyes.it/"><span>AdmiralYES </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="030"><strong>50% fino a 30€ Primo deposito</strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability no">No</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>79</strong>/100</td>
                </tr>
                <tr data-amount="10" data-type="40_sul_deposito" data-app="ios android" data-payment="visa mastercard bank_transfer paypal skrill postepay bank_transfer rapido skrill_1tap" data-streaming="on" data-cashout="off" role="row" class="odd">
                  <td class="td-logo mid stanleybet"><a style={{textDecoration: 'underline'}} href="https://stanleybet.it/"><span>Stanleybet </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="10"><strong>40% fino a 10€ Primo deposito</strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability yes">Sì</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>78</strong>/100</td>
                </tr>
                <tr data-amount="250" data-type="25_per_prima" data-app="ios android" data-payment="visa mastercard maestro paypal skrill neteller paysafecard bank_transfer mybank lottomaticard_on_shop" data-streaming="on" data-cashout="off" role="row" class="even">
                  <td class="td-logo mid better"><a style={{textDecoration: 'underline'}} href="https://better.it/"><span>Better </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="250"><strong>Rimborsi fino a 250€ Cashback</strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability yes">Sì</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>75</strong>/100</td>
                </tr>
                <tr data-amount="10" data-type="100_per_prima" data-app="android" data-payment="visa mastercard paypal skrill neteller postepay" data-streaming="off" data-cashout="off" role="row" class="odd">
                  <td class="td-logo mid sportpesa"><a style={{textDecoration: 'underline'}} href="https://sportpesa.it/"><span>SportPesa </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="010"><strong>100% fino a 10€ Prima scommessa</strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability no">No</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>74</strong>/100</td>
                </tr>
                <tr data-amount="20" data-type="50_per_prima" data-app="ios android" data-payment="visa mastercard postepay paypal skrill neteller paysafecard bank_transfer" data-streaming="off" data-cashout="off" role="row" class="even">
                  <td class="td-logo mid betclic"><a style={{textDecoration: 'underline'}} href="https://betclic.it/"><span>Betclic </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="150"><strong>50% fino a 150€ Prima scommessa</strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability no">No</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>74</strong>/100</td>
                </tr>
                <tr data-amount="0" data-type="nessuno" data-app="nessuna" data-payment="visa mastercard skrill neteller paypal paysafecard bank transfer postepay cartasi onshop epay safecharge" data-streaming="off" data-cashout="off" role="row" class="odd">
                  <td class="td-logo mid starcasino"><a style={{textDecoration: 'underline'}} href="https://starcasino.it/"><span>StarCasinò </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="000"><strong>Non disponibile</strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability no">No</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>74</strong>/100</td>
                </tr>
                <tr data-amount="100" data-type="100_sul_deposito" data-app="nessuna" data-payment="visa mastercard paypal skrill ukash" data-streaming="off" data-cashout="off" role="row" class="even">
                  <td class="td-logo mid leovegas"><a style={{textDecoration: 'underline'}} href="https://leovegas.it/"><span>LeoVegas </span> <em className={"feather icon-external-link"} /></a></td>
                  <td class="td-bonus" data-sort="100"><strong>100% fino a 100€ primo deposito</strong></td>
                  <td class="td-paypal availability yes">Sì</td>
                  <td class="td-live fil-streaming availability no">No</td>
                  <td class="td-cash fil-cashout availability no">No</td>
                  <td class="td-rating sorting_1"><strong>71</strong>/100</td>
                </tr>
              </tbody>
            </table>
            <Card.Footer>
              <small>*Le scommesse non garantiscono vincite sicure. Si applicano termini e condizioni, il gioco è riservato ai maggiorenni. 18+</small>
            </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
    </Aux>
  );
};

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookmakersTable));