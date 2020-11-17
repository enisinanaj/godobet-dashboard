import React, {Component} from 'react';

export default class DetailGrid extends Component {

    render() {
        return (<div className={this.props.className} style={{
            borderTopColor: '#e0e0e0', 
            borderTopWidth: this.props.borderTop ?? "1px", 
            borderTopStyle: "solid",
            borderBottomColor: '#e0e0e0',
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            paddingTop: "7px",
            paddingBottom: "7px",
            justifyContent: 'flex-start',
            flex: 1,
            display: "flex",
            flexWrap: "wrap",
            flexDirection: 'row',
            fontSize: '1rem'
          }}>
            {this.props.children}
        </div>)
    }

}