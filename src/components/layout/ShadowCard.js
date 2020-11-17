import React, {Component} from 'react';
import { Card } from 'reactstrap';

export default class ShadowCard extends Component {

    render() {
        return (<Card className={this.props.className} style={{height: "100%", borderRight: "1px solid #dedede", boxShadow: "0 0 15px -10px"}}>
            {this.props.children}
        </Card>)
    }
}