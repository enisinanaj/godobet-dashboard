import React, {Component} from 'react';
import { connect } from 'react-redux';
import { CardBody, PopoverBody, Table, Button, Popover } from 'reactstrap';
import moment from 'moment';
import ShadowCard from '../../components/layout/ShadowCard'
import Label from '../../components/layout/Label';

class PopoverItem extends Component {
    state = { popoverOpen: false }
    toggle = () => this.setState({
        popoverOpen: !this.state.popoverOpen
    })
    render() {
        return (
            <span>
                <Button className="mr-1" color="secondary" id={'Popover-' + this.props.id} onClick={this.toggle}><em className="fa fa-info" /></Button>
                <Popover placement={'top'} isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle}>
                    <PopoverBody>{this.props.notes}</PopoverBody>
                </Popover>
            </span>
        )
    }
}

class PoolData extends Component {

    getOutcomeColorClassName(outcome) {
        let result = "";

        switch(outcome) {
            case 'win':
                result = "bg-success-dark";
                break;
            case 'lose':
                result = "bg-danger-dark";
                break;
            case '1/2 win':
                result = "bg-success-light";
                break;
            case '1/2 lose':
                result = "bg-danger-light";
                break;
            case 'void':
                result = "bg-gray";
                break;
            default:
                break;
        }

        return result;
    }

    isPlayed(event) {
        let eventIsPlayed = false;
        this.props.playedEvents.forEach(played => {
            if (played.id === event.eventCode) {
                eventIsPlayed = true;
                return;
            }
        });

        return eventIsPlayed;
    }

    render() {
        return (
            <ShadowCard className="card bg-light mb-3" style={{height: "100%", borderRight: "1px solid #dedede"}}>
                <div className="card-header">
                    <Label>Dettaglio risultati</Label>
                </div>
                <CardBody>
                    <Table bordered hover responsive>
                        <thead>
                            <tr>
                                <th scope="col">Data evento</th>
                                <th scope="col">Sport</th>
                                <th scope="col">Sesso</th>
                                <th scope="col">Competizione</th>
                                <th scope="col">Evento</th>
                                <th scope="col">Tip</th>
                                <th scope="col">Esito Event</th>
                                <th scope="col">Quota</th>
                                <th scope="col">Stake</th>
                                <th scope="col">Esito Schedina</th>
                                <th scope="col">Profitto</th>
                                <th scope="col">Bookmaker</th>
                                <th scope="col">Note</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.pools.map((pool, i) => {
                                var poolDone = false;
                                var events = pool.events.filter(event => {
                                    if (moment(event.eventDate).diff(this.props.endDate) > 0 && !event.outcome) {
                                        return false;
                                    }
                                    return true;
                                });
                                var eventLength = events.length;

                                return events.map((event, j) => {
                                    return (<tr key={pool._links.self.href + "/" + i + "/" + j}>
                                        <td>{moment(event.eventDate).format("DD MMM YYYY HH:mm")}</td>
                                        <td>{event.sport}</td>
                                        <td>{event.genderValue}</td>
                                        <td>{event.competition}</td>
                                        <td>
                                            {event.event}
                                            <br />
                                            {this.isPlayed(event) && <span className={"badge bg-green"}>Evento giocato</span>}
                                        </td>
                                        <td>{event.proposal}</td>
                                        <td className={this.getOutcomeColorClassName(event.outcome)}>{event.outcome}</td>
                                        <td>
                                            {(event.quote / 100).toLocaleString("it-IT", {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                                        </td>
                                        {!poolDone && <td rowSpan={eventLength}>
                                            {(pool.stake / 100).toLocaleString("it-IT", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%"}
                                        </td>}
                                        
                                        {!poolDone && <td rowSpan={eventLength} className={this.getOutcomeColorClassName(pool.outcome)}>{pool.outcome}</td>}
                                        {!poolDone && <td rowSpan={eventLength}>
                                            {(pool.profit).toLocaleString("it-IT", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%"}
                                        </td>}
                                        {!poolDone && <td rowSpan={eventLength} >{pool.bookmaker}</td>}

                                        <td>
                                            {event.notes && <PopoverItem id={i + "_" + j} notes={event.notes}></PopoverItem>}
                                        </td>
                                        
                                        {poolDone = true}
                                    </tr>)
                                });
                            })}
                        </tbody>
                    </Table>
                </CardBody>
            </ShadowCard>
        );

    }

}

export default connect(state => ({app: state.app}))(PoolData);