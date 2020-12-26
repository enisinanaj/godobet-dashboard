import React, {Component} from 'react';
import { connect } from 'react-redux';
import { CardBody, PopoverBody, Table, Button, Popover } from 'reactstrap';
import moment from 'moment';
import ShadowCard from '../../components/layout/ShadowCard'

class PopoverItem extends Component {
    state = { popoverOpen: false }
    toggle = () => this.setState({
        popoverOpen: !this.state.popoverOpen
    })
    render() {
        return (
            <span>
                <Button className="mr-1" color="secondary" id={'Popover-' + this.props.id} onClick={this.toggle}><em class="fa fa-info" /></Button>
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
                result = "bg-success-dark"
                break;
            case 'lose':
                result = "bg-danger-dark"
                break;
            case '1/2 win':
                result = "bg-success-light"
                break;
            case '1/2 lose':
                result = "bg-danger-light"
                break;
        }

        return result;
    }

    render() {
        return (
            <ShadowCard className="card bg-light mb-3" style={{height: "100%", borderRight: "1px solid #dedede"}}>
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
                                return pool.events.map((event, j) => {

                                    if (moment(event.eventDate).diff(this.props.endDate) > 0 && !event.outcome) {
                                        return null;
                                    }

                                    return (<tr>
                                        <td>{moment(event.eventDate).format("DD MMM YYYY HH:mm")}</td>
                                        <td>{event.sport}</td>
                                        <td>{event.gender}</td>
                                        <td>{event.competition}</td>
                                        <td>{event.event}</td>
                                        <td>{event.proposal}</td>
                                        <td className={this.getOutcomeColorClassName(event.outcome)}>{event.outcome}</td>
                                        <td>
                                            {(event.quote / 100).toLocaleString("it-IT", {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                                        </td>
                                        {!poolDone && <td rowSpan={pool.events.length}>
                                            {(pool.stake / 100).toLocaleString("it-IT", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%"}
                                        </td>}
                                        
                                        {!poolDone && <td rowSpan={pool.events.length} className={this.getOutcomeColorClassName(pool.outcome)}>{pool.outcome}</td>}
                                        {!poolDone && <td rowSpan={pool.events.length}>
                                            {(pool.profit).toLocaleString("it-IT", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%"}
                                        </td>}
                                        {!poolDone && <td rowSpan={pool.events.length} >{pool.bookmaker}</td>}

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