import React, {Component} from 'react';

export default class Label extends Component {

    render() {
        return (<div className={this.props.className} style={{fontWeight: "300", fontSize: '1rem', display: this.props.display ?? "block"}}>
            {this.props.children}
        </div>)
    }
}