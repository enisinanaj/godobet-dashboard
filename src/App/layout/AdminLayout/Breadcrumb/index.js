import React, { Component } from "react";
import { Link } from "react-router-dom";

import config from "../../../../config";
import navigation from "../../../../menu-items";
import DEMO from "../../../../store/constant";
import Aux from "../../../../hoc/_Aux";

class Breadcrumb extends Component {
  state = {
    main: [],
    item: [],
  };

  componentDidMount() {
    navigation.items.map((item, index) => {
      if (item.type && item.type === "group") {
        this.getCollapse(item, index);
      }
      return false;
    });
  }

  UNSAFE_componentWillReceiveProps = () => {
    navigation.items.map((item, index) => {
      if (item.type && item.type === "group") {
        this.getCollapse(item);
      }
      return false;
    });
  };

  rightButton = null;

  getCollapse = (item) => {
    if (item.children) {
      item.children.filter((collapse) => {
        if (collapse.type && collapse.type === "collapse") {
          this.getCollapse(collapse);
        } else if (collapse.type && collapse.type === "item") {
          if (document.location.pathname === config.basename + collapse.url) {
            this.rightButton = collapse.rightButton;
            this.setState({ item: collapse, main: item });
          }
        }
        return false;
      });
    }
  };

  render() {
    let main, item;
    let breadcrumb = (children) => (
      <div className="page-header">
        <div className="page-block">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="page-header-title">
                <h5 className="m-b-10">{title}</h5>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    );

    let title = "Welcome";
    if (this.state.main && this.state.main.type === "collapse") {
      main = (
        <li className="breadcrumb-item">
          <a href={DEMO.BLANK_LINK}>{this.state.main.title}</a>
        </li>
      );
    }

    if (this.state.item && this.state.item.type === "item") {
      title = this.state.item.title;
      if (this.state.item.hidden) {
        item = "";
      } else {
        item = (
          <li className="breadcrumb-item">
            <a href={DEMO.BLANK_LINK}>{title}</a>
          </li>
        );
      }
      
      document.title = title + " | GODOBET";
    }

    if (this.state.item.length == 0 && this.state.main.length == 0) {
      return <Aux>
        <div className="page-header">
          <div className="page-block">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="page-header-title">
                  <h5 className="m-b-10">{title}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Aux>;
    }

    if (this.state.item.hidden) {
      return null;
    }

    return (<Aux>{breadcrumb(
      <Aux>
        <ul className="breadcrumb">
          {item !== '' && main !== '' &&
          <li className="breadcrumb-item">
            <Link to="/">
              <i className="feather icon-home" />
            </Link>
          </li>}
          {main}
          {item}
        </ul>
        <div style={{float: "right", top: 0, position: "absolute", right: 29}}>
          {this.rightButton}
        </div>
      </Aux>
      )}</Aux>);
  }
}

export default Breadcrumb;
