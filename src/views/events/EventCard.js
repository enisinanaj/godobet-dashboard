import React, {Component} from 'react';
import { Card, CardHeader, CardBody, CardFooter, Row, Col, FormGroup } from 'reactstrap';
import PropTypes from 'prop-types';

class EventCard extends Component {
    static propTypes = {
        id: PropTypes.string,
        eventDate: PropTypes.string,
        sport: PropTypes.string,
        competition: PropTypes.string,
        sex: PropTypes.string,
        proposal: PropTypes.string,
        event: PropTypes.string,
        quote: PropTypes.string,
        outcome: PropTypes.string,
        notes: PropTypes.string,
        poolId: PropTypes.string,
        eventCreatedOn: PropTypes.string,
        eventUpdatedOn: PropTypes.string,
    }

    render() {
        return(
            <Card className="card-default">
                <CardHeader>Riepilogo evento {this.props.id}</CardHeader>
                <CardBody>
                    <Row>
                        <Col lg="6">
                            <FormGroup row>
                                <Col md="4">Sport:</Col>
                                <Col md="8">
                                    <strong>{this.props.sport}</strong>
                                </Col>
                                <Col md="4">Sesso:</Col>
                                <Col md="8">
                                    <strong>{this.props.sex}</strong>
                                </Col>
                                <Col md="4">Evento:</Col>
                                <Col md="8">
                                    <strong>{this.props.event}</strong>
                                </Col>
                                <Col md="4">Risultato:</Col>
                                <Col md="8">
                                    <strong>{this.props.outcome}</strong>
                                </Col>
                                <Col md="4">ID Schedina:</Col>
                                <Col md="8">
                                    <strong>{this.props.outcome}</strong>
                                </Col>
                                <Col md="4">Creato il:</Col>
                                <Col md="8">
                                    <strong>{this.props.eventCreatedOn}</strong>
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col lg="6">
                            <FormGroup row>
                                <Col md="4">Data evento:</Col>
                                <Col md="8">
                                    <strong>{this.props.eventDate}</strong>
                                </Col>
                                <Col md="4">Competizione:</Col>
                                <Col md="8">
                                    <strong>{this.props.competition}</strong>
                                </Col>
                                <Col md="4">Proposta:</Col>
                                <Col md="8">
                                    <strong>{this.props.proposal}</strong>
                                </Col>
                                <Col md="4">Quota:</Col>
                                <Col md="8">
                                    <strong>{this.props.quote}</strong>
                                </Col>
                                <Col md="4">Note:</Col>
                                <Col md="8">
                                    <strong>{this.props.notes}</strong>
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

export default EventCard;