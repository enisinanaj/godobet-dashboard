import React, {Component} from 'react';
import { Card, CardHeader, CardBody, CardFooter, Row, Col, FormGroup } from 'reactstrap';
import PropTypes from 'prop-types';

class PoolCard extends Component {
    static propTypes = {
        id: PropTypes.string,
        description: PropTypes.string,
        quote: PropTypes.string,
        stake: PropTypes.string,
        profit: PropTypes.string,
        bookmaker: PropTypes.string,
        totalEvents: PropTypes.string,
        poolCreatedOn: PropTypes.string,
        poolUpdatedOn: PropTypes.string,
    }

    render() {
        return(
            <Card className="card-default">
                <CardHeader>Riepilogo schedina {this.props.id}</CardHeader>
                <CardBody>
                    <Row>
                        <Col lg="6">
                            <FormGroup row>
                                <Col md="4">Descrizione:</Col>
                                <Col md="8">
                                    <strong>{this.props.description}</strong>
                                </Col>
                                <Col md="4">Quota:</Col>
                                <Col md="8">
                                    <strong>{this.props.quote}</strong>
                                </Col>
                                <Col md="4">Bookmaker:</Col>
                                <Col md="8">
                                    <strong>{this.props.bookmaker}</strong>
                                </Col>
                                <Col md="4">Creato il:</Col>
                                <Col md="8">
                                    <strong>{this.props.poolCreatedOn}</strong>
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col lg="6">
                            <FormGroup row>
                                <Col md="4">Stake:</Col>
                                <Col md="8">
                                    <strong>{this.props.stake}</strong>
                                </Col>
                                <Col md="4">Profitto:</Col>
                                <Col md="8">
                                    <strong>{this.props.profit}</strong>
                                </Col>
                                <Col md="4">Eventi totali:</Col>
                                <Col md="8">
                                    <strong>{this.props.totalEvents}</strong>
                                </Col>
                                <Col md="4">Modificato il:</Col>
                                <Col md="8">
                                    <strong>{this.props.eventUpdatedOn}</strong>
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter className="d-flex">
                    <div>
                        <button type="button" className="btn btn-xs btn-primary">Modifica</button>
                    </div>
                    <div className="ml-auto">
                        <button type="button" className="btn btn-xs btn-secondary">Elimina</button>
                    </div>
                </CardFooter>
            </Card>
        )
    }
}

export default PoolCard;