import React, { Component } from "react";

export default class Outcome extends Component {

    render() {
        let className = "";

        switch(this.props.outcome) {
            case 'win':
                className = "badge bg-green";
                break;
            case 'lose':
                className = "badge bg-red";
                break;
            case '1/2 win':
            case '1/2 lose':
                className = "badge bg-orange";
                break;
            default:
            case 'void':
                className = "badge bg-gray";
                break;
        }

        return <span class={className} style={{fontSize: "1.1em", padding: 7, opacity: 0.8}}>{this.props.outcome}</span>;
    }
}
