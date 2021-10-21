import moment from 'moment';
import React from 'react';
import ReactToPrint from "react-to-print";
import PriceLabel from '../../App/components/PriceLabel';
import Aux from "../../hoc/_Aux";

moment.locale('IT-it');

const InvoiceBasic = (props) => {
    let componentRef = null;

    return (
        <Aux>
            <div className="container" id="printTable">
                <div>
                    <div className="" ref={el => (componentRef = el)}>
                        <div className="row invoice-contact">
                            <div className="col-md-12">
                                <div className="invoice-box row">
                                    <div className="col-sm-12">
                                        <table className="table table-responsive invoice-table table-borderless">
                                            <tbody>
                                                <tr>
                                                    <td>GODOBET</td>
                                                </tr>
                                                <tr>
                                                    <td>Via Cristoforo Colombo 102, 36061<br />Bassano del Grappa (VI)</td>
                                                </tr>
                                                <tr>
                                                    <td>P.IVA 04204380242</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="row invoive-info">
                                <div className="col-md-12 col-xs-12 invoice-client-info">
                                    <span className={"text-muted"}>Cliente</span>
                                    <h6>{props.subscription?.subscriber.name} {props.subscription?.subscriber.lastName}</h6>
                                </div>
                                <div className="col-md-12 col-sm-6">
                                    <span className={"text-muted"}>Ordine</span>
                                    <table className="table table-responsive invoice-table invoice-order table-borderless">
                                        <tbody>
                                            <tr>
                                                <th>Data:</th>
                                                <td>{moment(props.subscription?.subscribedOn).format("DD MMMM YYYY")}</td>
                                            </tr>
                                            <tr>
                                                <th>Stato: </th>
                                                <td>
                                                    <span className="label label-success">Pagata</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Id:</th>
                                                <td>
                                                    {props.subscription?.paymentSystemToken?.replace("cs_live_", "").substring(0, 11)}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Numero:</th>
                                                <td>
                                                    {props.subscription?.id}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-md-12 col-sm-6">
                                    <h6 className="text-uppercase text-primary">Totale:&nbsp;
                                        <span><PriceLabel amount={props.subscription?.service?.price / 100}></PriceLabel></span>
                                    </h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="table-responsive">
                                        <table className="table invoice-detail-table">
                                            <thead>
                                            <tr className="thead-default">
                                                <th>Servizio</th>
                                                <th>Prezzo</th>
                                                <th>Totale</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <h6>{props.subscription?.service?.serviceName}</h6>
                                                </td>
                                                <td><PriceLabel amount={props.subscription?.service?.price/100} /></td>
                                                <td><PriceLabel amount={props.subscription?.service?.price/100} /></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{display: "flex"}}>
                                <div className="col-sm-12">
                                    <table className="table table-responsive invoice-table invoice-total">
                                        <tbody>
                                        <tr>
                                            <th>Sub Total :</th>
                                            <td>$4725.00</td>
                                        </tr>
                                        <tr>
                                            <th>Taxes (10%) :</th>
                                            <td>$57.00</td>
                                        </tr>
                                        <tr>
                                            <th>Discount (5%) :</th>
                                            <td>$45.00</td>
                                        </tr>
                                        <tr className="text-info">
                                            <td>
                                                <hr />
                                                <h5 className="text-primary m-r-10">Total :</h5>
                                            </td>
                                            <td>
                                                <hr />
                                                <h5 className="text-primary">$ 4827.00</h5>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row" style={{display: "flex"}}>
                                <div className="col-sm-12">
                                    <h6>Terms and Condition :</h6>
                                    <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center btn-page">
                        <div className="col-sm-12 invoice-btn-group text-center">
                            <ReactToPrint
                                trigger={() => <button type="button" className="btn btn-primary btn-print-invoice m-b-10">Stampa</button>}
                                content={() => componentRef}
                            />
                            <button type="button" className="btn waves-effect waves-light btn-secondary m-b-10 " onClick={props.close}>Annulla</button>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    );
}

export default InvoiceBasic;