import React, {Component} from 'react';
import { Card } from 'reactstrap';

export default class ShadowCard extends Component {    
    render() {
        let additionalShadow = "";

        switch(this.props.outcome) {
            case 'win':
                additionalShadow = '2px solid green'
                break;
            case 'lose':
                additionalShadow = '2px solid red'
                break;
            case '1/2 win':
            case '1/2 lose':
                additionalShadow = '2px solid orange'
                break;
            case 'void':
                additionalShadow = '2px solid grey'
                break;
            default:
                additionalShadow = "none";
                break;
        }
        // additionalShadow = "0px 0px 15px -5px " + this.props.outcome;

        return (<Card className={this.props.className} style={{height: "100%", borderRight: "1px solid #dedede", boxShadow: "0 0 15px -10px", outline: additionalShadow}}>
            {this.props.children}
        </Card>)
    }
}